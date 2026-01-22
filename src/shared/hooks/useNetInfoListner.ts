import { useEffect } from "react";
import NetInfoManager from "../core/NetInfoManager";

const useNetInfoListner = () => {
    useEffect(() => {
        NetInfoManager.start()
    }, [])
}
export default useNetInfoListner;