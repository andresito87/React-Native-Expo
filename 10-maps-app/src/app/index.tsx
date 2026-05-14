import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/presentation/components/shared/themed-text';
import { ThemedView } from '@/presentation/components/shared/themed-view';

export default function MapsApp() {
  return (
    <ThemedView>
      <SafeAreaView>
        <ThemedText type="title">
          Maps App
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}
