import { useTheme } from '@/presentation/hooks/use-theme';
import React from 'react';
import {
    Pressable,
    PressableProps,
    StyleProp,
    Text,
    TextStyle,
    ViewStyle,
} from 'react-native';

interface Props extends PressableProps {
    children: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const ThemedPressable = ({
    children,
    style,
    textStyle,
    disabled,
    ...rest
}: Props) => {
    const {
        buttonBackground,
        buttonBackgroundPressed,
        buttonText,
        buttonDisabledBackground,
        buttonDisabledText,
    } = useTheme();

    return (
        <Pressable
            disabled={disabled}
            style={({ pressed }) => [
                {
                    backgroundColor: disabled
                        ? buttonDisabledBackground
                        : pressed
                            ? buttonBackgroundPressed
                            : buttonBackground,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 100,
                    margin: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: disabled ? 0.7 : 1,
                },
                style,
            ]}
            {...rest}
        >
            <Text
                style={[
                    {
                        color: disabled ? buttonDisabledText : buttonText,
                        fontSize: 20,
                        fontWeight: '600',
                    },
                    textStyle,
                ]}
            >
                {children}
            </Text>
        </Pressable>
    );
};

export default ThemedPressable;