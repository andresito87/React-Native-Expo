import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Platform, Pressable, Switch, View } from 'react-native';
import ThemedText from './ThemedText';

interface Props {
    text?: string;
    value: boolean;
    className?: string;
    textClassName?: string;
    switchScale?: number;
    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({
    text,
    value,
    className,
    textClassName,
    switchScale = 1,
    onValueChange,
}: Props) => {
    const switchActiveColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            className={`flex-row mx-2 min-h-20 items-center justify-between rounded-xl active:opacity-80 hover:opacity-50 ${className ?? ''}`}
            onPress={() => onValueChange(!value)}
        >
            {text ? (
                <ThemedText
                    type="h2"
                    className={`flex-1 text-left ${textClassName ?? ''}`}
                >
                    {text}
                </ThemedText>
            ) : (
                <View className="flex-1" />
            )}

            <View className="m-4 items-center justify-center">
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    thumbColor={isAndroid ? switchActiveColor : ''}
                    ios_backgroundColor={value ? 'green' : 'red'}
                    trackColor={{
                        false: 'red',
                        true: 'green',
                    }}
                    style={{
                        transform: [
                            { scaleX: switchScale },
                            { scaleY: switchScale },
                        ],
                    }}
                />
            </View>
        </Pressable>
    );
};

export default ThemedSwitch;