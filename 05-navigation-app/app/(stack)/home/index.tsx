import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10'>

                <CustomButton
                    className='mb-2'
                    color='primary'
                    onPress={() => router.push('/products')}
                >
                    Productos
                </CustomButton>

                <CustomButton
                    className='mb-2'
                    color='secondary'
                    onPress={() => router.push('/profile')}
                >
                    Perfil
                </CustomButton>

                <CustomButton
                    className='mb-2'
                    color='tertiary'
                    onPress={() => router.push('/settings')}
                >
                    Ajustes
                </CustomButton>

                <Link href='/products' asChild>
                    <CustomButton
                        className='mb-10'
                        color='primary'
                        variant='text-only'
                        onPress={() => router.push('/products')}
                    >
                        Productos 2
                    </CustomButton>
                </Link>

            </View>
        </SafeAreaView >

    );
};

export default ProfileScreen;