// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Library.css';

type Props = {};

export default class Library extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Sauna</h2>
        </div>
      </div>
    );
  }
}
