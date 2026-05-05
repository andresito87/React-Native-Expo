import { Formatter } from '@/config/helpers/formatter';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import AppText from '@/presentation/components/ui/AppText';
import { useAppTheme } from '@/presentation/theme/useAppTheme';
import React from 'react';
import { View } from 'react-native';

interface Props {
    movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
    const { colors } = useAppTheme();

    return (
        <View
            className='mx-5 mt-3 p-4 rounded-2xl'
            style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderWidth: 1,
            }}
        >
            <View className='flex flex-row items-center gap-2'>
                <AppText>⭐ {movie.rating.toFixed(1)}</AppText>
                <AppText muted>•</AppText>
                <AppText muted>{movie.genres.join(', ')}</AppText>
            </View>

            <AppText variant='subtitle' style={{ marginTop: 16 }}>Historia</AppText>
            <AppText style={{ marginTop: 8 }}>{movie.description}</AppText>

            <AppText variant='subtitle' style={{ marginTop: 18 }}>{Formatter.currency(movie.budget)}</AppText>
        </View>
    );
};

export default MovieDescription;