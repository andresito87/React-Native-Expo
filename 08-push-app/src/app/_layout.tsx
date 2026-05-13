import { useTheme } from '@/hooks/use-theme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleProp, useColorScheme, ViewStyle } from 'react-native';

export default function RootLayout() {

  const colorScheme = useColorScheme();
  const { background: backgroundColor } = useTheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerShadowVisible: false,
        contentStyle: backgroundColor as StyleProp<ViewStyle>
      }}>
        <Stack.Screen name='index' options={{ title: 'Push App' }} />
      </Stack>
    </ThemeProvider>
  );
}
