import { mockBackend } from "./__mock__/createMockBackend";
import BaseNetworkService from "./baseNetwork";



const OMSService = BaseNetworkService(
    "https://example.com/api/orders",
    {},
    mockBackend.omsAdapter
);

export default OMSService;

