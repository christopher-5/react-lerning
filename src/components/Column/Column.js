import React from "react";
import styles from "./Column.scss";
import PropTypes from "prop-types";

class Column extends React.Component {
    static propTypes = {
        titleA: PropTypes.node,
        titleP: PropTypes.node,
        titleM: PropTypes.node
    }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.titleP}{this.props.titleA}{this.props.titleM}</h3>
      </section>
    );
  }
}

export default Column