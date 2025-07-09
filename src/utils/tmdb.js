import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (page = 1) => {
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  return res.data;
};

export const searchMovies = async (query, page = 1) => {
  const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
  return res.data;
};
