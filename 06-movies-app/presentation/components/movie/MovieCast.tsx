import { Cast } from '@/infrastructure/interfaces/cast.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
    actors: Cast[];
}

const MovieCast = ({ actors }: Props) => {
    return (
        <View className='mt-5 mb-20'>
            <Text className='font-bold text-2xl px-5'>Actores</Text>
            <FlatList
                data={actors}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ActorCard
                        key={item.id}
                        actor={item}
                    />
                )}
                horizontal
                className='mt-2'
            />
        </View>
    );
};

export default MovieCast;