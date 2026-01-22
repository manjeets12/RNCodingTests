import { TextStyle, ViewStyle } from 'react-native';
import { colors, sizes, typography } from '../../../theme';
import { ButtonVariant } from './types';

export type ButtonSize = 'small' | 'medium' | 'large';

export type VariantConfig = {
    containerStyle: ViewStyle;
    textStyle: TextStyle;
};

export const BUTTON_VARIANTS: Record<ButtonVariant, VariantConfig> = {
    primary: {
        containerStyle: {
            backgroundColor: colors.primary,
            minHeight: sizes.button.height,
            borderRadius: sizes.radius.md,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: sizes.spacing.md,
        },
        textStyle: {
            color: colors.onPrimary,
            fontSize: typography.labelLarge.fontSize,
            fontWeight: typography.labelLarge.fontWeight,
            fontFamily: typography.labelLarge.fontFamily,
            letterSpacing: typography.labelLarge.letterSpacing,
            textTransform: 'uppercase',
        },
    },
    secondary: {
        containerStyle: {
            backgroundColor: colors.secondaryContainer,
            borderWidth: 1,
            borderColor: colors.secondary,
            minHeight: sizes.button.height,
            borderRadius: sizes.radius.md,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: sizes.spacing.md,
        },
        textStyle: {
            color: colors.secondary,
            fontSize: typography.labelLarge.fontSize,
            fontWeight: typography.labelLarge.fontWeight,
            fontFamily: typography.labelLarge.fontFamily,
            letterSpacing: typography.labelLarge.letterSpacing,
            textTransform: 'uppercase',
        },
    },
    link: {
        containerStyle: {
            backgroundColor: 'transparent',
            minHeight: sizes.button.height,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: sizes.spacing.md,
        },
        textStyle: {
            color: colors.primary,
            fontSize: typography.labelLarge.fontSize,
            fontWeight: typography.labelLarge.fontWeight,
            fontFamily: typography.labelLarge.fontFamily,
            letterSpacing: typography.labelLarge.letterSpacing,
            //textDecorationLine: 'underline',
            textTransform: 'none',
        },
    },
};

export const BUTTON_SIZES = {
    small: {
        paddingVertical: sizes.spacing.sm,
        paddingHorizontal: sizes.spacing.md,
    },
    medium: {
        paddingVertical: sizes.spacing.md,
        paddingHorizontal: sizes.spacing.lg,
    },
    large: {
        paddingVertical: sizes.spacing.lg,
        paddingHorizontal: sizes.spacing.xl,
    },
} as const;
