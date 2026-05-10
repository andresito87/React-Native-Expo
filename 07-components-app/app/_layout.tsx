import { allRoutes } from '@/constants/Routes';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import "../global.css";

export default function RootLayout() {

  // Utilizamos el hook useTheme de Expo para obtener los colores de la app
  const backgroundColor = useThemeColor({}, 'background');

  // Utilizamos el hook de React Native para acceder al tema del dispositivo
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: backgroundColor,
        flex: 1
      }}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
                title: route.title
              }}
            />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
