import { nowPlayingAction } from '@/core/actions/movies/now-playing.actions';
import { popularMoviesAction } from '@/core/actions/movies/popular.actions';
import { topRatedMoviesAction } from '@/core/actions/movies/top-rated.actions';
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming.actions';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useMovies = () => {

    // Queries: Estos hooks se ejecutan nada mas se monte el componente
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 horas
    });

    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'popular'],
        queryFn: ({ pageParam }) => {
            return popularMoviesAction({ page: pageParam });
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1 // permite cambiar la página en la petición de los datos
    });

    // Usado en el infinite scroll
    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'top-rated'],
        queryFn: ({ pageParam }) => {
            return topRatedMoviesAction({ page: pageParam });
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1 // permite cambiar la página en la petición de los datos
    });

    const upcomingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'upcoming'],
        queryFn: ({ pageParam }) => {
            return upcomingMoviesAction({ page: pageParam });
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1 // permite cambiar la página en la petición de los datos
    });

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    };

};