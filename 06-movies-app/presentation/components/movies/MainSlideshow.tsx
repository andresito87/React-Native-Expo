import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { designTokens } from '@/presentation/theme/tokens';
import { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {

    const width = useWindowDimensions().width;
    const posterWidth = 160;
    const posterHeight = 238;

    const ref = useRef<ICarouselInstance>(null);

    return (
        <View
            style={{
                height: posterHeight + designTokens.spacing.lg,
                width: '100%',
                marginTop: designTokens.spacing.sm,
            }}
        >
            <Carousel
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster
                        id={item.id}
                        poster={item.poster}
                        width={posterWidth}
                        height={posterHeight}
                    />
                )}
                ref={ref}
                width={posterWidth + 36}
                height={posterHeight + designTokens.spacing.lg}
                style={{
                    width: width,
                    height: posterHeight + designTokens.spacing.lg,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 44,
                }}
                defaultIndex={1}
            />
        </View>
    );
};

export default MainSlideshow;