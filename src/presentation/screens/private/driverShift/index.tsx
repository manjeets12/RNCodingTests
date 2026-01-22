import CustomButton from "@/src/presentation/components/atoms/CustomButton";
import { CustomText } from "@/src/presentation/components/atoms/CustomText";
import DriverCard from "@/src/presentation/components/molecules/DriverCard";
import OrderCard from "@/src/presentation/components/molecules/OrderCard";
import VehicleCard from "@/src/presentation/components/molecules/VehicleCard";
import { useSession } from "@/src/presentation/contexts/AuthContext";
import { sizes } from "@/src/presentation/theme";
import { globalStyles } from "@/src/presentation/theme/styles";
import { Order } from "@/src/shared/domain/entities/Order";
import { DriverContextUseCase } from "@/src/shared/domain/usecases/driverContextUseCase";
import { ShiftUseCase } from "@/src/shared/domain/usecases/shiftUseCase";
import useDriverContextStore from "@/src/shared/stores/useDriverContextStore";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DriverShiftScreen = () => {
    const { signOut } = useSession();
    const [loading, setLoading] = useState(false);
    const driver = useDriverContextStore((state) => state.driver);
    const shift = useDriverContextStore((state) => state.shift);
    const orders = useDriverContextStore((state) => state.orders);


    useEffect(() => {
        getDriverContext();
    }, []);

    const getDriverContext = async () => {
        try {
            setLoading(true)
            await DriverContextUseCase.getContext();
        } finally {
            setLoading(false)
        }
    }

    const onStartShift = async () => {
        //Ideally we 1st should check if driver is in premises of company or not. If yes than only we should call start shift
        //
        try {
            setLoading(true)
            await ShiftUseCase.start();
            await getDriverContext();
        } finally {
            setLoading(false)
        }
    }

    const onOrderItemPress = async (item: Order) => {
        router.push({ pathname: '/private/orderDetails', params: { orderId: item.orderId } })
    }



    const renderOrderListHeader = () => {
        return (
            <>
                {driver?.id && <DriverCard {...driver} />}
                {shift?.vehicle && <VehicleCard {...shift?.vehicle} />}
                {!shift?.shiftId && <CustomButton
                    onPress={onStartShift}
                    title={'Start Shift'}
                    loading={loading}
                    disabled={loading} />}
                {orders && orders?.length > 0 && <CustomText style={styles.ordersHeading} variant='headlineMedium'>{"Today's Deliveries"}</CustomText>}
            </>
        )
    }

    const renderOrderItem = ({ item, index }) => {
        return <OrderCard {...item} onOrderPress={onOrderItemPress} />
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.full}>
                <CustomText variant="displayMedium">Driver Shift Screen</CustomText>

                <FlatList
                    data={orders ?? []}
                    ListHeaderComponent={renderOrderListHeader}
                    renderItem={renderOrderItem}
                />
            </View>

            <CustomButton onPress={() => { signOut() }} title='Logout' variant="secondary" size='small' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ordersHeading: {
        marginTop: sizes.spacing.md
    }
})

export default DriverShiftScreen;


