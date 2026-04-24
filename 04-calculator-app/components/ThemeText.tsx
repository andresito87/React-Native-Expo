import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native';

interface Props extends TextProps { // Extender la interface TextProps permite agregar propiedades propias de los textos
    variant?: 'h1' | 'h2';
}

const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
    return (
        <Text
            style={[
                { color: 'white', fontFamily: 'SpaceMono' },
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult,
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest} // Premite aplicar las propiedades TextProps que vienen del padre
        >
            {children}
        </Text>
    );
};

export default ThemeText;