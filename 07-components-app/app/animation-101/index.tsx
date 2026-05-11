import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const {
    animatedTop,
    animatedOpacity,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    endMovingTopPosition
  } = useAnimation();

  return (
    <ThemedView
      margin
      className='justify-center items-center flex-1'
    >
      <Animated.View
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }}
      />

      <ThemedButton
        className='my-5'
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            easing: Easing.bounce,
            duration: 700
          });
        }}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton
        className='my-5'
        onPress={() => {
          fadeOut({});
          endMovingTopPosition({
            easing: Easing.elastic(1),
            duration: 700,
            toValue: -300
          });
        }}
      >
        FadeOut
      </ThemedButton>

    </ThemedView>
  );
};
export default Animation101Screen;
