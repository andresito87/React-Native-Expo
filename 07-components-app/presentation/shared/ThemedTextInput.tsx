import { TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface Props extends TextInputProps {
    className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
    return (
        <View>
            <TextInput
                className={`py-4 px-2 text-black dark:text-white ${className}`}
                placeholderTextColor='grey'
                {...rest}
            />
        </View>
    );
};

export default ThemedTextInput;