import CustomButton from '@/src/presentation/components/atoms/CustomButton';
import CustomInput from '@/src/presentation/components/atoms/CustomInput';
import { CustomText } from '@/src/presentation/components/atoms/CustomText';
import { colors, sizes } from '@/src/presentation/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';


export interface LoginProps {
    mobile: string;
    onMobileChange: (value: string) => void;
    onGetOtp: () => void;
    loading?: boolean;
}

const Login: React.FC<LoginProps> = ({ mobile, onMobileChange, onGetOtp, loading }) => (
    <View style={styles.container}>
        <CustomText variant="displayMedium" style={styles.heading}>Login</CustomText>
        <CustomInput
            style={styles.input}
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={onMobileChange}
            maxLength={10}
        />
        <CustomButton
            title="Get OTP"
            variant="primary"
            onPress={onGetOtp}
            disabled={mobile.length !== 10 || loading}
            loading={loading}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
    },
    heading: {
        marginBottom: sizes.spacing.lg,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.borderMedium,
        borderRadius: sizes.radius.md,
        padding: sizes.spacing.md,
        marginBottom: sizes.spacing.md,
        fontSize: sizes.font.bodyLarge,
    },
});

export default Login;
