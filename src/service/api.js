import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '1747a0eecc2a2bb6cec6e6e5c8420ddf';

const getCast = movieId => {
  return axios.get(`/movie/${movieId}/credits?api_key=${apiKey}`);
};

const getReview = movieId => {
  return axios.get(`/movie/${movieId}/reviews?api_key=${apiKey}`);
};

const getFilm = movieId => {
  return axios.get(`/movie/${movieId}?api_key=${apiKey}&language=en-US`);
};

const getFilmOnQuery = query => {
  return axios.get(
    `/search/movie?query=${query}&api_key=${apiKey}&include_adult=false`,
  );
};

const getTrendsOfFilms = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
  );
};

export default {
  getCast,
  getReview,
  getFilm,
  getFilmOnQuery,
  getTrendsOfFilms,
};
