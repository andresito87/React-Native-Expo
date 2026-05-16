import { ThemedText } from '@/presentation/components/shared/ThemedText';
import { ThemedView } from '@/presentation/components/shared/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapScreen = () => {
    return (
        <ThemedView>
            <SafeAreaView>
                <ThemedText>MapScreen</ThemedText>
            </SafeAreaView>
        </ThemedView>
    );
};

export default MapScreen;