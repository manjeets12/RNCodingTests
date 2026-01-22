import { LOCALE } from "../../../constants/locale";
import React from "react";
import { StyleSheet, View, } from 'react-native';
import CustomButton from "../../components/atoms/CustomButton";
import { CustomText } from "../../components/atoms/CustomText";
import OtpInput from "../../components/atoms/OtpInput";
import { sizes } from "../../theme";
import { globalStyles } from "../../theme/styles";
import useOtpResendTimer from "../../components/atoms/OtpInput/hooks/useOtpResendTimer";
import { formatOtpTime } from "../../../utils/formatter/dateAndTime";
import CONFIG from "../../../constants/config";
import useOtpVerificationLogics from "./hooks/useOtpVerificationLogics";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpVerificationProps } from "./types";
import { useLocalSearchParams } from "expo-router";


const OtpVerificationScreen = () => {
    const { title, message, ...props } = useLocalSearchParams<OtpVerificationProps>();
    const {
        state: {
            isOtpValid,
            loading,
            errorMessage,
            success
        },
        callbacks: {
            onOtpValueChange,
            onVerifyOtp,
        }
    } = useOtpVerificationLogics(props);

    const { otpTime, enableResend, onResendOtp, } = useOtpResendTimer(CONFIG.RESEND_OTP_TIMER_LIMIT, true);

    return (
        <SafeAreaView style={globalStyles.container}>
            <CustomText variant='displayMedium' style={styles.heading}>{title ?? LOCALE.OTP_VERIFICATION}</CustomText>
            <CustomText variant='bodyLarge' style={styles.message}>{message ?? LOCALE.ENTER_OTP}</CustomText>
            <OtpInput maxOtpSize={4} size='medium' onOtpValueChange={onOtpValueChange} errorMessage={errorMessage} />
            <CustomButton variant='primary' title="Verify OTP" disabled={!isOtpValid || loading || success} loading={loading} onPress={onVerifyOtp} />
            {success ? (
                <CustomText variant='bodyMedium' color='success' style={styles.successMessage}>{LOCALE.OTP_VERIFIED}</CustomText>
            ) :
                (
                    <View style={[globalStyles.rowCenter, styles.resendContainer]}>
                        <CustomText variant='bodyMedium'>{LOCALE.DIDNT_RECEIVE_OTP}</CustomText>
                        <CustomButton variant='link' title={`Resend OTP ${otpTime > 0 ? `in ${formatOtpTime(otpTime)}` : ''}`} onPress={onResendOtp} underline={false} disabled={!enableResend} />
                    </View>
                )}

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    heading: {
        marginVertical: sizes.spacing.lg,
    },
    message: {
        marginBottom: sizes.spacing.md,
    },
    resendContainer: {
        marginTop: sizes.spacing.sm,
        gap: sizes.spacing.xs,
    },
    successMessage: {
        marginTop: sizes.spacing.md,
    },

});

export default OtpVerificationScreen;


