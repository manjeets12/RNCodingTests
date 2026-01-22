import { getUUID } from "@/src/utils";
import { NetworkAdapterParams } from "../baseNetwork";
import { initialMockState } from "./mockState";

const createMockBackend = () => {
    // Clone initial state into closure
    let driver = { ...initialMockState.driver };
    let shift = initialMockState.shift
        ? { ...initialMockState.shift }
        : null;
    let orders = initialMockState.orders.map(o => ({ ...o }));

    return {
        // -----------------------
        // BFF / Context Adapter
        // -----------------------
        bffAdapter: async <T>({ }: NetworkAdapterParams): Promise<T> => {
            return new Promise<T>(resolve => {
                setTimeout(() => {
                    resolve({
                        driver,
                        shift,
                        orders: shift ? orders : [],
                        meta: {
                            serverTime: new Date().toISOString()
                        }
                    } as T);
                }, 500);
            });
        },

        // -----------------------
        // Shift Adapter
        // -----------------------
        shiftAdapter: async <T>(
            { path }: NetworkAdapterParams
        ): Promise<T> => {
            return new Promise<T>((resolve, reject) => {
                setTimeout(() => {
                    if (path?.includes("/start")) {
                        if (driver.status === "SHIFT_ACTIVE") {
                            reject(new Error("Shift already active"));
                            return;
                        }

                        driver = { ...driver, status: "SHIFT_ACTIVE" };
                        shift = {
                            shiftId: getUUID(),
                            startTime: new Date().toISOString(),
                            vehicle: {
                                vehicleId: "veh_101",
                                registrationNumber: "HR26AB1234"
                            }
                        };

                        resolve(shift as T);
                        return;
                    }

                    if (path?.includes("/end")) {
                        driver = { ...driver, status: "SHIFT_INACTIVE" };
                        shift = null;

                        resolve({ success: true } as T);
                        return;
                    }

                    reject(new Error("Unknown shift action"));
                }, 800);
            });
        },

        // -----------------------
        // OMS Adapter
        // -----------------------
        omsAdapter: async <T>(
            { method, body }: NetworkAdapterParams
        ): Promise<T> => {
            return new Promise<T>((resolve, reject) => {
                setTimeout(() => {
                    if (method === "GET") {
                        resolve(orders as T);
                        return;
                    }

                    if (method === "PUT") {
                        const { orderId, status } = body as any;
                        const order = orders.find(o => o.orderId === orderId);

                        if (!order) {
                            reject(new Error("Order not found"));
                            return;
                        }

                        order.status = status;
                        resolve({ ...order } as T);
                        return;
                    }

                    reject(new Error("Unsupported OMS operation"));
                }, 600);
            });
        }
    };
};

export const mockBackend = createMockBackend();

