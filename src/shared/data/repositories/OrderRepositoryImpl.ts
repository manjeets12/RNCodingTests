import OMSService from "@/src/services/network/omsService";
import { Order, OrderStatus } from "@/src/shared/domain/entities/Order";
import { OrderRepository } from "@/src/shared/domain/repositories/OrderRepository";

export class OrderRepositoryImpl implements OrderRepository {
    async getOrders(): Promise<Order[]> {
        return OMSService.get({ url: "/" }) as Promise<Order[]>;
    }

    async updateDelivery(orderId: string, status: OrderStatus): Promise<Order> {
        return OMSService.put({ url: "/", body: { orderId, status } }) as Promise<Order>;
    }
}
