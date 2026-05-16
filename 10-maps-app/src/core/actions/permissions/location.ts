import { PermissionStatus } from '@/infrastructure/interfaces/location';
import * as Location from 'expo-location';
import { Alert, Linking } from 'react-native';

// Utilizamos el paquete https://docs.expo.dev/versions/latest/sdk/location/
// Solicita permisos de localización al usuario
export const requestLocationPermission = async (): Promise<PermissionStatus> => {

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        if (status === 'denied') {
            manualPermissionRequest();
        }
        return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
};

// Comprueba el estado del permiso para acceder a la ubicación del usuario
export const checkLocationPermission = async () => {

    const { status } = await Location.getForegroundPermissionsAsync();

    switch (status) {
        case 'granted':
            return PermissionStatus.GRANTED;
        case 'denied':
            return PermissionStatus.DENIED;
        default:
            return PermissionStatus.UNDETERMINED;
    }
};

const manualPermissionRequest = async () => {
    // Lanzar los ajustes de la aplicación
    Alert.alert(
        'Permiso de ubicación',
        'Para continuar debe habilitar el permiso de localización en los ajustes de la app',
        [
            {
                text: 'Abrir Ajustes',
                onPress: () => {
                    Linking.openSettings();
                }
            },
            {
                text: 'Cancelar',
                style: 'destructive'
            }
        ]
    );

};