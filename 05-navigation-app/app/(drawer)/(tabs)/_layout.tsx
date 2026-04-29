import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const TabsLayout = () => {
    return (
        <>
            <StatusBar
                style="dark"
                hidden={false}
            />

            <Tabs
                screenOptions={() => ({
                    tabBarActiveTintColor: 'indigo',
                    sceneStyle: {
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    },
                    tabBarStyle: {
                        paddingTop: 10,
                        height: 80,
                        backgroundColor: 'white',
                    },
                })}
            >
                <Tabs.Screen
                    name="(stack)"
                    options={{
                        title: 'Inicio',
                        headerShown: false,

                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                size={28}
                                name="person-add-outline"
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                size={28}
                                name="home-outline"
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="favorites"
                    options={{
                        title: 'Favoritos',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                size={28}
                                name="star-outline"
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
