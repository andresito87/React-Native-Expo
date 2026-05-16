import { ThemedText } from '@/presentation/components/shared/ThemedText';
import { ThemedView } from '@/presentation/components/shared/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoadingScreen = () => {
    return (
        <ThemedView>
            <SafeAreaView>
                <ThemedText>LoadingScreen</ThemedText>
            </SafeAreaView>
        </ThemedView>
    );
};

export default LoadingScreen;