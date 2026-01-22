import { Shift } from "../entities/Shift";

export interface ShiftRepository {
    startShift(): Promise<Shift>;
    endShift(): Promise<void>;
    //getContext(): Promise<DriverContext>;
}