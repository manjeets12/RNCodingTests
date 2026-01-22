import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, TextStyle } from 'react-native';
import { colors, sizes, typography } from '../../../theme';

import { BUTTON_SIZES } from './buttonConfig';
import { BaseButtonProps } from './types';
import { CustomText } from '../CustomText';
import CONFIG from '../../../../constants/config';


//Note: Link Button can be moved to separate Atom, as usually it styling and composition could create lot of complexities here
const BaseButton: React.FC<BaseButtonProps> = ({
    title,
    onPress,
    disabled = false,
    loading = false,
    containerStyle,
    textStyle,
    testID,
    size = 'medium',
    variant = 'primary',
    underline = false,
}) => {
    if (variant === 'link') {
        const linkTextStyle = [
            styles.linkText,
            underline ? { textDecorationLine: 'underline' as TextStyle['textDecorationLine'] } : undefined,
            disabled ? styles.disabledLinkText : undefined,
            textStyle,
        ];
        return (
            <TouchableOpacity
                style={[
                    BUTTON_SIZES[size],
                    containerStyle,
                    disabled && styles.disabled,
                ]}
                onPress={onPress}
                disabled={disabled || loading}
                activeOpacity={CONFIG.BUTTON_ACTIVE_OPACITY}
                testID={testID}
            >
                {loading ? (
                    <ActivityIndicator color={textStyle?.color || colors.primary} />
                ) : (
                    <CustomText style={linkTextStyle}>{title}</CustomText>
                )}
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity
            style={[
                styles.button,
                BUTTON_SIZES[size],
                containerStyle,
                disabled && styles.disabled,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={CONFIG.BUTTON_ACTIVE_OPACITY}
            testID={testID}
        >
            {loading ? (
                <ActivityIndicator color={textStyle?.color || colors.primary} />
            ) : (
                <CustomText style={[styles.text, textStyle]}>{title}</CustomText>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        minHeight: sizes.button.height,
        borderRadius: sizes.radius.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: typography.labelLarge.fontSize,
        fontWeight: typography.labelLarge.fontWeight,
        fontFamily: typography.labelLarge.fontFamily,
        letterSpacing: typography.labelLarge.letterSpacing,
        textTransform: 'uppercase',
        color: colors.primary,
    },
    disabled: {
        opacity: 0.5,
    },
    linkText: {
        color: colors.primary,
        fontSize: typography.labelLarge.fontSize,
        fontWeight: typography.labelLarge.fontWeight,
        fontFamily: typography.labelLarge.fontFamily,
        letterSpacing: typography.labelLarge.letterSpacing,
    },
    disabledLinkText: {
        color: colors.textDisabled || '#A0A0A0',
    },
});

export default BaseButton;
