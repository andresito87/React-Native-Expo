import { Movie } from '@/infrastructure/interfaces/movie.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    className?: string;
    title?: string;
    movies: Movie[];
}

const MovieHorizontalList = ({ className, title, movies }: Props) => {
    return (
        <View className={`${className}`}>
            {title && <Text className={`text-2xl font-bold px-4 mb-2`}>{title}</Text>}

            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
            />

        </View>
    );
};

export default MovieHorizontalList;