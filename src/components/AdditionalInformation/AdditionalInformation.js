import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import styles from './AdditionalInformation.module.css';

const AdditionalInformation = ({ location, match }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Additional information</h2>
      <ul>
        <li className={styles.informationItem}>
          <Link
            to={{
              pathname: `${match.url}/cast`,
              state: {
                from: location,
              },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${match.url}/reviews`,
              state: {
                from: location,
              },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

AdditionalInformation.propTypes = {
  location: Proptypes.object.isRequired,
  match: Proptypes.object.isRequired,
};

export default AdditionalInformation;
