import { StyleSheet } from "react-native";
import { sizes } from "../../../theme";

export const OTP_INPUT_SIZE_CONFIG = StyleSheet.create({
    small: {
        width: sizes.input.sm,
        height: sizes.input.sm,
        fontSize: sizes.font.bodyLarge,
    },
    medium: {
        width: sizes.input.md,
        height: sizes.input.md,
        fontSize: sizes.font.titleLarge,
    },
    large: {
        width: sizes.input.lg,
        height: sizes.input.lg,
        fontSize: sizes.font.headlineLarge,
    },
});