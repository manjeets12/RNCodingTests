// colors.ts

import { colorPalette } from "./colorPalette";


export const colors = {
    // ===== Brand / Primary =====
    primary: colorPalette.purple500,
    primaryContainer: colorPalette.purple100,
    onPrimary: colorPalette.white,

    secondary: colorPalette.indigo500,
    secondaryContainer: colorPalette.indigo100,
    onSecondary: colorPalette.white,

    // ===== Backgrounds =====
    background: colorPalette.neutral10,
    surface: colorPalette.neutral50,
    surfaceVariant: colorPalette.neutral100,

    // ===== Text =====
    textPrimary: colorPalette.neutral900,
    textSecondary: colorPalette.neutral700,
    textDisabled: colorPalette.neutral400,
    textOnPrimary: colorPalette.white,

    // ===== States =====
    success: colorPalette.success400,
    successBackground: colorPalette.success100,

    warning: colorPalette.warning400,
    warningBackground: colorPalette.warning100,

    error: colorPalette.error400,
    errorBackground: colorPalette.error100,

    // ===== Borders & Dividers =====
    borderLight: colorPalette.neutral100,
    borderMedium: colorPalette.neutral200,
    divider: colorPalette.neutral200,

    // ===== Actions =====
    ctaPrimary: colorPalette.purple600,
    ctaSecondary: colorPalette.indigo600,
    ctaDisabled: colorPalette.neutral300,

    // ===== Utility =====
    black: colorPalette.black,
    white: colorPalette.white,
    transparent: colorPalette.transparent,
};


export type ColorsType = keyof typeof colors;

