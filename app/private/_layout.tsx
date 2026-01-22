import { Stack } from 'expo-router';

export default function PrivateLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, }} >
            <Stack.Screen name="shift" options={{ headerShown: false }} />
            <Stack.Screen name="orderDetails" options={{ headerShown: true, title: 'Order Details' }} />
        </Stack>
    );
}
