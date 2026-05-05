import { ReactNode } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { designTokens } from '@/presentation/theme/tokens';
import { useAppTheme } from '@/presentation/theme/useAppTheme';

type Variant = 'title' | 'subtitle' | 'body' | 'caption';

interface Props extends TextProps {
  children: ReactNode;
  variant?: Variant;
  muted?: boolean;
}

const AppText = ({ children, variant = 'body', muted = false, style, ...rest }: Props) => {
  const { colors } = useAppTheme();

  return (
    <Text
      style={[
        styles.base,
        variantStyles[variant],
        {
          color: muted ? colors.textMuted : colors.text,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: designTokens.typography.body,
  },
});

const variantStyles = StyleSheet.create({
  title: {
    fontSize: designTokens.typography.title,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: designTokens.typography.subtitle,
    fontWeight: '700',
  },
  body: {
    fontSize: designTokens.typography.body,
    fontWeight: '400',
  },
  caption: {
    fontSize: designTokens.typography.caption,
    fontWeight: '400',
  },
});

export default AppText;