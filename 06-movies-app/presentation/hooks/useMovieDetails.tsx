import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import { useQuery } from '@tanstack/react-query';

export const useMovieDetails = (id: string) => {

    // Queries: Estos hooks se ejecutan nada mas se monte el componente
    const movieDetailsQuery = useQuery({
        queryKey: ['movie', `${id}`],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24 // 24 horas
    });

    return {
        movieDetailsQuery
    };
};