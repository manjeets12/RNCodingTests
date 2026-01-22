import CustomButton from "@/src/presentation/components/atoms/CustomButton";
import { CustomText } from "@/src/presentation/components/atoms/CustomText";
import OrderCard from "@/src/presentation/components/molecules/OrderCard";
import { colors, sizes } from "@/src/presentation/theme";
import { globalStyles } from "@/src/presentation/theme/styles";
import { OrderUseCase } from "@/src/shared/domain/usecases/orderUseCase";
import useDriverContextStore, { selectOrderById } from "@/src/shared/stores/useDriverContextStore";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const OrderDetailsScreen = () => {
    const { orderId } = useLocalSearchParams();
    const order = useDriverContextStore(selectOrderById(orderId));
    const [loading, setLoading] = useState(false);



    const onMarkDeliverySuccess = async () => {
        if (order?.status === 'PENDING' && order?.orderId) {
            setLoading(true)
            await OrderUseCase.markDelivered(order.orderId)
            setLoading(false)
        }
    }
    const onMarkDeliveryFail = async () => {
        if (order?.status === 'PENDING' && order?.orderId) {
            setLoading(true)
            await OrderUseCase.markDeliveryFailed(order.orderId)
            setLoading(false)
        }
    }

    const onMarkDeliveryPress = async () => {
        Alert.alert(
            "Mark Delivered", 'Make Sure to take reciept',
            [
                {
                    text: 'Yes',
                    style: 'default',
                    onPress: onMarkDeliverySuccess
                },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: true }
        )
    }

    const onMarkDeliveryFailPress = () => {
        Alert.alert(
            "Mark Delivery Fail", 'Are you sure that delivery failed',
            [
                {
                    text: 'Yes',
                    style: 'default',
                    onPress: onMarkDeliveryFail
                },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: true }
        )
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.full}>
                <OrderCard {...order ?? {}} />
                <View style={[styles.mapView, globalStyles.centeredContent]}>
                    <CustomText variant='bodyLarge' style={styles.placeholder}>{'Map view placeholder'}</CustomText>
                </View>
            </View>
            <View style={styles.footer}>
                {order?.status === 'PENDING' || order?.status === 'FAILED' ? (<>
                    <CustomButton
                        onPress={onMarkDeliveryFailPress}
                        title="Mark Delivery"
                        variant='secondary'
                        size='small'
                        loading={loading}
                        disabled={loading || order?.status !== 'PENDING'} />
                    <CustomButton
                        onPress={onMarkDeliveryPress}
                        title="Mark Delivery"
                        loading={loading}
                        disabled={loading} />
                </>) : <CustomText align='center' variant='bodyLarge' color='success'>{'Delivered'}</CustomText>}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mapView: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.divider,
        borderRadius: sizes.radius.md,
        height: 300,
        marginVertical: sizes.spacing.md
    },
    placeholder: {
        transform: [{
            rotateZ: '-45deg',
        }]
    },
    footer: {
        gap: sizes.spacing.md
    }
})
export default OrderDetailsScreen;