import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {

    const secondaryColor = useThemeColor({}, 'secondary');

    return (
        <ThemedView
            className='justify-center items-center flex-1'
            bgColor={secondaryColor}
        >
            <Text>Soy un modal</Text>

            <ThemedButton
                onPress={() => router.push('/modal/modal-window-2')}
                className='my-4'
            >
                Otro Modal
            </ThemedButton>

            <ThemedButton
                onPress={() => router.dismiss()}
            >
                Cerrar
            </ThemedButton>
        </ThemedView>
    );
};

export default ModalScreen;
