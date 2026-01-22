import AuthService from "@/src/services/network/authService";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState, } from "react";
import { useSession } from "../../../contexts/AuthContext";
import { BaseOtpVerificationPorps } from "../otpVerification/types";

const useOtpVerificationLogics = (props: BaseOtpVerificationPorps) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const router = useRouter();
    const { signIn } = useSession();
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
                const response = await AuthService.post<{ token: string }>({ url: '/verify', body: { otp, identifier, identifierType } });
                setLoading(false);

                if (response?.token) {
                    setSuccess(true);
                    //Just for mocking the behaviour
                    setTimeout(() => {
                        signIn(response.token);
                    }, 1000);
                }
            } catch (error: any) {
                console.error('OTP Verification failed:', error?.message);
                error?.message && setErrorMessage(error?.message);
            } finally {
                setLoading(false);
            }
        }
    }, [isOtpValid, otp, signIn, props, router]);

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