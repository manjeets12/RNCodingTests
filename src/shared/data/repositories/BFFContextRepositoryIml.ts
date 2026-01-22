// data/repositories/ContextRepositoryImpl.ts

import BFFService from "@/src/services/network/bffService";
import { DriverBFFContext } from "../../domain/entities/DriverBffContext";
import { BFFContextRepository } from "../../domain/repositories/BFFContextRepository";

export class BFFContextRepositoryIml implements BFFContextRepository {
    async getDriverContext(): Promise<DriverBFFContext> {
        const response = await BFFService.get({ url: '"/"' });
        return response as DriverBFFContext;
    }

}

