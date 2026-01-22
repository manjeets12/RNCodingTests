import { DriverBFFContext } from "../entities/DriverBffContext";

export interface BFFContextRepository {
    getDriverContext(): Promise<DriverBFFContext>
}