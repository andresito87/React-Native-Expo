import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import AppScreen from '@/presentation/components/ui/AppScreen';
import AppText from '@/presentation/components/ui/AppText';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useAppTheme } from '@/presentation/theme/useAppTheme';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const MovieScreen = () => {

    const { colors } = useAppTheme();
    const { id } = useLocalSearchParams();
    const { movieQuery, castQuery } = useMovie(Number(id));

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <AppScreen>
                <View className='flex flex-1 justify-center items-center'>
                    <AppText className='mb-4'>Espere por favor</AppText>
                    <ActivityIndicator color={colors.primary} size={30} />
                </View>
            </AppScreen>
        );
    }

    return (
        <AppScreen scroll>
            <MovieHeader
                originalTile={movieQuery.data?.title}
                title={movieQuery.data.title}
                poster={movieQuery.data.poster}
            />

            <MovieDescription
                movie={movieQuery.data}
            />

            <MovieCast
                actors={castQuery.data || []}
            />

        </AppScreen>
    );
};

export default MovieScreen;