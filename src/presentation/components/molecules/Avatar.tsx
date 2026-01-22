import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { colors, sizes } from "../../theme";
import { CustomText } from "../atoms/CustomText";

type Props = {
    name: string;
    size?: "small" | "medium" | "large",
}
const Avatar = ({ name, size = 'medium' }: Props) => {

    const dynamicStyles = useMemo(() => {
        const map = { small: styles.small, medium: styles.medium, large: styles.large }
        return map[size]
    }, [size]);

    return (
        <View style={[styles.avatar, dynamicStyles]}>
            {!!name && <CustomText variant='displayLarge'>{name.trim().charAt(0)}</CustomText>}
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        height: sizes.avatar.md,
        width: sizes.avatar.md,
        borderRadius: sizes.radius.round,
        backgroundColor: colors.secondaryContainer,
        justifyContent: 'center',
        alignItems: 'center'
    },
    large: {
        height: sizes.avatar.lg,
        width: sizes.avatar.lg,
    },
    medium: {
        height: sizes.avatar.md,
        width: sizes.avatar.md,
    },
    small: {
        height: sizes.avatar.sm,
        width: sizes.avatar.sm,
    }
});

export default Avatar;