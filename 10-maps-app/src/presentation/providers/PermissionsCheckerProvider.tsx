import { PermissionStatus } from '@/infrastructure/interfaces/location';
import { router } from 'expo-router';
import React, { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';
import { usePermissionsStore } from '../store/usePermissions';

const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {

    const { locationStatus, checkLocationPermission } = usePermissionsStore();

    useEffect(() => {

        if (locationStatus === PermissionStatus.GRANTED) {
            router.replace('/map');
        } else if (locationStatus !== PermissionStatus.CHECKING) {
            router.replace('/permissions');
        }

    }, [locationStatus]);

    useEffect(() => {
        checkLocationPermission();
    }, []);

    // Permite estar pendiente cuando el estado de la aplicación cambia
    useEffect(() => {

        const subcription = AppState.addEventListener('change', (nextAppState) => {

            if (nextAppState === 'active') {
                checkLocationPermission();
            }
        });

        return () => {
            subcription.remove(); // Limpia la subcripción al AppState
        };
    }, []);


    return (<>{children}</>);
};

export default PermissionsCheckerProvider;