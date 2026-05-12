import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';

const ModalScreen = () => {
  return (
    <ThemedView>
      <ThemedText
        className='text-light-text dark:text-dark-text my-2 mx-4 text-xl'
      >
        Modales
      </ThemedText>

      <ThemedButton
        onPress={() => router.push('/modal/modal-window')}
        className='mx-4'
      >
        Abrir modal
      </ThemedButton>

    </ThemedView>
  );
};

export default ModalScreen;
