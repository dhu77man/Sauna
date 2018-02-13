// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLinks.scss';

let links = [
    { title: 'Library', action: 'LibraryPage' },
    { title: 'Store', action: 'StorePage' }
];

type Props = {};

class HeaderLink extends Component<Props> {
    props: Props;

    render() {
        return (
            <div className={styles.HeaderLink}>
                {this.props.obj.title}
            </div>
        );
    }
  }
  

export default class HeaderLinks extends Component<Props> {
    props: Props;

    render() {

        let list = links.map((link, i) => <HeaderLink obj={link} key={i} />);

        return (
            <div className={styles.container}>
                {list}
            </div>
        );
    }
}
