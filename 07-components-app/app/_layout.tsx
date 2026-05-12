import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import "../global.css";

export default function RootLayout() {

  // Utilizamos el hook useTheme de Expo para obtener los colores de la app
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: backgroundColor,
        flex: 1
      }}
    >
      <ThemeChangerProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor
            }
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: ''
            }}
          />
          {allRoutes.map(route => (
            <Stack.Screen
              name={route.name}
              key={route.name}
              options={{
                title: route.title,
                headerShown: route.title !== 'Slides'
              }}
            />
          ))}
        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
