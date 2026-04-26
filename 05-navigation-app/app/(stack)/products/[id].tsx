import { products } from '@/store/products.store';
import { Redirect, useNavigation } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {

    const { id } = useLocalSearchParams();
    const product = products.find(p => p.id === id);
    const navigation = useNavigation();

    useEffect(() => {

        navigation.setOptions({

            title: product?.title,

        });

    }, [navigation, product]);

    if (!product) {
        return <Redirect href='/' />;
    }

    return (
        <View className='px-5 mt-2'>
            <Text className='text-2xl font-work-black'>{product.title}</Text>
            <Text className=''>{product.description}</Text>
            <Text className='font-work-black'>{product.price}</Text>
        </View>
    );
};

export default ProductScreen;