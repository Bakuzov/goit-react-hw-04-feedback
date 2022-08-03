import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.statistics__list}>
      {options.map(option => (
        <li key={nanoid()}>
          <button
            type="button"
            name={option}
            className={styles.statistics__btn}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
