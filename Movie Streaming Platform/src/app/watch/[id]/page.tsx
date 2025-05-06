import { fetchMovieDetails } from '@/utils/api';
import { MovieDetails, Genre } from '@/types';
import Link from 'next/link';
export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const movie: MovieDetails = await fetchMovieDetails(params.id);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="p-4 bg-gray-800">
        <h1 className="text-3xl font-bold">MovieStream</h1>
      </header>
      <main className="mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full md:w-1/3 rounded-lg"/>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
              <p className="text-gray-400 mb-4">{movie.overview}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Release Date</h3>
                  <p className="text-gray-400">{movie.release_date}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Rating</h3>
                  <p className="text-gray-400">{movie.vote_average}/10</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Runtime</h3>
                  <p className="text-gray-400">{movie.runtime} minutes</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Genres</h3>
                  <p className="text-gray-400">
                    {movie.genres.map((genre: Genre) => genre.name).join(', ')}
                  </p>
                </div>
                <Link href="/" className="text-blue-500 hover:text-blue-400">
          Back to Home
        </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}