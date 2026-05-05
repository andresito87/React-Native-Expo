import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import AppScreen from '@/presentation/components/ui/AppScreen';
import AppText from '@/presentation/components/ui/AppText';
import { useMovies } from '@/presentation/hooks/useMovies';
import { useAppTheme } from '@/presentation/theme/useAppTheme';
import { ActivityIndicator, View } from 'react-native';

const HomeScreen = () => {

    const { colors } = useAppTheme();
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <AppScreen>
                <View className='justify-center items-center flex-1'>
                    <ActivityIndicator color={colors.primary} size={40} />
                </View>
            </AppScreen>
        );
    }

    return (
        <AppScreen scroll>
            <View className='mt-2 pb-10'>
                <AppText variant='title' style={{ paddingHorizontal: 16, marginBottom: 4 }}>Movies App</AppText>

                {/* Carousel de imágenes */}
                <MainSlideshow movies={nowPlayingQuery.data ?? []} />

                {/* Popular */}
                <MovieHorizontalList
                    className='mb-5'
                    title='Populares'
                    movies={popularQuery.data?.pages.flat() ?? []}
                    loadNextPage={popularQuery.fetchNextPage}
                />

                {/* Mejor valoradas */}
                <MovieHorizontalList
                    className='mb-5'
                    title='Mejor valoradas'
                    movies={topRatedQuery.data?.pages.flat() ?? []}
                    loadNextPage={topRatedQuery.fetchNextPage}
                />

                {/* Próximos estrenos */}
                <MovieHorizontalList
                    className='mb-5'
                    title='Próximos estrenos'
                    movies={upcomingQuery.data?.pages.flat() ?? []}
                    loadNextPage={upcomingQuery.fetchNextPage}
                />
            </View>
        </AppScreen>
    );
};

export default HomeScreen;