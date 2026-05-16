import ThemedPressable from '@/presentation/components/shared/ThemedPressable';
import { ThemedText } from '@/presentation/components/shared/ThemedText';
import { ThemedView } from '@/presentation/components/shared/ThemedView';
import { usePermissionsStore } from '@/presentation/store/usePermissions';

const PermissionsScreen = () => {

    const { locationStatus, requestLocationPermission } = usePermissionsStore();

    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <ThemedPressable onPress={requestLocationPermission}>
                Habilitar ubicación
            </ThemedPressable>

            <ThemedText>Estado Actual: {locationStatus}</ThemedText>
        </ThemedView>
    );
};

export default PermissionsScreen;