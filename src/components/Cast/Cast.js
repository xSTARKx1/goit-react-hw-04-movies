import React, { Component } from 'react';
import Api from '../../service/api';
import OneActor from './OneActor';

class Cast extends Component {
  state = {
    actors: [],
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;

    Api.getCast(moviesId).then(res => this.setState({ actors: res.data.cast }));
  }

  render() {
    const { actors } = this.state;

    return (
      <>
        <ul>
          {actors.map(({ cast_id, profile_path, name, character }) => (
            <li key={cast_id}>
              <OneActor
                profile_path={profile_path}
                name={name}
                character={character}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
