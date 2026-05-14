
import { PermissionStatus } from '@/infrastructure/interfaces/location';
import * as Location from 'expo-location';

export const requestLocationPermission = async (): Promise<PermissionStatus> => {

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
};

export const checkLocationPermission = async () => {

};

const manualPermissionRequest = async () => {
    // Lanzar los ajustes de la aplicación


};