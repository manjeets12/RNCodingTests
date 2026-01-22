import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

type NetworkListener = (isOnline: boolean, state: NetInfoState) => void;

class NetInfoWrapper {
    private isOnline = true;
    private listeners = new Set<NetworkListener>();
    private unsubscribeNetInfo: (() => void) | null = null;

    /**
     * Attach OS-level listener once.
     * Optional callback for immediate bootstrap logic.
     */
    start(onChange?: NetworkListener) {
        if (this.unsubscribeNetInfo) return;

        this.unsubscribeNetInfo = NetInfo.addEventListener(state => {
            const online =
                Boolean(state.isConnected) &&
                state.isInternetReachable !== false;

            this.isOnline = online;

            // 1️⃣ internal subscribers
            this.listeners.forEach(cb => cb(online, state));

            // 2️⃣ optional bootstrap callback
            onChange?.(online, state);
        });
    }

    subscribe(listener: NetworkListener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    getStatus() {
        return this.isOnline;
    }

    stop() {
        this.unsubscribeNetInfo?.();
        this.unsubscribeNetInfo = null;
        this.listeners.clear();
    }
}

const NetInfoManager = new NetInfoWrapper();
export default NetInfoManager;