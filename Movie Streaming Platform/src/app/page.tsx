import { fetchPopularMovies } from '@/utils/api';
import MovieCard from '@/components/MovieCard';

export default async function Home() {
  const movies = await fetchPopularMovies();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-gray-800">
        <h1 className="text-3xl font-bold">ನಮ್ಮ ಫ್ಲೆಕ್ಸ್ | Namma Flex</h1>
      </header>
      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Popular Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}