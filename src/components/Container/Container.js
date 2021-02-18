import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

class Container extends React.Component {
  render() {
    return (
      <div className={styles.component}>{this.props.children}</div>
    );
  }
  
}

export default Container;
