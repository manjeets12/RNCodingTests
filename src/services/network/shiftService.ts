import BaseNetworkService from "./baseNetwork";


import { mockBackend } from "./__mock__/createMockBackend";



const ShiftService = BaseNetworkService(
    "https://example.com/api/shift",
    {},
    mockBackend.shiftAdapter
);

export default ShiftService;
