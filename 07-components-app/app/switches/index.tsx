import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>

        <ThemedSwitch
          text='Activo'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='p-4 mb-4'
        />

        <ThemedSwitch
          text='Hambriento'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className='p-4 mb-4'
        />

        <ThemedSwitch
          text='Feliz'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='p-4 mb-4'
        />

      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
