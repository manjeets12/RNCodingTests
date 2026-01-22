import { Vehicle } from "@/src/shared/domain/entities/Vehicle";
import { StyleSheet, View } from "react-native";
import { colors, sizes } from "../../theme";
import { globalStyles } from "../../theme/styles";
import { CustomText } from "../atoms/CustomText";
import Avatar from "./Avatar";
import LabelItem from "./LabelItem";

const VehicleCard = ({ registrationNumber, vehicleId }: Vehicle) => {
    return (
        <View style={styles.container}>
            <CustomText variant='bodyLarge'>{'Vechile Details'}</CustomText>
            <View style={styles.content}>
                <View style={[globalStyles.row, styles.mdGap]}>
                    <Avatar name="Car" />
                    <LabelItem label={'Reg No:'} value={registrationNumber} />
                    <LabelItem label={'Vehicle Id:'} value={vehicleId} />
                </View>
                <CustomText variant='labelMedium'>{'Please collect vechile from manager'}</CustomText>
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
        gap: sizes.spacing.sm,
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
    mdGap: {
        gap: sizes.spacing.md
    }
})
export default VehicleCard;