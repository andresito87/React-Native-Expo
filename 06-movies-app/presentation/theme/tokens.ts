export const designTokens = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  typography: {
    title: 32,
    subtitle: 24,
    body: 16,
    caption: 13,
  },
} as const;

const light = {
  background: '#F6F7FB',
  surface: '#FFFFFF',
  surfaceMuted: '#EEF1F8',
  text: '#171A21',
  textMuted: '#677085',
  primary: '#6D28D9',
  border: '#DCE1ED',
  overlay: 'rgba(23,26,33,0.35)',
};

const dark = {
  background: '#090B10',
  surface: '#141824',
  surfaceMuted: '#1D2434',
  text: '#F6F8FF',
  textMuted: '#A4AFCC',
  primary: '#9B87F5',
  border: '#2C3650',
  overlay: 'rgba(0,0,0,0.45)',
};

export const themePalette = {
  light,
  dark,
} as const;

export type ThemeColors = typeof light;