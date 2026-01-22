import { LOCALE } from '@/src/constants/locale';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../../theme/styles';
import Login from './login';
import OtpVerification from './otpVerification';

type AuthStep = 'LOGIN' | 'OTP';

const Authentication: React.FC = () => {
    const [step, setStep] = useState<AuthStep>('LOGIN');
    const [mobile, setMobile] = useState('');

    // Handler for when OTP is requested
    const handleOtpRequested = useCallback((enteredMobile: string) => {
        setMobile(enteredMobile);
        setStep('OTP');
    }, []);

    // Handler to go back to login (if needed)
    const handleBackToLogin = useCallback(() => {
        setStep('LOGIN');
        //setMobile('');
    }, []);

    return (
        <SafeAreaView style={globalStyles.container}>
            {step === 'LOGIN' ? (
                <Login
                    mobile={mobile}
                    onMobileChange={setMobile}
                    onGetOtp={() => handleOtpRequested(mobile)}
                />
            ) : (
                <OtpVerification
                    identifier={mobile}
                    identifierType="MOBILE"
                    title={LOCALE.OTP_VERIFICATION}
                    message={`${LOCALE.ENTER_OTP} ${LOCALE.FOR_MOBILE}`}
                    onEditIdentifier={handleBackToLogin}

                />
            )}
        </SafeAreaView>
    );
};

export default Authentication;
