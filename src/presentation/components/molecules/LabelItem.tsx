import { StyleSheet, View } from "react-native";
import { globalStyles } from "../../theme/styles";
import { CustomText } from "../atoms/CustomText";

const LabelItem = ({ label, value }: { label: string, value: string }) => (
    <View style={styles.lableItem}>
        <CustomText variant='labelLarge'>{label}</CustomText>
        <CustomText>{value}</CustomText>
    </View>);


export const RowLabelItem = ({ label, value }: { label: string, value: string }) => (
    <View style={[globalStyles.row]}>
        <CustomText variant='labelLarge'>{label}</CustomText>
        <CustomText>{value}</CustomText>
    </View>);

const styles = StyleSheet.create({
    lableItem: {
        // marginLeft: sizes.spacing.md
    }
});

export default LabelItem;