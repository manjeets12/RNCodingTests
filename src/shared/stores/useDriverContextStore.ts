import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import ExpoSecureStorage from "../core/ExpoSecureStorage";
import { Driver } from "../domain/entities/Driver";
import { DriverBFFContext } from "../domain/entities/DriverBffContext";
import { Order } from "../domain/entities/Order";
import { Shift } from "../domain/entities/Shift";

type DriverContextState = DriverBFFContext & {
    /** reducers */
    setContext: (payload: {
        driver: Driver;
        shift: Shift | null;
        orders: Order[];
    }) => void;

    updateOrderStatus: (orderId: string, status: Order["status"]) => void;
    reset: () => void;
};

const useDriverContextStore = create<DriverContextState>()(
    persist(
        (set) => ({
            driver: null,
            shift: null,
            orders: [],

            setContext: ({ driver, shift, orders }) =>
                set({ driver, shift, orders }),

            updateOrderStatus: (orderId, status) =>
                set((state) => ({
                    orders: state.orders?.map((o) =>
                        o.orderId === orderId ? { ...o, status } : o
                    ),
                })),

            reset: () =>
                set({
                    driver: null,
                    shift: null,
                    orders: [],
                }),
        }),
        {
            name: "driver-context-store", // 🔑 storage key
            storage: createJSONStorage(() => ExpoSecureStorage), // swap for AsyncStorage in RN
            partialize: (state) => ({
                driver: state.driver,
                shift: state.shift,
                orders: state.orders,
            }),
        }
    )
);

export const selectOrderById =
    (orderId: string) =>
        (state: DriverContextState) =>
            state.orders?.find((o) => o.orderId === orderId);

export default useDriverContextStore;
