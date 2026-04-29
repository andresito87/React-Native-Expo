import CustomDrawer from '@/components/shared/CustomDrawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

const DrawerLayout = () => {
    return (
        <>
            <StatusBar style="dark" hidden={false} />
            <Drawer
                drawerContent={CustomDrawer}
                screenOptions={{
                    overlayColor: 'rgba(0,0,0,0.4)',
                    drawerHideStatusBarOnOpen: false,
                    drawerActiveTintColor: 'indigo',
                    headerShadowVisible: false,
                    drawerContentStyle: {
                        backgroundColor: 'white',
                    },
                    sceneStyle: {
                        backgroundColor: 'white',
                    },
                }}
            >
                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                        drawerLabel: 'Tabs y Stack',
                        title: 'Tabs y Stack',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons
                                name="albums-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />

                <Drawer.Screen
                    name="user/index"
                    options={{
                        drawerLabel: 'Usuario',
                        title: 'Usuario',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons
                                name="person-circle-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />

                <Drawer.Screen
                    name="schedule/index"
                    options={{
                        drawerLabel: 'Horarios',
                        title: 'Horarios',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons
                                name="calendar-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </Drawer>
        </>
    );
};

export default DrawerLayout;