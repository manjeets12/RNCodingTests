import { SessionProvider, useSession } from '@/src/presentation/contexts/AuthContext';
import { Stack } from 'expo-router';
import { SplashScreenController } from './splash';


function RootNavigator() {
  const { session } = useSession();
  return (
    <Stack>
      <Stack.Protected guard={!session}>
        <Stack.Screen name="index" />
        <Stack.Screen name="authentication" options={{ title: 'Authentication' }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            headerShown: false
          }}
        />
      </Stack.Protected>
      <Stack.Protected guard={!!session} >
        <Stack.Screen name="private" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  );
}

