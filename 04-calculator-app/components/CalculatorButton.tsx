import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import * as Haptics from 'expo-haptics';
import { Pressable, Text } from 'react-native';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    buttonSize: number;
    doubleButtonSize?: number;
    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    doubleSize = false,
    buttonSize,
    doubleButtonSize,
    onPress
}: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? doubleButtonSize ?? buttonSize * 2 : buttonSize,
                height: buttonSize,
                borderRadius: buttonSize / 2,
            })}
            onPress={() => {
                Haptics.selectionAsync();
                onPress();
            }}
        >
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white'
                }}
            >
                {label}
            </Text>
        </Pressable>
    );
};
