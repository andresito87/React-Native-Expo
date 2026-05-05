import { Movie } from '@/infrastructure/interfaces/movie.interface';
import AppText from '@/presentation/components/ui/AppText';
import { designTokens } from '@/presentation/theme/tokens';
import React, { useEffect, useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    // Props
    className?: string;
    title?: string;
    movies: Movie[];

    // Methods
    loadNextPage?: () => void;
}

const MovieHorizontalList = ({ className, title, movies, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies]);

    // Implementación del infinite-scroll
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if (isLoading.current) return; // Evitamos que se haga infinte scroll si están cargando datos

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndReached) return;

        isLoading.current = true;

        loadNextPage && loadNextPage();
    };

    return (
        <View className={`${className}`}>
            {title && (
                <AppText variant='subtitle' style={{ paddingHorizontal: 16, marginBottom: designTokens.spacing.md }}>
                    {title}
                </AppText>
            )}

            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 8 }}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} smallPoster />
                )}
                onScroll={onScroll}
                scrollEventThrottle={16}
            />

        </View>
    );
};

export default MovieHorizontalList;