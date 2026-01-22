import BaseNetworkService, { NetworkAdapter, NetworkAdapterParams } from "./baseNetwork";


const mockAdapter: NetworkAdapter = async <T>(
    params: NetworkAdapterParams
): Promise<T> => {
    const { body, } = params;

    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            if ((body as any)?.otp === "1234") {
                resolve(true as T);
            } else {
                reject(new Error("Invalid OTP"));
            }
        }, 2000);
    });
};


//Currentely I am injecting adapter at service layer, this can further be moved to domain layer if needed
const AuthService = BaseNetworkService(
    "https://example.com/api/auth",
    {},
    mockAdapter
);

export default AuthService;