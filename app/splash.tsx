import { SplashScreen } from 'expo-router';
import { useSession } from '../src/presentation/contexts/AuthContext';

SplashScreen.preventAutoHideAsync();

export function SplashScreenController() {
    const { isLoading } = useSession();
    if (!isLoading) {
        SplashScreen.hide();
    }
    return null;
}

export default SplashScreenController
