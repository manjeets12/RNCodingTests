import AuthService from "@/src/services/network/authService";
import { useState, useCallback, useRef, useEffect, } from "react";
import { BaseOtpVerificationPorps } from "../types";
import { useRouter } from "expo-router";

const useOtpVerificationLogics = (props: BaseOtpVerificationPorps) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const router = useRouter(); //This became bit dirty, need abstraction
    const [otp, setOtp] = useState('');
    const [isOtpValid, setIsOtpValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        return () => {
            timerRef.current && clearTimeout(timerRef.current);
        }
    }, [])

    const onOtpValueChange = useCallback((otp: string, isValid: boolean) => {
        if (isValid) {
            setOtp(otp);
        }
        setIsOtpValid(isValid);
        setErrorMessage(prev => prev ? '' : prev);
    }, []);

    const onVerifyOtp = useCallback(async () => {
        if (isOtpValid) {
            try {
                setLoading(true);
                const { identifier, identifierType, } = props ?? {};
                const response = await AuthService.post({ url: '/verify', body: { otp, identifier, identifierType } });
                console.log('OTP Verified', otp);
                setLoading(false);
                setSuccess(true);
                //Process token or data
                setTimeout(() => {
                    router.back(); //close the flow on success
                }, 1000)

            } catch (error: any) {
                console.error('OTP Verification failed:', error?.message);
                error?.message && setErrorMessage(error?.message);
            } finally {
                setLoading(false);
            }
        }
    }, [isOtpValid, otp]);

    return {
        state: {
            isOtpValid,
            loading,
            errorMessage,
            success,
        },
        callbacks: {
            onOtpValueChange,
            onVerifyOtp,
        }
    }
}

export default useOtpVerificationLogics;