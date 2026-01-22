import { useSession } from "@/app/ctx";
import CustomButton from "@/src/presentation/components/atoms/CustomButton";
import { CustomText } from "@/src/presentation/components/atoms/CustomText";
import { globalStyles } from "@/src/presentation/theme/styles";
import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DriverShiftScreen = () => {
    const { signOut } = useSession()
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.full}>
                <CustomText variant="displayMedium">Driver Shift Screen</CustomText>
                <CustomText variant="bodyLarge">This is where driver shift details will be displayed.</CustomText>
                <CustomButton onPress={() => { router.push('/private/orderDetails') }} title="show order details" />
            </View>

            <CustomButton onPress={() => { signOut() }} title='Logout' variant="secondary" size='small' />
        </SafeAreaView>
    );
}
export default DriverShiftScreen;