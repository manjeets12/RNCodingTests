import { useCallback, useState } from 'react';

export const useLoginLogic = (onOtpRequested: (mobile: string) => void) => {
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);

    const onMobileChange = useCallback((value: string) => {
        setMobile(value.replace(/\D/g, ''));
    }, []);

    const onGetOtp = useCallback(() => {
        if (mobile.length === 10) {
            setLoading(true);
            onOtpRequested(mobile);
            setLoading(false);
        }
    }, [mobile, onOtpRequested]);

    return {
        mobile,
        loading,
        onMobileChange,
        onGetOtp,
    };
};
