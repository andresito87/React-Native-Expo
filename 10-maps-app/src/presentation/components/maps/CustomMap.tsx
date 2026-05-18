import { LatLng } from '@/infrastructure/interfaces/lat-lng';
import { useLocationStore } from '@/presentation/store/useLocationStore';
import { useEffect, useRef, useState } from 'react';
import { View, ViewProps } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import FAB from '../shared/FAB';

interface Props extends ViewProps {
    initialLocation: LatLng;
    showUserLocation?: boolean;
}

const CustomMap = ({ initialLocation, showUserLocation = true, ...rest }: Props) => {

    const mapRef = useRef<MapView>(null); // Referencia para acceder y modifcar propiedades del mapa sin que se renderice completamente
    const [isFollowingUser, setIsFollowingUser] = useState(true); // Estado para almacenar si la cámara debe o no seguir al usuario
    const [isShowingPolyline, setIsShowingPolyline] = useState(false); // Estado de mostrar/ocultar la polyline en la ruta
    const {
        watchLocation,
        clearWatchLocation,
        getLocation,
        lastKnownLocation,
        userLocationList
    } = useLocationStore(); // Nuestro almacén global de Zustand para almacenar y gestionar la localización del usuario

    useEffect(() => {
        watchLocation();

        return () => {
            clearWatchLocation();
        };
    }, []);

    useEffect(() => {
        if (lastKnownLocation && isFollowingUser) {
            moveCameraToLocation(lastKnownLocation);
        }

    }, [lastKnownLocation, isFollowingUser]);

    const moveCameraToLocation = (latLng: LatLng) => {
        if (!mapRef.current) return;

        mapRef.current.animateCamera({
            center: latLng,
            zoom: 18, // nivel de zoom para GoogleMaps Android
            altitude: 1800 // nivel de zoom para AppleMaps en iOS
        });
    };

    const moveToCurrentLocation = async () => {
        if (!lastKnownLocation) {
            moveCameraToLocation(initialLocation);
        } else {
            moveCameraToLocation(lastKnownLocation);
        }

        const location = await getLocation();
        if (!location) return;
        moveCameraToLocation(location);
    };

    return (
        <View {...rest}>
            <MapView
                ref={mapRef}
                onTouchStart={() => setIsFollowingUser(false)}
                showsUserLocation={showUserLocation}
                initialRegion={{
                    latitude: initialLocation.latitude,
                    longitude: initialLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                {isShowingPolyline && <Polyline
                    coordinates={userLocationList}
                    strokeColor='red'
                    strokeWidth={5}
                />}
            </MapView>

            {/* Activa o desactiva la polyline en las ruta */}
            <FAB
                iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
                onPress={() => setIsShowingPolyline(!isShowingPolyline)}
                style={{
                    bottom: 150,
                    right: 20
                }}
            />

            {/* Activa o desactiva el seguimiento de la posición del usuario */}
            <FAB
                iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
                onPress={() => setIsFollowingUser(!isFollowingUser)}
                style={{
                    bottom: 90,
                    right: 20
                }}
            />

            {/* Mueve la cámara a la posición actual del usuario */}
            <FAB
                iconName="compass-outline"
                onPress={moveToCurrentLocation}
                style={{
                    bottom: 30,
                    right: 20
                }}
            />

        </View>
    );
};

export default CustomMap;
