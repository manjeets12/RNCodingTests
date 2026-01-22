import { Order, OrderStatus } from "../entities/Order";

export interface OrderRepository {
    getOrders(): Promise<Order[]>;
    updateDelivery(orderId: string, status: OrderStatus): Promise<Order>;
}
