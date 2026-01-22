import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="otpVerification" options={{ title: 'OTP Verification', headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          headerShown: false
        }}
      />
    </Stack>
  );
}

