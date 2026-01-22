import ShiftService from "@/src/services/network/shiftService";
import { Shift } from "@/src/shared/domain/entities/Shift";
import { ShiftRepository } from "@/src/shared/domain/repositories/ShiftRepository";

/**
 * DATA layer knows:
 * - which service to call
 * - how to map response
 * - where to cache later (optional)
 */
export class ShiftRepositoryImpl implements ShiftRepository {
    async startShift(): Promise<Shift> {
        const response = await ShiftService.put({ url: "/start" });
        return response as Shift;
    }

    async endShift(): Promise<void> {
        await ShiftService.put({ url: "/end" });
    }


}
