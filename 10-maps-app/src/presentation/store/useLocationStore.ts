import { getCurrentLocation, watchCurrentPosition } from '@/core/actions/location/location';
import { LatLng } from '@/infrastructure/interfaces/lat-lng';
import { LocationSubscription } from 'expo-location';
import { create } from 'zustand';

// Propiedades y métodos que tiene nuestro almacén global de información
interface LocationState {
    lastKnownLocation: LatLng | null;
    userLocationList: LatLng[];
    watchSubscriptionID: LocationSubscription | null;

    getLocation: () => Promise<LatLng>;
    watchLocation: () => void;
    clearWatchLocation: () => void;
}

// Store global con Zustand
export const useLocationStore = create<LocationState>()((set, get) => ({
    lastKnownLocation: null,
    userLocationList: [],
    watchSubscriptionID: null,

    // Obtiene la localización del usuario
    getLocation: async () => {
        const location = await getCurrentLocation();
        set({ lastKnownLocation: location });
        return location;
    },

    // Crea una subscripción tipo watch para observar los cambios en la localización del usuario
    watchLocation: async () => {
        const oldSubscription = get().watchSubscriptionID;
        if (oldSubscription !== null) {
            get().clearWatchLocation();
        }

        const watchSubscription = await watchCurrentPosition(
            (latLng) => {
                set({
                    lastKnownLocation: latLng,
                    userLocationList: [...get().userLocationList, latLng]
                });
            }
        );

        set({ watchSubscriptionID: watchSubscription });
    },

    // Limpia la subscripción tipo watch de la localización actual
    clearWatchLocation: async () => {
        const subscription = get().watchSubscriptionID;
        if (subscription !== null) {
            subscription.remove();
        }
    },
}));