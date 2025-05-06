import React from 'react';
import MovieCard from '../components/MovieCard';

const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
      <div>
        {/* Example of rendering multiple MovieCard components */}
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Movies;
