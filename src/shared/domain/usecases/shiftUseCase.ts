import { ShiftRepositoryImpl } from "../../data/repositories/ShiftRepositoryImpl";
import { Shift } from "../entities/Shift";

/**
 * ShiftUseCase
 *  - Exposes all shift-related actions
 *  - Internally owns its repository dependency
 *  - UI imports ONLY this file
 */

const shiftRepository = new ShiftRepositoryImpl();

export const ShiftUseCase = {
    start(): Promise<Shift> {
        return shiftRepository.startShift();
    },

    end(): Promise<void> {
        return shiftRepository.endShift();
    },


};
