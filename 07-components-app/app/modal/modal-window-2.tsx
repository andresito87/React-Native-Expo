import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';

const ModalScreen = () => {

    return (
        <ThemedView
            className='justify-center items-center flex-1'
        >
            <ThemedText
                className='my-4'
            >
                Soy otro modal
            </ThemedText>

            <ThemedButton
                onPress={() => router.dismiss()}
            >
                Cerrar
            </ThemedButton>
        </ThemedView>
    );
};

export default ModalScreen;
