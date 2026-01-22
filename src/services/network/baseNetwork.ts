type HeadersMap = Record<string, string>;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"; //can be extended as needed

type NetworkRequestParams = {
    url: string,
    body?: any,
    options?: RequestInit
}

type NetworkClient = {
    get: <T>(data: NetworkRequestParams) => Promise<T>;
    post: <T>(data: NetworkRequestParams) => Promise<T>;
};


export type NetworkAdapterParams = NetworkRequestParams & { method: HttpMethod }
//Keeping it object as more than two parameters makes it more error prone
export type NetworkAdapter = <T>(params: NetworkAdapterParams) => Promise<T>;



function BaseNetworkService(
    baseURL: string,
    defaultHeaders: HeadersMap = {},
    adapter: NetworkAdapter
): NetworkClient {
    const request = <T>({
        method,
        url: path,
        body,
        options,
    }: NetworkAdapterParams) => {
        if (adapter === undefined) {
            throw new Error("Network adapter is not defined");
        }
        if (typeof adapter !== 'function') {
            throw new Error("Network adapter is not a function");
        }
        if (!baseURL) {
            throw new Error("Base URL is not defined");
        }
        return adapter<T>({
            method,
            url: `${baseURL}/${path}`,
            //GET doesn't have body, so we might have to handle that in adapter if needed
            body,
            options: {
                headers: {
                    "Content-Type": "application/json",
                    ...defaultHeaders,
                    ...(options?.headers ?? {}),
                },
                ...options,
            }
        });
    };

    return {
        get: <T>(data: NetworkRequestParams) => request<T>({ method: "GET", ...data }),
        post: <T>(data: NetworkRequestParams) => request<T>({ method: "POST", ...data }),
    };
}

export default BaseNetworkService;
