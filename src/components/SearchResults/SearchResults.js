import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from '../Column/Icon';

class SearchResults extends React.Component {
 

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {/* {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))} */}
        </div>

      </section>
    );
  }
}

export default SearchResults ;