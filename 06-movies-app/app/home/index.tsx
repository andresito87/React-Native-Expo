import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={40} />
            </View>
        );
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4'>Movies App</Text>

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
        </ScrollView>
    );
};

export default HomeScreen;