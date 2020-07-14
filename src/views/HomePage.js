import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Styles.module.css';

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=1747a0eecc2a2bb6cec6e6e5c8420ddf',
    );

    this.setState({ films: response.data.results });
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
