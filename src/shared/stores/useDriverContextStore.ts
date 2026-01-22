import { create } from "zustand";
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




const useDriverContextStore = create<DriverContextState>(set => ({
    driver: null,
    shift: null,
    orders: [],

    setContext: ({ driver, shift, orders }) =>
        set({ driver, shift, orders }),

    updateOrderStatus: (orderId, status) =>
        set(state => ({
            orders: state.orders?.map(o =>
                o.orderId === orderId ? { ...o, status } : o
            )
        })),

    reset: () =>
        set({
            driver: null,
            shift: null,
            orders: [],
            loading: false,
            error: undefined
        })
}));

export const selectOrderById =
    (orderId: string) =>
        (state: DriverContextState) =>
            state.orders?.find(o => o.orderId === orderId);



export default useDriverContextStore;
