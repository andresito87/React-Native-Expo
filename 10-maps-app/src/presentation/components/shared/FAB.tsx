import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Pressable,
    StyleProp,
    StyleSheet,
    ViewStyle,
} from 'react-native';

interface Props {
    iconName: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const FAB = ({ iconName, onPress, style }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            hitSlop={10}
            android_ripple={{
                color: 'rgba(255, 255, 255, 0.25)',
                borderless: false,
            }}
            style={({ pressed }) => [
                styles.btn,
                pressed && styles.btnPressed,
                style,
            ]}
        >
            <Ionicons
                name={iconName}
                size={35}
                color="#FFF3CD"
            />
        </Pressable>
    );
};

export default FAB;

const styles = StyleSheet.create({
    btn: {
        zIndex: 99,
        position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: '#BB86FC',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 5,
    },

    btnPressed: {
        opacity: 0.75,
        transform: [
            {
                scale: 0.94,
            },
        ],
        elevation: 2,
    },
});