import * as Location from 'expo-location';

import { LatLng } from '@/infrastructure/interfaces/lat-lng';

export const getCurrentLocation = async (): Promise<LatLng> => {

    // Obtener la localización del usuario puede generar excepciones
    try {
        const { coords } = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest
        });

        return {
            latitude: coords.latitude,
            longitude: coords.longitude
        };

    } catch (error) {
        throw new Error('Error getting user`s location');
    }
};

export const watchCurrentPosition = (
    locationCallback: (location: LatLng) => void
) => {

    // Función que recibe dos argumentos:
    // 1º objeto de configuración.
    // 2º función callback que se ejecutará cuando cambie la posición del usuario.
    return Location.watchPositionAsync(
        {
            accuracy: Location.Accuracy.Highest,
            timeInterval: 1000, // intervalo de tiempo en el que se observa la localizción
            distanceInterval: 10 // distancia recorrida a la que se observa la locaclización
        }, ({ coords }) => {
            locationCallback({
                latitude: coords.latitude,
                longitude: coords.longitude
            });
        });

};