import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../service/api';
import styles from './Styles.module.css';

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    Api.getTrendsOfFilms().then(res =>
      this.setState({ films: res.data.results }),
    );
  }

  render() {
    const { films } = this.state;
    const { location } = this.props;

    return (
      <>
        <h2 className={styles.title}>Trending today</h2>
        <ul>
          {films.map(({ id, title, name }) => (
            <li key={id} className={styles.trendsListItem}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {title || name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
