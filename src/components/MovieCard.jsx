// components/MovieCard.jsx
const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h4>{movie.title}</h4>
      <p>{movie.release_date}</p>
      <button onClick={() => onToggleFavorite(movie)}>
        {isFavorite ? '🔴' : '⚪'}
      </button>
    </div>
  );
};

export default MovieCard;
