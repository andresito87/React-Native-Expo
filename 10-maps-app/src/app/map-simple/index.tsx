import { ThemedView } from '@/presentation/components/shared/ThemedView';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <MapView
                style={{
                    width: '100%',
                    height: '100%'
                }}
                initialRegion={{
                    latitude: 36.74832299821234,
                    longitude: -4.41924313969618,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker
                    coordinate={{
                        latitude: 36.744930,
                        longitude: -4.423419,
                    }}
                    title='Aquí estoy'
                    description='Mi casa en Málaga'
                />

                <Marker
                    coordinate={{
                        latitude: 36.719340,
                        longitude: -4.431315,
                    }}
                    title='Aquí estoy'
                    description='Un lugar interesante en el centro de Málaga'
                />

            </MapView>

        </ThemedView>
    );
};

export default MapScreen;