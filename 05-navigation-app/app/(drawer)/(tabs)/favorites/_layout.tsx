import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';

const FavoritesLayout = () => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar
                style="dark"
                hidden={false}
            />

            <Stack
                screenOptions={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '600',
                    },
                    statusBarStyle: 'dark',
                    statusBarHidden: false,
                    headerLeft: () => (
                        <Pressable
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                            style={{
                                marginRight: 16,
                                width: 32,
                                height: 32,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Ionicons
                                name="grid-outline"
                                size={22}
                                color="black"
                            />
                        </Pressable>
                    ),
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        title: 'Favoritos',
                    }}
                />
            </Stack>
        </>
    );
};

export default FavoritesLayout;
