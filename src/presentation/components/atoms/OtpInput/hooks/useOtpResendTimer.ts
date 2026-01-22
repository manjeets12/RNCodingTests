import { useRef, useState, useEffect, useCallback } from "react";

/**
 * 
 * @param timerLimit time in seconds
 * @returns 
 */
const useOtpResendTimer = (timerLimit: number, startOnMount?: boolean) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [otpTime, setOtpTime] = useState(startOnMount ? timerLimit : 0);

    const clearTimer = useCallback(() => {
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const startTimer = useCallback(() => {
        clearTimer();
        setOtpTime(timerLimit);
    }, [timerLimit]);

    /**
     * On every second decrease the timer by 1, until it reaches 0
     */
    useEffect(() => {
        if (otpTime <= 0) {
            clearTimer();
            return;
        }
        timerRef.current = setTimeout(() => {
            setOtpTime(prev => prev - 1);
        }, 1000);
        return clearTimer
    }, [otpTime]);


    const enableResend = otpTime <= 0;

    const onResendOtp = useCallback(() => {
        if (enableResend) {
            startTimer();
        }
    }, [enableResend, startTimer]);

    return {
        otpTime,
        enableResend,
        onResendOtp,
    };
}

export default useOtpResendTimer;


