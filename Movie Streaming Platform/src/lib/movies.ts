// Example functions for fetching movies
export async function fetchPopularMovies(): Promise<Movie[]> {
    const response = await fetch('https://api.example.com/movies/popular');
    const data = await response.json();
    return data.results;
  }
  
  export async function searchMovies(query: string): Promise<Movie[]> {
    const response = await fetch(`https://api.example.com/movies/search?query=${query}`);
    const data = await response.json();
    return data.results;
  }
  
  // Example Movie type
  export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
  }