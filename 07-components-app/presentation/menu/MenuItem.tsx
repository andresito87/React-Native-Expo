import { useThemeColor } from '@/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
import ThemedText from '../shared/ThemedText';

interface Props {
    title: string,
    icon: keyof typeof Ionicons.glyphMap,
    name: string;
    isFirst: boolean,
    isLast?: boolean,
}

const MenuItem = ({
    title,
    icon,
    name,
    isFirst = false,
    isLast = false
}: Props) => {

    const [routeName] = name.split('/');
    const primaryColor = useThemeColor({}, 'primary');

    return (

        < Pressable
            onPress={() => router.push(routeName as Href)}
            className='w-full bg-white dark:bg-black/15 px-5 py-2'
            style={{
                ...(isFirst && { // Spread operator para recoger lo que venga del padre y sobreescribimos o añadimos sino existe el estilo
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10
                }),
                ...(isLast && {  // Spread operator para recoger lo que venga del padre y sobreescribimos o añadimos sino existe el estilo
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10
                })
            }}
        >
            <View className='flex-row items-center'>
                <Ionicons
                    name={icon}
                    size={30}
                    color={primaryColor}
                    className='mr-5'
                />
                <ThemedText type='h2'>{title}</ThemedText>
            </View>
        </ Pressable>
    );
};

export default MenuItem;