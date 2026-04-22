import { Pressable, Text, StyleSheet } from 'react-native';

interface Props {
    // Properties
    label: string;

    position?: 'left' | 'right' | 'center';

    // Methods
    onPress?: () => void;
    onLongPress?: () => void;
}

export const FAB = ({
    label,
    onPress,
    onLongPress,
    position = 'right'
}: Props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.floatingButton,
                position === 'right'
                    ? styles.positionRight
                    : position === 'left'
                        ? styles.positionLeft
                        : styles.positionCenter,
                pressed ? { opacity: 0.7 } : { opacity: 1 }
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4
    },
    positionRight: {
        right: 20,
    },
    positionLeft: {
        left: 20,
    },
    positionCenter: {
        alignContent: 'center'
    },
});