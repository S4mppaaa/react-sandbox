import React, { useState } from 'react';
import { useMovieStore } from '../store/useMovieStore';

export function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  const [filterType, setFilterType] = useState<'all' | 'watched' | 'unwatched'>('all');

  // FILTERING
  const filteredMovies =
    filterType === 'all'
      ? movies
      : filterType === 'watched'
      ? movies.filter((m) => m.watched)
      : movies.filter((m) => !m.watched);

  return (
    <div className="mt-10 p-6">
      
      <h2 className="text-2xl font-bold mb-4">Movie library</h2>

      {/* FILTER BUTTONS */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilterType('all')}
          className="px-3 py-1 bg-gray-100 rounded"
        >
          All movies
        </button>

        <button
          onClick={() => setFilterType('watched')}
          className="px-3 py-1 bg-gray-100 rounded"
        >
          Watched movies
        </button>

        <button
          onClick={() => setFilterType('unwatched')}
          className="px-3 py-1 bg-gray-100 rounded"
        >
          Kesken
        </button>
      </div>

      {/* MOVIE LIST */}
      <div className="space-y-2">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="flex items-center gap-4"
          >
            <span>
              {movie.title}{' '}
              {movie.watched ? '✅ Watched' : '⏳ Unwatched'}
            </span>

            <button
              onClick={() => toggleWatched(movie.id)}
              className="px-3 py-1 bg-gray-100 rounded"
            >
              Change state
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}