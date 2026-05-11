import { useThemeColor } from '@/hooks/use-theme-color';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    className?: string;
    children: string;
}

const ThemedButton = ({
    className,
    children,
    ...rest
}: Props) => {

    const backgroundColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            style={[
                {
                    backgroundColor: backgroundColor
                }
            ]}
            className={`items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
            {...rest}
        >
            <Text className='text-white text-2xl'>{children}</Text>
        </Pressable>
    );
};

export default ThemedButton;