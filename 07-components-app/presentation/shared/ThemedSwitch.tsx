import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Platform, Pressable, Switch, View } from 'react-native';
import ThemedText from './ThemedText';

interface Props {
    text?: string,
    value: boolean,
    className?: string;

    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            className={`flex flex-row mx-2 items-center justify-between border-2 border-light-primary dark:border-dark-primary rounded-xl active:opacity-80 hover:opacity-50 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {
                text ? (<ThemedText type='h2'>{text}</ThemedText>) : (<View />)
            }
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? switchActiveColor : ''}
                ios_backgroundColor={value ? 'green' : 'red'}
                trackColor={{
                    false: 'red',
                    true: 'green'
                }}
            />
        </Pressable>
    );
};

export default ThemedSwitch;