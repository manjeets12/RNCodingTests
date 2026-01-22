import { Driver } from "./Driver";
import { Order } from "./Order";
import { Shift } from "./Shift";

export interface DriverBFFContext {
    driver: Driver;
    shift: Shift | null;
    orders?: Order[]
};