import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <section>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    );
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
  };
}

export default Card;