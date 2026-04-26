import { Stack } from 'expo-router';

const StackLayout = () => {
    // Permite la navegación con stack navigation, incluye nav bar
    return (
        <Stack
            screenOptions={{ // Personalización de la barra de navegación
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                animation: 'slide_from_right'
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Pantalla Home'
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Pantalla Productos',
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Pantalla Perfil'
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Pantalla Ajustes'
                }}
            />
        </Stack>
    );
};

export default StackLayout;