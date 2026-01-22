// theme/sizes.ts

export const sizes = {
    // Font sizes (Material inspired)
    font: {
        displayLarge: 32,
        displayMedium: 28,

        headlineLarge: 24,
        headlineMedium: 20,
        headlineSmall: 18,

        titleLarge: 16,
        titleMedium: 14,
        titleSmall: 12,

        bodyLarge: 16,
        bodyMedium: 14,
        bodySmall: 12,

        labelLarge: 14,
        labelMedium: 12,
        labelSmall: 10,
    },

    // Line heights
    lineHeight: {
        displayLarge: 40,
        displayMedium: 36,

        headlineLarge: 32,
        headlineMedium: 28,
        headlineSmall: 26,

        titleLarge: 24,
        titleMedium: 22,
        titleSmall: 20,

        bodyLarge: 24,
        bodyMedium: 22,
        bodySmall: 18,

        labelLarge: 20,
        labelMedium: 18,
        labelSmall: 16,
    },

    // Spacing scale
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 40,
    },

    // Radius
    radius: {
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        round: 9999,
    },

    // Component sizes
    button: {
        height: 48,
        minWidth: 120,
    },

    input: {
        sm: 48,
        md: 56,
        lg: 64,
    },

    icon: {
        sm: 16,
        md: 24,
        lg: 32,
        xl: 40,
    },

    screenPadding: 16,
} as const;

export type SizesType = typeof sizes;
