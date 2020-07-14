import React from 'react';
import Proptypes from 'prop-types';
import styles from './CardOfMovie.module.css';

const CardOfMovie = ({
  poster,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <>
      <div>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt={title}
        />
      </div>
      <div className={styles.filmsInfo}>
        <h2 className={styles.filmTitle}>
          {title} ({release_date})
        </h2>
        <p>User score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul className={styles.listOfGenres}>
          {genres.map(({ id, name }) => (
            <li key={id} className={styles.listOfGenresItem}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

CardOfMovie.propTypes = {
  poster: Proptypes.string,
  title: Proptypes.string,
  release_date: Proptypes.string,
  vote_average: Proptypes.number,
  overview: Proptypes.string,
  genres: Proptypes.array,
};

export default CardOfMovie;
