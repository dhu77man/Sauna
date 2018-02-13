// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './GameListing.scss';

type Props = {};


export default class GameListing extends Component<Props> {
    props: Props;

    render() {
        let game = this.props.game;
        //http://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg
        //http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg

        return (
            <div className={styles.game}>
                <img src={`http://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`} className={styles.image} />
                <h3>{game.name}</h3>
            </div>
        );
    }
}
