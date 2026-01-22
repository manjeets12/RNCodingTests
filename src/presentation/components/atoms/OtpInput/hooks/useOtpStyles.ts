import { useMemo } from "react";
import { OTP_INPUT_SIZE_CONFIG } from "../config";

const useOtpStyles = (size: 'small' | 'medium' | 'large') => {
    const dynamicStyles = useMemo(() => {
        return [OTP_INPUT_SIZE_CONFIG[size]];
    }, [size]);
    return dynamicStyles;
}
export default useOtpStyles;