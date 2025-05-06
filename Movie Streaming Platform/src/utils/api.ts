const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
}

export async function fetchPopularMovies(): Promise<Movie[]> {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
export async function searchMovies(query: string): Promise<Movie[]> {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
    query
  )}&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
export async function fetchMovieDetails(id: string): Promise<MovieDetails> {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}