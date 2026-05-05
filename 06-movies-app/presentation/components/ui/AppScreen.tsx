import { ReactNode } from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/presentation/theme/useAppTheme';

interface Props {
  children: ReactNode;
  scroll?: boolean;
}

const AppScreen = ({ children, scroll = false }: Props) => {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const { colors } = useAppTheme();

  if (scroll) {
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View
          style={{
            minHeight: height,
            paddingTop: insets.top,
            backgroundColor: colors.background,
          }}
        >
          {children}
        </View>
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: colors.background,
      }}
    >
      {children}
    </View>
  );
};

export default AppScreen;