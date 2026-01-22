export const initialMockState = {
  driver: {
    id: "drv_123",
    name: "Manjeet Singh",
    status: "SHIFT_INACTIVE" as "SHIFT_INACTIVE" | "SHIFT_ACTIVE"
  },

  shift: null as null | {
    shiftId: string;
    startTime: string;
    vehicle: {
      vehicleId: string;
      registrationNumber: string;
    };
  },

  orders: [
    {
      orderId: "ord_1",
      status: "PENDING",
      destination: "Hub A"
    },
    {
      orderId: "ord_2",
      status: "PENDING",
      destination: "Pump B"
    }
  ]
};
