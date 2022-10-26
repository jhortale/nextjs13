import { use } from "react";

async function getMovies() {
  const res = await fetch('https://swapi.dev/api/films/')
  const movies = await res.json()
  return movies
}

interface GetMoviesResponse {
  results: {
    title: string
    episode_id: number
  }[];
  
}

export default function Movies() {
  const movies = use<GetMoviesResponse>(getMovies())

  return (
    <ul>
      {movies.results.map(movie => <li key={movie.episode_id}>{movie.title}</li>)}
    </ul>
  );
}