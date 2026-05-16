import PermissionsCheckerProvider from '@/presentation/providers/PermissionsCheckerProvider';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PermissionsCheckerProvider>
        <Stack
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='index'
        >

          <Stack.Screen
            name='loading/index'
            options={{
              animation: 'none'
            }}
          />
          <Stack.Screen
            name='map/index'
            options={{
              animation: 'fade'
            }}
          />
          <Stack.Screen
            name='permissions/index'
            options={{
              animation: 'fade'
            }}
          />

        </Stack>
      </PermissionsCheckerProvider>
    </ThemeProvider>
  );
}
