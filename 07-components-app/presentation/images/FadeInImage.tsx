import { useAnimation } from '@/hooks/useAnimation';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, Platform, StyleProp, View } from 'react-native';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    const { animatedOpacity, fadeIn } = useAnimation();

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                isLoading &&
                <ActivityIndicator
                    style={{
                        position: 'absolute'
                    }}
                    color='grey'
                    size={Platform.OS === 'ios' ? 'large' : 40}
                />
            }

            <Animated.Image
                source={{ uri }}
                style={[style, { opacity: animatedOpacity }]}
                onLoadEnd={() => {
                    fadeIn({});
                    setIsLoading(false);
                }}
            />

        </View>
    );
};

export default FadeInImage;