// pages/Watchlist.jsx
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  const removeFavorite = (movie) => {
    const updated = favorites.filter(m => m.id !== movie.id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="grid">
      {favorites.length === 0 ? (
        <p>No movies in watchlist.</p>
      ) : (
        favorites.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={true}
            onToggleFavorite={removeFavorite}
          />
        ))
      )}
    </div>
  );
};

export default Watchlist;
