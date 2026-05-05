import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/presentation/theme/useAppTheme';
import AppText from '@/presentation/components/ui/AppText';

interface Props {
    poster: string;
    originalTile: string;
    title: string;
}

const MovieHeader = ({ poster, originalTile, title }: Props) => {

    const { height: screenHeight } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const { colors } = useAppTheme();

    return (
        <>
            {/* Fondo gradiente */}
            <LinearGradient
                colors={[colors.overlay, 'transparent']}
                start={[0, 0]}
                style={{
                    height: screenHeight * 0.4,
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%'
                }}
            />

            {/* Botón para regresar */}
            <View
                style={{
                    position: 'absolute',
                    zIndex: 99,
                    elevation: 9,
                    top: insets.top + 8,
                    left: 12
                }}
            >
                <Pressable
                    onPress={() => router.dismiss()}
                    style={{
                        backgroundColor: colors.surfaceMuted,
                        borderRadius: 999,
                        padding: 8,
                        borderWidth: 1,
                        borderColor: colors.border,
                    }}
                >
                    <Ionicons
                        name='arrow-back'
                        size={24}
                        color={colors.text}
                    />
                </Pressable>
            </View>

            {/* Imagen de la película */}
            <View
                style={{ height: screenHeight * 0.7 }}
                className='shadow-xl shadow-black/20'
            >
                <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                    <Image
                        source={{ uri: poster }}
                        resizeMode='cover'
                        className='flex-1'
                    />
                </View>
            </View>

            {/* Info de la película */}
            <View className='px-5 mt-5'>
                <AppText muted>{originalTile}</AppText>
                <AppText variant='subtitle'>{title}</AppText>
            </View>
        </>
    );
};

export default MovieHeader;