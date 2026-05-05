import { Cast } from '@/infrastructure/interfaces/cast.interface';
import AppText from '@/presentation/components/ui/AppText';
import React from 'react';
import { FlatList, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
    actors: Cast[];
}

const MovieCast = ({ actors }: Props) => {
    return (
        <View className='mt-5 mb-20'>
            <AppText variant='subtitle' style={{ paddingHorizontal: 20 }}>Actores</AppText>
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