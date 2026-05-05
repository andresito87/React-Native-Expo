import { useMemo } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { ThemeColors, themePalette } from './tokens';

interface AppTheme {
  colorScheme: NonNullable<ColorSchemeName>;
  isDark: boolean;
  colors: ThemeColors;
}

export const useAppTheme = (): AppTheme => {
  const colorScheme = useColorScheme() ?? 'light';

  return useMemo(() => {
    const isDark = colorScheme === 'dark';
    const colors = isDark ? themePalette.dark : themePalette.light;

    return {
      colorScheme,
      isDark,
      colors,
    };
  }, [colorScheme]);
};