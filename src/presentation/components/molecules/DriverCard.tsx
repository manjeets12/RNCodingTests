import { Driver } from "@/src/shared/domain/entities/Driver";
import { StyleSheet, View } from "react-native";
import { colors, sizes } from "../../theme";
import { globalStyles } from "../../theme/styles";
import { CustomText } from "../atoms/CustomText";
import Avatar from "./Avatar";



const DriverCard = ({ name, id }: Driver) => {
    return (
        <View style={styles.container}>
            <CustomText variant='bodyLarge'>{'Driver Details'}</CustomText>
            <View style={[globalStyles.row, styles.content]}>
                <Avatar name={name} size='medium' />
                <View >
                    <CustomText variant='labelLarge'>{name}</CustomText>
                    <CustomText>{id}</CustomText>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: sizes.spacing.sm,
        gap: sizes.spacing.sm
    },
    content: {
        padding: sizes.spacing.md,
        gap: sizes.spacing.md,
        borderRadius: sizes.radius.md,
        borderWidth: 1,
        borderColor: colors.borderMedium
    },
    avatar: {
        height: sizes.avatar.md,
        width: sizes.avatar.md,
        borderRadius: sizes.radius.round,
        backgroundColor: colors.secondaryContainer,
    },
})
export default DriverCard;