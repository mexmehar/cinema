// pages/Home.jsx
import { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from '../utils/tmdb';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    const fetchData = async () => {
      const data = query ? await searchMovies(query, page) : await fetchPopularMovies(page);
      setMovies(data.results);
    };
    fetchData();
  }, [page, query]);

  const toggleFavorite = (movie) => {
    let updated = [...favorites];
    if (favorites.find(m => m.id === movie.id)) {
      updated = updated.filter(m => m.id !== movie.id);
    } else {
      updated.push(movie);
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const isFavorite = (movie) => favorites.some(m => m.id === movie.id);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies..."
        value={query}
        onChange={(e) => { setQuery(e.target.value); setPage(1); }}
      />
      <div className="grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={isFavorite(movie)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
