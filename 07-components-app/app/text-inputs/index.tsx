import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

const TextInputsScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const lastInputFocusedRef = useRef(false);

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollToEnd({
        animated: Platform.OS === 'android',
      });
    });
  };

  useEffect(() => {
    const keyboardShowEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';

    const keyboardHideEvent =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const keyboardShowSubscription = Keyboard.addListener(
      keyboardShowEvent,
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);

        if (lastInputFocusedRef.current) {
          scrollToBottom();

          setTimeout(() => {
            scrollToBottom();
          }, 10);
        }
      }
    );

    const keyboardHideSubscription = Keyboard.addListener(
      keyboardHideEvent,
      () => {
        setKeyboardHeight(0);
        lastInputFocusedRef.current = false;
      }
    );

    return () => {
      keyboardShowSubscription.remove();
      keyboardHideSubscription.remove();
    };
  }, []);

  const handleLastInputFocus = () => {
    lastInputFocusedRef.current = true;

    setTimeout(() => {
      scrollToBottom();
    }, 10);
  };

  const scrollBottomPadding =
    Platform.OS === 'android' && keyboardHeight > 0
      ? keyboardHeight + 32
      : 40;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <ScrollView
        ref={scrollViewRef}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: scrollBottomPadding,
        }}
      >
        <ThemedView margin>
          <ThemedCard className="mt-5 mb-5">
            <ThemedText className="text-xl font-bold mb-4">
              Introduzca sus datos:
            </ThemedText>

            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize="words"
              autoCorrect={false}
              className="py-2"
              value={form.name}
              onChangeText={(text) =>
                setForm((prev) => ({
                  ...prev,
                  name: text,
                }))
              }
            />

            <ThemedTextInput
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              className="py-2"
              value={form.email}
              onChangeText={(text) =>
                setForm((prev) => ({
                  ...prev,
                  email: text,
                }))
              }
            />
          </ThemedCard>

          <InfoCard form={form} />
          <InfoCard form={form} />
          <InfoCard form={form} />
          <InfoCard form={form} />

          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              className="py-2"
              value={form.phone}
              onFocus={handleLastInputFocus}
              onBlur={() => {
                lastInputFocusedRef.current = false;
              }}
              onChangeText={(text) =>
                setForm((prev) => ({
                  ...prev,
                  phone: text,
                }))
              }
            />
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

interface FormState {
  name: string;
  email: string;
  phone: string;
}

interface InfoCardProps {
  form: FormState;
}

const InfoCard = ({ form }: InfoCardProps) => {
  return (
    <ThemedCard className="mb-5">
      <ThemedText className="text-xl font-bold mb-4">
        Información almacenada:
      </ThemedText>

      <View className="gap-3">
        <InfoRow label="Nombre" value={form.name} />
        <InfoRow label="Email" value={form.email} />
        <InfoRow label="Teléfono" value={form.phone} />
      </View>
    </ThemedCard>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <View className="border-b border-gray-300 dark:border-gray-700 pb-3">
      <ThemedText className="text-sm opacity-60 mb-1">
        {label}
      </ThemedText>

      <ThemedText className="text-base font-semibold">
        {value.trim() || 'Sin completar'}
      </ThemedText>
    </View>
  );
};

export default TextInputsScreen;