import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={styles.group__list}>
      <li className={styles.group__item}>Good: {good}</li>
      <li className={styles.group__item}>Neutral: {neutral}</li>
      <li className={styles.group__item}>Bad: {bad}</li>
      <li className={styles.group__item}>Total: {total}</li>
      <li className={styles.group__item}>
        Positive feedback: {positivePercentage || 0} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
