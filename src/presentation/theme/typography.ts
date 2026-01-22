// theme/typography.ts
import { StyleSheet } from 'react-native';
import { sizes } from './sizes';

const fontFamily = 'System';

export const typography = StyleSheet.create({
    // Display (large emphasis text)
    displayLarge: {
        fontFamily,
        fontSize: sizes.font.displayLarge,
        lineHeight: sizes.lineHeight.displayLarge,
        fontWeight: '600',
    },

    displayMedium: {
        fontFamily,
        fontSize: sizes.font.displayMedium,
        lineHeight: sizes.lineHeight.displayMedium,
        fontWeight: '600',
    },

    // Headlines
    headlineLarge: {
        fontFamily,
        fontSize: sizes.font.headlineLarge,
        lineHeight: sizes.lineHeight.headlineLarge,
        fontWeight: '600',
    },

    headlineMedium: {
        fontFamily,
        fontSize: sizes.font.headlineMedium,
        lineHeight: sizes.lineHeight.headlineMedium,
        fontWeight: '600',
    },

    headlineSmall: {
        fontFamily,
        fontSize: sizes.font.headlineSmall,
        lineHeight: sizes.lineHeight.headlineSmall,
        fontWeight: '600',
    },

    // Titles
    titleLarge: {
        fontFamily,
        fontSize: sizes.font.titleLarge,
        lineHeight: sizes.lineHeight.titleLarge,
        fontWeight: '500',
    },

    titleMedium: {
        fontFamily,
        fontSize: sizes.font.titleMedium,
        lineHeight: sizes.lineHeight.titleMedium,
        fontWeight: '500',
    },

    titleSmall: {
        fontFamily,
        fontSize: sizes.font.titleSmall,
        lineHeight: sizes.lineHeight.titleSmall,
        fontWeight: '500',
    },

    // Body
    bodyLarge: {
        fontFamily,
        fontSize: sizes.font.bodyLarge,
        lineHeight: sizes.lineHeight.bodyLarge,
        fontWeight: '400',
    },

    bodyMedium: {
        fontFamily,
        fontSize: sizes.font.bodyMedium,
        lineHeight: sizes.lineHeight.bodyMedium,
        fontWeight: '400',
    },

    bodySmall: {
        fontFamily,
        fontSize: sizes.font.bodySmall,
        lineHeight: sizes.lineHeight.bodySmall,
        fontWeight: '400',
    },

    // Labels / Buttons
    labelLarge: {
        fontFamily,
        fontSize: sizes.font.labelLarge,
        lineHeight: sizes.lineHeight.labelLarge,
        fontWeight: '600',
        letterSpacing: 0.4,
        textTransform: 'uppercase',
    },

    labelMedium: {
        fontFamily,
        fontSize: sizes.font.labelMedium,
        lineHeight: sizes.lineHeight.labelMedium,
        fontWeight: '500',
    },

    labelSmall: {
        fontFamily,
        fontSize: sizes.font.labelSmall,
        lineHeight: sizes.lineHeight.labelSmall,
        fontWeight: '500',
    },
})

export type TypographyVariant = keyof typeof typography;
