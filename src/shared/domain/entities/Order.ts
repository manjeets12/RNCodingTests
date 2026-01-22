export type OrderStatus = "PENDING" | "DELIVERED" | "FAILED";

export interface Order {
    orderId: string;
    status: OrderStatus;
    destination: string;
}
