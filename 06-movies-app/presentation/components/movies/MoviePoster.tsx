import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { useAppTheme } from '@/presentation/theme/useAppTheme';

interface Props {
    id: number;
    poster: string;
    smallPoster?: boolean;
    className?: string;
    width?: number;
    height?: number;
}

const MoviePoster = ({ id, poster, smallPoster = false, className, width, height }: Props) => {
    const { colors } = useAppTheme();

    const posterWidth = width ?? (smallPoster ? 85 : 150);
    const posterHeight = height ?? (smallPoster ? 130 : 250);

    return (
        <Pressable
            className={`active:opacity-90 px-2 ${className}`}
            onPress={() => router.push(`/movie/${id}`)}
        >
            <Image
                source={{ uri: poster }}
                className='rounded-2xl w-full h-full'
                style={{
                    width: posterWidth,
                    height: posterHeight,
                    borderWidth: 1,
                    borderColor: colors.border,
                }}
                resizeMode='cover'
            />
        </Pressable>
    );
};

export default MoviePoster;