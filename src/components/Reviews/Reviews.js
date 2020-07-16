import React, { Component } from 'react';
import ReviewsItem from '../ReviewsItem';
import Api from '../../service/api';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;

    Api.getReview(moviesId).then(res =>
      this.setState({ reviews: res.data.results }),
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <ReviewsItem author={author} content={content} />
              </li>
            ))}
          </ul>
        ) : (
          <h2>We don't have reviewsfor this movie :(</h2>
        )}
      </>
    );
  }
}

export default Reviews;
