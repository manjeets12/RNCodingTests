import React, { memo } from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { colors, sizes } from '../../../theme';
import useOtpLogics from './hooks/useOtpLogics';
import useOtpStyles from './hooks/useOtpStyles';
import { OtpInputProps } from './types';
import { CustomText } from '../CustomText';


const OtpInput = ({ maxOtpSize = 4, size = 'medium', onOtpValueChange, errorMessage = '' }: OtpInputProps) => {
    const { inputsRefs,
        state: { otpValues, focusedIndex },
        callbacks: { onChangeText, onKeyPress, onOtpPress }
    } = useOtpLogics({ maxOtpSize, onOtpValueChange });

    const dynamicStyles = useOtpStyles(size);

    return (

        <View style={styles.otpContainer}>
            <TouchableWithoutFeedback onPress={onOtpPress}>
                <View style={styles.content}>
                    {inputsRefs.current.map((ref, index) => (
                        <TextInput
                            key={index} ref={ref} maxLength={1}
                            style={[styles.otpInput, ...dynamicStyles, focusedIndex >= index && styles.focusedInput]}
                            onKeyPress={(e) => {
                                onKeyPress(e, index);
                            }}
                            onChangeText={(text) => { onChangeText(text, index) }}
                            keyboardType='number-pad'
                            pointerEvents='none'
                            value={otpValues[index]}
                            textContentType="oneTimeCode"
                        />
                    ))}
                </View>
            </TouchableWithoutFeedback>
            {errorMessage && <CustomText variant='bodySmall' color='error' style={styles.error}>{errorMessage}</CustomText>}
        </View>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        marginVertical: 20,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: sizes.spacing.md,
    },

    otpInput: {
        borderWidth: 2,
        borderColor: colors.primaryContainer,
        textAlign: 'center',
        borderRadius: sizes.radius.md,
    },
    focusedInput: {
        borderColor: colors.primary,
    },
    error: {
        marginTop: sizes.spacing.sm,
    }
});

export default memo(OtpInput);