import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
    
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <p className={styles.image}>{props.image}</p>
    </header>
);


Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.node
  };

export default Hero;