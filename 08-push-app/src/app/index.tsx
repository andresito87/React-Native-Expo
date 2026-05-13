import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { usePushNotifications } from '@/hooks/use-push-notifications';
import { FlatList } from 'react-native';

export default function PushApp() {

  const { expoPushToken, notifications } = usePushNotifications();

  return (
    <ThemedView style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 20 }}>
      <ThemedText>Expo push token: {expoPushToken}</ThemedText>

      <FlatList
        ListHeaderComponent={() => (<ThemedText style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>Notificaciones:</ThemedText>)}
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <ThemedView style={{ paddingVertical: 10 }}>
            <ThemedText style={{ fontWeight: 'bold' }}>
              {item.request.content.title}
            </ThemedText>
            <ThemedText>
              {item.request.content.body}
            </ThemedText>
            <ThemedText>
              {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </ThemedView>
        )}
        ItemSeparatorComponent={() => (
          <ThemedView style={{ height: 1, backgroundColor: 'grey', opacity: 0.5 }} />
        )}
        ListEmptyComponent={() => (
          <ThemedView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20
            }}
          >
            <ThemedText
              style={{ textAlign: 'center', fontSize: 16, color: 'grey' }}
            >
              No hay notificaciones
            </ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}
