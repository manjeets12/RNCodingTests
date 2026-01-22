
import CONFIG from "@/src/constants/config";
import { LOCALE } from "@/src/constants/locale";
import CustomButton from "@/src/presentation/components/atoms/CustomButton";
import { CustomText } from "@/src/presentation/components/atoms/CustomText";
import OtpInput from "@/src/presentation/components/atoms/OtpInput";
import useOtpResendTimer from "@/src/presentation/components/atoms/OtpInput/hooks/useOtpResendTimer";
import { sizes } from "@/src/presentation/theme";
import { globalStyles } from "@/src/presentation/theme/styles";
import { formatOtpTime } from "@/src/utils/formatter/dateAndTime";
import { StyleSheet, View } from "react-native";
import useOtpVerificationLogics from "../hooks/useOtpVerificationLogics";
import { OtpVerificationProps } from "./types";


const OtpVerificationScreen = ({ title, message, onEditIdentifier, ...props }: OtpVerificationProps) => {
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
        <>
            <CustomText variant='displayMedium' style={styles.heading}>{title ?? LOCALE.OTP_VERIFICATION}</CustomText>
            <CustomText variant='bodyLarge' style={styles.message}>{message ?? LOCALE.ENTER_OTP}</CustomText>
            {!!props?.identifier && <View style={globalStyles.row}>
                <CustomText variant='bodyLarge' >{props.identifier}</CustomText>
                <CustomButton onPress={() => { onEditIdentifier?.() }} title='Edit' variant='link' size='small' />
            </View>}
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

        </>
    );
}


const styles = StyleSheet.create({
    heading: {
        marginVertical: sizes.spacing.lg,
    },
    message: {
        marginBottom: sizes.spacing.xs,
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


