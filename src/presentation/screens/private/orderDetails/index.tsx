import { useSession } from "@/app/ctx";
import { CustomText } from "@/src/presentation/components/atoms/CustomText";
import { globalStyles } from "@/src/presentation/theme/styles";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderDetailsScreen = () => {
    const { signOut } = useSession()
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.full}>
                <CustomText variant="displayMedium">Order Details Screen</CustomText>
                <CustomText variant="bodyLarge">This is where order details will be displayed.</CustomText>
            </View>

        </SafeAreaView>
    );
}
export default OrderDetailsScreen;