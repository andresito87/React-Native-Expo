import { CompleteMovie, Movie } from '../interfaces/movie.interface';
import { MovieDBMovieResponse } from '../interfaces/moviedb-movie.response';
import { Result } from '../interfaces/moviedb.response';

const MOVIE_DB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const POSTER_PLACEHOLDER =
    'https://placehold.co/500x750/0f172a/e2e8f0.png?text=Sin%0Ap%C3%B3ster';

const BACKDROP_PLACEHOLDER =
    'https://placehold.co/1280x720/0f172a/e2e8f0.png?text=Sin%20imagen';

export class MovieMapper {

    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: movie.poster_path
                ? `${MOVIE_DB_IMAGE_URL}${movie.poster_path}`
                : POSTER_PLACEHOLDER,

            backdrop: movie.backdrop_path
                ? `${MOVIE_DB_IMAGE_URL}${movie.backdrop_path}`
                : BACKDROP_PLACEHOLDER,
        };
    };

    static fromTheMovieDBToMovieComplete = (movie: MovieDBMovieResponse): CompleteMovie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: movie.poster_path
                ? `${MOVIE_DB_IMAGE_URL}${movie.poster_path}`
                : POSTER_PLACEHOLDER,

            backdrop: movie.backdrop_path
                ? `${MOVIE_DB_IMAGE_URL}${movie.backdrop_path}`
                : BACKDROP_PLACEHOLDER,
            genres: movie.genres.map(genre => genre.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name)
        };
    };
};