import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';

interface Props {
    poster: string;
    originalTile: string;
    title: string;
}

const MovieHeader = ({ poster, originalTile, title }: Props) => {

    const { height: screenHeight } = useWindowDimensions();

    return (
        <>
            {/* Fondo gradiente */}
            <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'transparent']}
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
                    top: 40,
                    left: 10
                }}
            >
                <Pressable onPress={() => router.dismiss()}>
                    <Ionicons
                        name='arrow-back'
                        size={30}
                        color='white'
                        className='shadow'
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
                <Text className='font-normal'>{originalTile}</Text>
                <Text className='font-semibold text-2xl'>{title}</Text>
            </View>
        </>
    );
};

export default MovieHeader;