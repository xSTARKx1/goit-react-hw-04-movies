import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Api from '../service/api';
import styles from './Styles.module.css';

class MoviesPage extends Component {
  state = {
    query: '',
    foundFilms: [],
  };

  handleChange = e => this.setState({ query: e.target.value });

  findFilms = async () => {
    const { query } = this.state;
    if (!query) {
      return;
    }

    Api.getFilmOnQuery(query).then(res =>
      this.setState({
        foundFilms: res.data.results,
        query: '',
      }),
    );
  };

  render() {
    const { query, foundFilms } = this.state;
    const { match, location } = this.props;

    return (
      <>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            value={query}
            className={styles.formOfSearch}
          />
          <button
            type="button"
            onClick={this.findFilms}
            className={styles.searchButton}
          >
            Search
          </button>
        </form>
        {foundFilms.length > 0 && (
          <ul>
            {foundFilms.map(({ id, title }) => (
              <li key={id} className={styles.searchList}>
                <Link
                  to={{
                    pathname: `${match.url}/${id}`,
                    state: {
                      from: location,
                    },
                  }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default withRouter(MoviesPage);
