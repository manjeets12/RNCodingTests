import { mockBackend } from "./__mock__/createMockBackend";
import BaseNetworkService from "./baseNetwork";




const BFFService = BaseNetworkService(
    "https://example.com/api/bff",
    {},
    mockBackend.bffAdapter
);

export default BFFService;
