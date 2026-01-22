import { OrderRepositoryImpl } from "../../data/repositories/OrderRepositoryImpl";
import useDriverContextStore from "../../stores/useDriverContextStore";
import { Order } from "../entities/Order";

const orderRepository = new OrderRepositoryImpl();

export const OrderUseCase = {
    async markDelivered(orderId: string): Promise<Order> {
        useDriverContextStore.getState().updateOrderStatus(orderId, 'DELIVERED'); // M
        try {
            return await orderRepository.updateDelivery(orderId, 'DELIVERED');
        } catch (e) {
            //Add this to pending actions queue
            throw e
        }
    },
    async markDeliveryFailed(orderId: string): Promise<Order> {
        useDriverContextStore.getState().updateOrderStatus(orderId, "FAILED"); // M
        try {
            return await orderRepository.updateDelivery(orderId, 'FAILED');
        } catch (e) {
            //Add this to pending actions queue
            throw e
        }
    },
};