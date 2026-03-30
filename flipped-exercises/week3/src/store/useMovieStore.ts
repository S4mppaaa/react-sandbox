import { create } from 'zustand';

interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

interface MovieState {
  movies: Movie[];
  toggleWatched: (id: number) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  movies: [
    { id: 1, title: "Inception", watched: true },
    { id: 2, title: "Interstellar", watched: false },
    { id: 3, title: "The Dark Knight", watched: true },
    { id: 4, title: "Tenet", watched: false },
  ],

  toggleWatched: (id) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      ),
    })),
}));