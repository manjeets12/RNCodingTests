export type DriverStatus = "SHIFT_ACTIVE" | "SHIFT_INACTIVE";

export interface Driver {
    id: string;
    name: string;
    status: DriverStatus;
}
