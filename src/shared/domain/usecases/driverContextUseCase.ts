import { BFFContextRepositoryIml } from "../../data/repositories/BFFContextRepositoryIml";
import useDriverContextStore from "../../stores/useDriverContextStore";
import { DriverBFFContext } from "../entities/DriverBffContext";

const DriverContextRepo = new BFFContextRepositoryIml();

export const DriverContextUseCase = {
    async getContext(): Promise<DriverBFFContext> {
        const previousShiftId = useDriverContextStore.getState().shift?.shiftId
        const response = await DriverContextRepo.getDriverContext();
        //Might need central logic to check if response is OK
        if ((response.driver || response.shift || response.orders) && previousShiftId !== response.shift?.shiftId) {
            useDriverContextStore.getState().setContext(response)
        }
        return response;

    },
}