import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from './Icon';

class Column extends React.Component {
  static propTypes = {
    
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

        <Creator
          text={settings.columnCreatorText}
          action={addCard}
        />
      </section>
    );
  }
}

export default Column;
