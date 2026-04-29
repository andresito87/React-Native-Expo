import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer);
    };

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
                    >
                        Productos 2
                    </CustomButton>
                </Link>

                <CustomButton
                    className='mb-2'
                    color='primary'
                    onPress={onToggleDrawer}
                >
                    Abrir menú
                </CustomButton>

            </View>
        </SafeAreaView >

    );
};

export default ProfileScreen;