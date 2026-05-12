import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur.',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList<Slide>>(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const isLastSlide = currentSlideIndex === items.length - 1;

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.round(
      contentOffset.x / layoutMeasurement.width
    );

    setCurrentSlideIndex(currentIndex);
  };

  const scrollToSlide = (index: number) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {isLastSlide && <SlidesHeader title="Slides" />}

      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => (
          <SlideItem
            item={item}
            hasHeaderSpace={index === items.length - 1}
          />
        )}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />

      <ThemedButton
        className="absolute bottom-10 right-5 w-[150px]"
        onPress={() => {
          if (isLastSlide) {
            router.dismiss();
            return;
          }

          scrollToSlide(currentSlideIndex + 1);
        }}
      >
        {isLastSlide ? 'Finalizar' : 'Siguiente'}
      </ThemedButton>
    </ThemedView>
  );
};

export default SlidesScreen;

interface SlidesHeaderProps {
  title: string;
}

// Cabecera propia para incluir en la última slide
const SlidesHeader = ({ title }: SlidesHeaderProps) => {
  const insets = useSafeAreaInsets();

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: insets.top + 64,
        paddingTop: insets.top,
        backgroundColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <Pressable
        onPress={() => router.back()}
        style={{
          width: 44,
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 8,
        }}
      >
        <Ionicons
          name="arrow-back"
          size={28}
          color={textColor}
        />
      </Pressable>

      <ThemedText
        type="h2"
        className="font-bold"
      >
        {title}
      </ThemedText>
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
  hasHeaderSpace: boolean;
}

const SlideItem = ({ item, hasHeaderSpace }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const { title, desc, img } = item;

  const headerHeight = insets.top + 64;

  return (
    <ThemedView
      className="flex-1 rounded px-10 justify-center bg-red-500"
      style={{
        width,
        paddingTop: hasHeaderSpace ? headerHeight : 40,
        paddingBottom: 120,
      }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />

      <ThemedText
        type="h1"
        className="text-light-primary dark:text-dark-primary"
      >
        {title}
      </ThemedText>

      <ThemedText
        type="semi-bold"
        className="mt-10"
      >
        {desc}
      </ThemedText>
    </ThemedView>
  );
};