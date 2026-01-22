import { Vehicle } from "./Vehicle";

export interface Shift {
    shiftId: string;
    startTime: string;
    vehicle: Vehicle;
}
