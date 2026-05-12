import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { SectionList, View } from 'react-native';

interface House {
  title: string;
  data: string[];
}

const houses: House[] = [
  {
    title: 'DC Comics',
    data: [
      'Superman',
      'Batman',
      'Wonder Woman (Mujer Maravilla)',
      'The Flash (Flash)',
      'Aquaman',
      'Green Lantern (Linterna Verde)',
      'Cyborg',
      'Shazam',
      'Green Arrow (Flecha Verde)',
      'Batgirl (Batichica)',
      'Nightwing (Ala Nocturna)',
      'Supergirl',
      'Martian Manhunter (Detective Marciano)',
      'Harley Quinn',
      'Joker',
      'Catwoman (Gata Salvaje)',
      'Lex Luthor',
      'Poison Ivy (Hiedra Venenosa)',
      'Robin',
      'Deathstroke (Deathstroke el Terminator)',
    ],
  },
  {
    title: 'Marvel Comics',
    data: [
      'Spider-Man (Hombre Araña)',
      'Iron Man (Hombre de Hierro)',
      'Captain America (Capitán América)',
      'Thor',
      'Black Widow (Viuda Negra)',
      'Hulk',
      'Doctor Strange (Doctor Extraño)',
      'Black Panther (Pantera Negra)',
      'Captain Marvel (Capitana Marvel)',
      'Wolverine',
      'Deadpool',
      'Scarlet Witch (Bruja Escarlata)',
      'Ant-Man (Hombre Hormiga)',
      'Wasp (Avispa)',
      'Groot',
      'Rocket Raccoon (Mapache Cohete)',
      'Gamora',
      'Drax the Destroyer (Drax el Destructor)',
    ],
  },
  {
    title: 'Anime',
    data: [
      'Son Goku (Dragon Ball)',
      'Naruto Uzumaki (Naruto)',
      'Monkey D. Luffy (One Piece)',
      'Sailor Moon (Sailor Moon)',
      'Kenshin Himura (Rurouni Kenshin)',
      'Edward Elric (Fullmetal Alchemist)',
      'Inuyasha (Inuyasha)',
      'Sakura Kinomoto (Cardcaptor Sakura)',
      'Light Yagami (Death Note)',
      'Eren Yeager (Attack on Titan)',
      'Lelouch Lamperouge (Code Geass)',
      'Vegeta (Dragon Ball)',
      'Ichigo Kurosaki (Bleach)',
      'Kaneki Ken (Tokyo Ghoul)',
      'Gon Freecss (Hunter x Hunter)',
      'Asuka Langley Soryu (Neon Genesis Evangelion)',
      'Saitama (One Punch Man)',
      'Mikasa Ackerman (Attack on Titan)',
      'Natsu Dragneel (Fairy Tail)',
      'Usagi Tsukino (Sailor Moon)',
      'Sasuke Uchiha (Naruto)',
    ],
  },
];

const SectionListScreen = () => {
  const totalCharacters = houses.reduce(
    (total, section) => total + section.data.length,
    0
  );

  return (
    <ThemedView
      margin
      style={{
        flex: 1,
      }}
    >
      <SectionList
        sections={houses}
        keyExtractor={(item, index) => `${item}-${index}`}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        ListHeaderComponent={() => (
          <View className="mb-5">
            <ThemedText type="h1" className="font-bold">
              Personajes
            </ThemedText>

            <ThemedText className="opacity-70 mt-1">
              {houses.length} secciones · {totalCharacters} personajes
            </ThemedText>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View className="bg-light-background dark:bg-dark-background">
            <ThemedText
              type="h2"
              className="font-bold px-4 py-2 rounded-xl bg-light-card dark:bg-dark-card"
            >
              {section.title}
            </ThemedText>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View className="px-4 py-3 bg-light-card dark:bg-dark-card">
            <ThemedText>
              {index + 1}. {item}
            </ThemedText>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View className="h-[1px] bg-gray-200 dark:bg-gray-800 mx-4" />
        )}
        SectionSeparatorComponent={() => <View className="h-2" />}
        renderSectionFooter={({ section }) => (
          <View className="px-4 py-2 bg-light-card dark:bg-dark-card rounded-b-xl">
            <ThemedText className="text-sm opacity-60">
              Total en {section.title}: {section.data.length}
            </ThemedText>
          </View>
        )}
        ListFooterComponent={() => (
          <View className="mt-5 mb-10 p-4 rounded-xl bg-light-card dark:bg-dark-card">
            <ThemedText className="font-bold">
              Total de secciones: {houses.length}
            </ThemedText>

            <ThemedText className="opacity-70 mt-1">
              Total de personajes: {totalCharacters}
            </ThemedText>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center py-10">
            <ThemedText>No hay personajes disponibles.</ThemedText>
          </View>
        )}
      />
    </ThemedView>
  );
};

export default SectionListScreen;