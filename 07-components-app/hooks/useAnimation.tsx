import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({
        duration = 300,
        toValue = 1,
        useNativeDriver = true,
        easing = Easing.linear,
        callback = () => { }
    }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback);
    };

    const fadeOut = ({
        duration = 300,
        toValue = 0,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => { }
    }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
            // }).start(() => animatedTop.setValue(-200)); // resetea el valor de la animación al valor inicial
        }).start(callback); // resetea la animación al momento antes de llamar a start()
    };

    const startMovingTopPosition = ({
        initialPosition = -200,
        duration = 700,
        toValue = 0,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => { }
    }) => {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
        }).start(callback);
    };

    const endMovingTopPosition = ({
        initialPosition = 0,
        duration = 700,
        toValue = -200,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => { }
    }) => {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
        }).start(callback);
    };

    return {
        animatedTop,
        animatedOpacity,

        // Methods
        fadeIn,
        fadeOut,
        startMovingTopPosition,
        endMovingTopPosition
    };
};