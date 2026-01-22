import { Stack } from 'expo-router';

export default function PrivateLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="driverShift" options={{ headerShown: false }} />
            <Stack.Screen name="orderDetails" options={{ headerShown: true, title: 'Order Details' }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}
