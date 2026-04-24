import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { Platform, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const isAndroid = Platform.OS === 'android';
if (isAndroid) { SystemUI.setBackgroundColorAsync('transparent'); }

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  if (!loaded) { // Evita warnings durante la carga de la fuente
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={globalStyles.background}>
        <Slot />

        <StatusBar style='light' />
      </View>
    </SafeAreaProvider>
  );
};

export default RootLayout;
