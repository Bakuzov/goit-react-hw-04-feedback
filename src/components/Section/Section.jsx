import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className="group">
      <h2 className={styles.group__title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
