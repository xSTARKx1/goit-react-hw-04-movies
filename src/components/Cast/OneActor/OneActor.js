import React from 'react';
import Proptypes from 'prop-types';

const OneActor = ({ character, name, profile_path }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </>
  );
};

OneActor.propTypes = {
  character: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  profile_path: Proptypes.string,
};

export default OneActor;
