import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import Api from '../service/api';
import CardOfMovie from '../components/CardOfMovie';
import AdditionalInformation from '../components/AdditionalInformation';
import styles from './Styles.module.css';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    genres: [],
    id: null,
    release_date: null,
    poster_path: null,
    title: null,
    vote_average: null,
    overview: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    Api.getFilm(movieId).then(res => this.setState({ ...res.data }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.movies);
  };

  render() {
    const {
      genres,
      release_date,
      title,
      poster_path,
      vote_average,
      overview,
    } = this.state;
    const { location, match } = this.props;

    return (
      <>
        <button
          className={styles.goBackButton}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <div className={styles.cardOfMovie}>
          <CardOfMovie
            poster={poster_path}
            title={title}
            release_date={release_date}
            vote_average={vote_average}
            overview={overview}
            genres={genres}
          />
        </div>
        <AdditionalInformation location={location} match={match} />

        <Route path="/movies/:moviesId/cast" component={Cast} />
        <Route path="/movies/:moviesId/reviews" component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
