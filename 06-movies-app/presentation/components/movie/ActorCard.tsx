import { Cast } from '@/infrastructure/interfaces/cast.interface';
import AppText from '@/presentation/components/ui/AppText';
import { useAppTheme } from '@/presentation/theme/useAppTheme';
import { Image, View } from 'react-native';

interface Props {
    actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
    const { colors } = useAppTheme();

    return (
        <View className="mx-5 w-[100px]">
            <Image
                source={{ uri: actor.avatar }}
                className="w-[100px] h-[150px] rounded-2xl"
                style={{ borderWidth: 1, borderColor: colors.border }}
                resizeMode="cover"
            />

            <View className='mt-2'>
                <AppText
                    numberOfLines={2}
                    adjustsFontSizeToFit
                    style={{ fontWeight: '700', lineHeight: 18 }}
                >
                    {actor.name}
                </AppText>
                <AppText variant='caption' muted>{actor.character}</AppText>
            </View>
        </View>
    );
};