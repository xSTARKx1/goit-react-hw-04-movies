import React from 'react';

const ReviewsItem = ({ content, author }) => {
  return (
    <>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </>
  );
};

export default ReviewsItem;
