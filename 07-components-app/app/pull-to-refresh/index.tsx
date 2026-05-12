import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {

  // Colores de nuestra paleta de colores personalizada
  const primaryColor = useThemeColor({}, 'primary');
  const secondaryColor = useThemeColor({}, 'secondary');

  // Usado en Android
  const backgroundColor = useThemeColor({
    light: 'white',
    dark: 'black'
  }, 'background');

  // Usado en Android/iOS
  const refreshLoaderColor = useThemeColor(
    {
      light: primaryColor,
      dark: secondaryColor
    },
    'primary'
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {

    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}

          // Android con array de colores para el loader
          colors={[refreshLoaderColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backgroundColor}

          // iOS no permite array de colores para el loader
          tintColor={refreshLoaderColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
