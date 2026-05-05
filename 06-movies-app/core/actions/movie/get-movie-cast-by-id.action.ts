import { movieApi } from '@/core/api/movie-api';
import { Cast } from '@/infrastructure/interfaces/cast.interface';
import { CreditsResponse } from '@/infrastructure/interfaces/credits.response';
import { CastMapper } from '@/infrastructure/mappers/cast.mapper';

export const getMovieCastByIdAction = async (movieId: number | string): Promise<Cast[]> => {

    try {

        const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

        return data.cast.map(CastMapper.fromMovieDBCastToEntity);

    } catch (error) {
        console.log(error);
        throw new Error(`Cannot load the movie cast with id ${movieId}`);
    }

};