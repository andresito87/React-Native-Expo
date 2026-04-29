import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';

const StackLayout = () => {
    const navigation = useNavigation();

    const onHeaderLeftToggle = (canGoBack: boolean) => {

        if (canGoBack) {
            return router.back();
        }

        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <>
            <StatusBar
                style="dark"
                hidden={false}
            />
            <Stack
                screenOptions={{
                    headerShadowVisible: false,
                    contentStyle: {
                        backgroundColor: 'white',
                    },
                    animation: 'slide_from_right',
                    statusBarStyle: 'dark',
                    statusBarHidden: false,
                    headerLeft: ({ tintColor, canGoBack }) => (
                        <View
                            style={{
                                backgroundColor: 'white',
                                borderBottomWidth: 0,
                                justifyContent: 'center',
                            }}
                        >

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Pressable
                                    onPress={() => onHeaderLeftToggle(canGoBack ?? false)}
                                    style={{
                                        marginRight: 16,
                                        width: 32,
                                        height: 32,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Ionicons
                                        name={canGoBack ? "arrow-back-outline" : "grid-outline"}
                                        size={22}
                                        color="black"
                                    />
                                </Pressable>

                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: '600',
                                        color: 'black',
                                    }}
                                >
                                    { }
                                </Text>
                            </View>
                        </View>
                    )
                }}>
                <Stack.Screen
                    name="home/index"
                    options={{
                        title: 'Inicio',
                    }}

                />

                <Stack.Screen
                    name="products/index"
                    options={{
                        title: 'Productos',
                    }}
                />

                <Stack.Screen
                    name="profile/index"
                    options={{
                        title: 'Perfil',
                    }}
                />

                <Stack.Screen
                    name="settings/index"
                    options={{
                        title: 'Ajustes',
                    }}
                />
            </Stack >
        </>
    );
};

export default StackLayout;