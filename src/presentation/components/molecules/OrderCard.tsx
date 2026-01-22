import { Order, OrderStatus } from "@/src/shared/domain/entities/Order";
import { useMemo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors, ColorsType, sizes } from "../../theme";
import { globalStyles } from "../../theme/styles";
import { CustomText } from "../atoms/CustomText";
import { RowLabelItem } from "./LabelItem";

const STATUS_CONFIG_MAP: Record<OrderStatus, { textColor: ColorsType, text: string }> = {
    'DELIVERED': {
        textColor: 'success',
        text: 'DELIVERED',
    },
    'FAILED': {
        textColor: 'error',
        text: "FAILED"
    },
    'PENDING': {
        textColor: 'textPrimary',
        text: 'PENDING'
    }
}

const OrderCard = ({ onOrderPress, ...order }: Order & { onOrderPress?: (order: Order) => void }) => {
    const { orderId, destination, status } = order
    const _onOrderPress = () => {
        onOrderPress?.(order)
    }
    const statusConfig = useMemo(() => {
        return STATUS_CONFIG_MAP[status]
    }, [status])
    return (
        <Pressable style={[styles.content, globalStyles.rowSpaceBetween]} onPress={_onOrderPress}>
            <View>
                <RowLabelItem label={'Destination'} value={destination} />
                <RowLabelItem label={'OrderId Id:'} value={orderId} />
            </View>
            <CustomText variant='bodyMedium' color={statusConfig.textColor}>{statusConfig.text}</CustomText>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    content: {
        padding: sizes.spacing.md,
        gap: sizes.spacing.sm,
        borderRadius: sizes.radius.md,
        borderWidth: 1,
        borderColor: colors.borderMedium,
        marginVertical: sizes.spacing.sm,
    },
    avatar: {
        height: sizes.avatar.md,
        width: sizes.avatar.md,
        borderRadius: sizes.radius.round,
        backgroundColor: colors.secondaryContainer,
    },
    lableItem: {
        marginLeft: sizes.spacing.md
    }
})
export default OrderCard;