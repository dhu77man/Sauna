// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Library.scss';

import GameListing from './GameListing';

type Props = {};


let recentlyPlayed = {
	"response": {
		"total_count": 8,
		"games": [
			{
				"appid": 269770,
				"name": "Secrets of Grindea",
				"playtime_2weeks": 477,
				"playtime_forever": 1129,
				"img_icon_url": "2680202bf4f831ca9f0a1e1edfc9915bd1669f0a",
				"img_logo_url": "3f0a4c7f4ecee7b13563a65008e35e3501408e43"
			},
			{
				"appid": 222880,
				"name": "Insurgency",
				"playtime_2weeks": 339,
				"playtime_forever": 1455,
				"img_icon_url": "b072fc4239951c1952f4877edde340419438b528",
				"img_logo_url": "b620a8286682299e2a1ff272b04fb09d1b4edd38"
			},
			{
				"appid": 428550,
				"name": "Momodora: Reverie Under the Moonlight",
				"playtime_2weeks": 151,
				"playtime_forever": 151,
				"img_icon_url": "17d2a60ead58d88259b7ff68c0bf698b0b5e4afc",
				"img_logo_url": "70bd99b8c3b8c7cb646327f202c8ea8356332d83"
			},
			{
				"appid": 477160,
				"name": "Human: Fall Flat",
				"playtime_2weeks": 56,
				"playtime_forever": 113,
				"img_icon_url": "fbd4c6d6ac04408b9ea582f60dc1593e45ce69ab",
				"img_logo_url": "45f1ec8149d34a6e72c9c498a401b649e281cade"
			},
			{
				"appid": 671510,
				"name": "Desolate",
				"playtime_2weeks": 51,
				"playtime_forever": 51,
				"img_icon_url": "b52a4a88f4dd3978b47f9f7fdb8531f5a341716c",
				"img_logo_url": "8b20f8a1a534e3888d15929b236d7faf6e3b78d1"
			},
			{
				"appid": 285900,
				"name": "Gang Beasts",
				"playtime_2weeks": 33,
				"playtime_forever": 656,
				"img_icon_url": "fe0f0440dabf5ff8d8326d2d6ff629e016fe3559",
				"img_logo_url": "75fa11f4955cef767e5aa257ebac150eb5fd5208"
			},
			{
				"appid": 386360,
				"name": "SMITE",
				"playtime_2weeks": 27,
				"playtime_forever": 11609,
				"img_icon_url": "7ed9de7bbfab9accb81e47b84943e7478baf2f3a",
				"img_logo_url": "db36e43d2de5bf8913e5022425577866b2e8fd11"
			},
			{
				"appid": 270450,
				"name": "Robot Roller-Derby Disco Dodgeball",
				"playtime_2weeks": 1,
				"playtime_forever": 214,
				"img_icon_url": "69897578c5bc80d5cf91636e68029a1017a2bc9b",
				"img_logo_url": "36767415e8730436f680d536fd4817fcf54d2ec8"
			},{
				"appid": 269770,
				"name": "Secrets of Grindea",
				"playtime_2weeks": 477,
				"playtime_forever": 1129,
				"img_icon_url": "2680202bf4f831ca9f0a1e1edfc9915bd1669f0a",
				"img_logo_url": "3f0a4c7f4ecee7b13563a65008e35e3501408e43"
			},
			{
				"appid": 222880,
				"name": "Insurgency",
				"playtime_2weeks": 339,
				"playtime_forever": 1455,
				"img_icon_url": "b072fc4239951c1952f4877edde340419438b528",
				"img_logo_url": "b620a8286682299e2a1ff272b04fb09d1b4edd38"
			},
			{
				"appid": 428550,
				"name": "Momodora: Reverie Under the Moonlight",
				"playtime_2weeks": 151,
				"playtime_forever": 151,
				"img_icon_url": "17d2a60ead58d88259b7ff68c0bf698b0b5e4afc",
				"img_logo_url": "70bd99b8c3b8c7cb646327f202c8ea8356332d83"
			},
			{
				"appid": 477160,
				"name": "Human: Fall Flat",
				"playtime_2weeks": 56,
				"playtime_forever": 113,
				"img_icon_url": "fbd4c6d6ac04408b9ea582f60dc1593e45ce69ab",
				"img_logo_url": "45f1ec8149d34a6e72c9c498a401b649e281cade"
			},
			{
				"appid": 671510,
				"name": "Desolate",
				"playtime_2weeks": 51,
				"playtime_forever": 51,
				"img_icon_url": "b52a4a88f4dd3978b47f9f7fdb8531f5a341716c",
				"img_logo_url": "8b20f8a1a534e3888d15929b236d7faf6e3b78d1"
			},
			{
				"appid": 285900,
				"name": "Gang Beasts",
				"playtime_2weeks": 33,
				"playtime_forever": 656,
				"img_icon_url": "fe0f0440dabf5ff8d8326d2d6ff629e016fe3559",
				"img_logo_url": "75fa11f4955cef767e5aa257ebac150eb5fd5208"
			},
			{
				"appid": 386360,
				"name": "SMITE",
				"playtime_2weeks": 27,
				"playtime_forever": 11609,
				"img_icon_url": "7ed9de7bbfab9accb81e47b84943e7478baf2f3a",
				"img_logo_url": "db36e43d2de5bf8913e5022425577866b2e8fd11"
			},
			{
				"appid": 270450,
				"name": "Robot Roller-Derby Disco Dodgeball",
				"playtime_2weeks": 1,
				"playtime_forever": 214,
				"img_icon_url": "69897578c5bc80d5cf91636e68029a1017a2bc9b",
				"img_logo_url": "36767415e8730436f680d536fd4817fcf54d2ec8"
			},{
				"appid": 269770,
				"name": "Secrets of Grindea",
				"playtime_2weeks": 477,
				"playtime_forever": 1129,
				"img_icon_url": "2680202bf4f831ca9f0a1e1edfc9915bd1669f0a",
				"img_logo_url": "3f0a4c7f4ecee7b13563a65008e35e3501408e43"
			},
			{
				"appid": 222880,
				"name": "Insurgency",
				"playtime_2weeks": 339,
				"playtime_forever": 1455,
				"img_icon_url": "b072fc4239951c1952f4877edde340419438b528",
				"img_logo_url": "b620a8286682299e2a1ff272b04fb09d1b4edd38"
			},
			{
				"appid": 428550,
				"name": "Momodora: Reverie Under the Moonlight",
				"playtime_2weeks": 151,
				"playtime_forever": 151,
				"img_icon_url": "17d2a60ead58d88259b7ff68c0bf698b0b5e4afc",
				"img_logo_url": "70bd99b8c3b8c7cb646327f202c8ea8356332d83"
			},
			{
				"appid": 477160,
				"name": "Human: Fall Flat",
				"playtime_2weeks": 56,
				"playtime_forever": 113,
				"img_icon_url": "fbd4c6d6ac04408b9ea582f60dc1593e45ce69ab",
				"img_logo_url": "45f1ec8149d34a6e72c9c498a401b649e281cade"
			},
			{
				"appid": 671510,
				"name": "Desolate",
				"playtime_2weeks": 51,
				"playtime_forever": 51,
				"img_icon_url": "b52a4a88f4dd3978b47f9f7fdb8531f5a341716c",
				"img_logo_url": "8b20f8a1a534e3888d15929b236d7faf6e3b78d1"
			},
			{
				"appid": 285900,
				"name": "Gang Beasts",
				"playtime_2weeks": 33,
				"playtime_forever": 656,
				"img_icon_url": "fe0f0440dabf5ff8d8326d2d6ff629e016fe3559",
				"img_logo_url": "75fa11f4955cef767e5aa257ebac150eb5fd5208"
			},
			{
				"appid": 386360,
				"name": "SMITE",
				"playtime_2weeks": 27,
				"playtime_forever": 11609,
				"img_icon_url": "7ed9de7bbfab9accb81e47b84943e7478baf2f3a",
				"img_logo_url": "db36e43d2de5bf8913e5022425577866b2e8fd11"
			},
			{
				"appid": 270450,
				"name": "Robot Roller-Derby Disco Dodgeball",
				"playtime_2weeks": 1,
				"playtime_forever": 214,
				"img_icon_url": "69897578c5bc80d5cf91636e68029a1017a2bc9b",
				"img_logo_url": "36767415e8730436f680d536fd4817fcf54d2ec8"
			}
		]
		
	}
};

export default class Library extends Component<Props> {
	props: Props;

	constructor(){
		super();

		this.state = {recentlyPlayed: {}};
	}

	componentDidMount(){
		this.setState({recentlyPlayed: recentlyPlayed})
	}

	render(){

		let games = this.state.recentlyPlayed.response && this.state.recentlyPlayed.response.games.map((game, i) => <GameListing game={game} key={i} />);

		return (
			<div>
				<div className="panel">
					<div className={styles.container} data-tid="container">
						<h2>Sauna</h2>
						<div className={styles.library}>
							{games}
							<div style={{clear:'both'}}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
