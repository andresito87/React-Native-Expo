import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

const ChatByIdScreen = () => {

    const { id } = useLocalSearchParams();

    return (
        <ThemedView style={{ marginHorizontal: 10, marginTop: 10 }}>
            <ThemedText>ChatID:</ThemedText>
            <ThemedText
                style={{
                    fontSize: 55,
                    lineHeight: 55,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 10
                }}
            >
                {id}
            </ThemedText>
        </ThemedView>
    );
};

export default ChatByIdScreen;