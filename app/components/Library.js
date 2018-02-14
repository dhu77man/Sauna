// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Library.scss';

import GameListing from './GameListing';

type Props = {};


let recentlyPlayed = {
	"response": {
		"game_count": 327,
		"games": [
			{
				"appid": 4000,
				"name": "Garry's Mod",
				"playtime_forever": 15257,
				"img_icon_url": "4a6f25cfa2426445d0d9d6e233408de4d371ce8b",
				"img_logo_url": "93c9364c3942223ab66195182fe1982af8a16584",
				"has_community_visible_stats": true
			},
			{
				"appid": 2320,
				"name": "Quake II",
				"playtime_forever": 303,
				"img_icon_url": "f4f8eda991901eae74562c30ba6e68715e3d6dcf",
				"img_logo_url": "a53f37bf4e03ffd521d66d1bde71f63bdcf5fbb7"
			},
			{
				"appid": 20,
				"name": "Team Fortress Classic",
				"playtime_forever": 0,
				"img_icon_url": "38ea7ebe3c1abbbbf4eabdbef174c41a972102b9",
				"img_logo_url": "515bc393c861d91b9165f0697040c015f50bcb5e",
				"has_community_visible_stats": true
			},
			{
				"appid": 50,
				"name": "Half-Life: Opposing Force",
				"playtime_forever": 5,
				"img_icon_url": "04e81206c10e12416908c72c5f22aad411b3aeef",
				"img_logo_url": "bb696ddfd8f8ef0892d5f2154d8617528d3cc2ec"
			},
			{
				"appid": 70,
				"name": "Half-Life",
				"playtime_forever": 20,
				"img_icon_url": "95be6d131fc61f145797317ca437c9765f24b41c",
				"img_logo_url": "6bd76ff700a8c7a5460fbae3cf60cb930279897d",
				"has_community_visible_stats": true
			},
			{
				"appid": 130,
				"name": "Half-Life: Blue Shift",
				"playtime_forever": 0,
				"img_icon_url": "b06fdee488b3220362c11704be4edad82abeed08",
				"img_logo_url": "927d38e83e3e4ca218a0fc7b32515eeb99aa8ff7"
			},
			{
				"appid": 220,
				"name": "Half-Life 2",
				"playtime_forever": 1437,
				"img_icon_url": "fcfb366051782b8ebf2aa297f3b746395858cb62",
				"img_logo_url": "e4ad9cf1b7dc8475c1118625daf9abd4bdcbcad0",
				"has_community_visible_stats": true
			},
			{
				"appid": 280,
				"name": "Half-Life: Source",
				"playtime_forever": 0,
				"img_icon_url": "b4f572a6cc5a6a84ae84634c31414b9123d2f26b",
				"img_logo_url": "a612dd944b768e55389140298dcfda2165db8ced",
				"has_community_visible_stats": true
			},
			{
				"appid": 320,
				"name": "Half-Life 2: Deathmatch",
				"playtime_forever": 3679,
				"img_icon_url": "795e85364189511f4990861b578084deef086cb1",
				"img_logo_url": "6dd9f66771300f2252d411e50739a1ceae9e5b30",
				"has_community_visible_stats": true
			},
			{
				"appid": 340,
				"name": "Half-Life 2: Lost Coast",
				"playtime_forever": 0,
				"img_icon_url": "795e85364189511f4990861b578084deef086cb1",
				"img_logo_url": "867cce5c4f37d5ed4aeffb57c60e220ddffe4134"
			},
			{
				"appid": 360,
				"name": "Half-Life Deathmatch: Source",
				"playtime_forever": 0,
				"img_icon_url": "40b8a62efff5a9ab356e5c56f5c8b0532c8e1aa3",
				"img_logo_url": "9a5b7119d4e8977fffcd370d3c24036be7cee904"
			},
			{
				"appid": 380,
				"name": "Half-Life 2: Episode One",
				"playtime_forever": 0,
				"img_icon_url": "795e85364189511f4990861b578084deef086cb1",
				"img_logo_url": "b5a666a961d8b39896887abbed3b78c2b837c238",
				"has_community_visible_stats": true
			},
			{
				"appid": 420,
				"name": "Half-Life 2: Episode Two",
				"playtime_forever": 0,
				"img_icon_url": "795e85364189511f4990861b578084deef086cb1",
				"img_logo_url": "553e6a2e7a469dcbaada729baa1f5fd7764668df",
				"has_community_visible_stats": true
			},
			{
				"appid": 17470,
				"name": "Dead Space",
				"playtime_forever": 0,
				"img_icon_url": "45e682594687a6c92037631225340d26c783362f",
				"img_logo_url": "01400b8d7847c309e5d47d7ceb3f885f47247501"
			},
			{
				"appid": 34900,
				"name": "Bad Rats",
				"playtime_forever": 0,
				"img_icon_url": "8b159808cdec5d1532f3af8c22c16d72556e61b5",
				"img_logo_url": "95229dc8b1ad50589429b930c9a09150e24c558d",
				"has_community_visible_stats": true
			},
			{
				"appid": 10680,
				"name": "Aliens vs. Predator",
				"playtime_forever": 257,
				"img_icon_url": "673dbdae48b77aaff38cd48a87607548e21220de",
				"img_logo_url": "1d5e92c757e200c8745f010c6fee39d470ff110c",
				"has_community_visible_stats": true
			},
			{
				"appid": 8190,
				"name": "Just Cause 2",
				"playtime_forever": 1588,
				"img_icon_url": "73582e392a2b9413fe93b011665a5b9cf26ff175",
				"img_logo_url": "26c2c027f835e968d78b212b4cc6438f692b027a",
				"has_community_visible_stats": true
			},
			{
				"appid": 33220,
				"name": "Tom Clancy's Splinter Cell: Conviction",
				"playtime_forever": 1857,
				"img_icon_url": "788417bcc17f0751c2928b372309e6178401adc5",
				"img_logo_url": "6939f9914923cad9934603432b43fe7d46d47dd7"
			},
			{
				"appid": 400,
				"name": "Portal",
				"playtime_forever": 1990,
				"img_icon_url": "cfa928ab4119dd137e50d728e8fe703e4e970aff",
				"img_logo_url": "4184d4c0d915bd3a45210667f7b25361352acd8f",
				"has_community_visible_stats": true
			},
			{
				"appid": 47790,
				"name": "Medal of Honor(TM) Single Player",
				"playtime_forever": 315,
				"img_icon_url": "65a39794d6d39bf45e3273eacd2ab0cd2ad0fc80",
				"img_logo_url": "8a925ea4d40df32587ddae98d4e7fc5a6518b0f7"
			},
			{
				"appid": 47830,
				"name": "Medal of Honor(TM) Multiplayer",
				"playtime_forever": 48,
				"img_icon_url": "65a39794d6d39bf45e3273eacd2ab0cd2ad0fc80",
				"img_logo_url": "8a925ea4d40df32587ddae98d4e7fc5a6518b0f7"
			},
			{
				"appid": 42500,
				"name": "DogFighter",
				"playtime_forever": 280,
				"img_icon_url": "bde434bc5bcea999ec31e2eba215294a473f011d",
				"img_logo_url": "bd00d6ecdb17b5b69a787d11a9357a5564447141",
				"has_community_visible_stats": true
			},
			{
				"appid": 17410,
				"name": "Mirror's Edge",
				"playtime_forever": 0,
				"img_icon_url": "cfea4731163004b2e5117c3b42a798c48c483d8f",
				"img_logo_url": "8c5a900802fabf20a7922c6a69cec9320c940514"
			},
			{
				"appid": 8930,
				"name": "Sid Meier's Civilization V",
				"playtime_forever": 5693,
				"img_icon_url": "fbe80c4743e226f0bf65559c91b12953d4446808",
				"img_logo_url": "2203f62bd1bdc75c286c13534e50f22e3bd5bb58",
				"has_community_visible_stats": true
			},
			{
				"appid": 47780,
				"name": "Dead Space 2",
				"playtime_forever": 122,
				"img_icon_url": "6393351676edc4fdc65937a599780818fd2f18b7",
				"img_logo_url": "38cb9890ddd639a066bf480e3f098e1b92af2376"
			},
			{
				"appid": 21100,
				"name": "F.E.A.R. 3",
				"playtime_forever": 0,
				"img_icon_url": "01b73115a3ff7315d14f0bcf7beff01ef76162b4",
				"img_logo_url": "d2fcf83ec76e845ed19f4ff8324304e2981af391",
				"has_community_visible_stats": true
			},
			{
				"appid": 620,
				"name": "Portal 2",
				"playtime_forever": 2227,
				"img_icon_url": "2e478fc6874d06ae5baf0d147f6f21203291aa02",
				"img_logo_url": "d2a1119ddc202fab81d9b87048f495cbd6377502",
				"has_community_visible_stats": true
			},
			{
				"appid": 70000,
				"name": "Dino D-Day",
				"playtime_forever": 392,
				"img_icon_url": "958cda55e4c95d79c651b567f3083204d9842911",
				"img_logo_url": "2c6bf7cf502511afe182edcc2b2d62d5a8eb4796",
				"has_community_visible_stats": true
			},
			{
				"appid": 91600,
				"name": "Sanctum",
				"playtime_forever": 17,
				"img_icon_url": "fb131c31ed4dc33421dac1f805aaef337b03567c",
				"img_logo_url": "d63198590c7bab5a332327a54f8ed0a00ac4b0d3",
				"has_community_visible_stats": true
			},
			{
				"appid": 97100,
				"name": "Section 8: Prejudice",
				"playtime_forever": 1457,
				"img_icon_url": "61db6e021cc73397b2ec893b60d8e2e980e897da",
				"img_logo_url": "5265453b1f28ac234038bcdeebbf8a08150b6a7f"
			},
			{
				"appid": 92000,
				"name": "Hydrophobia: Prophecy",
				"playtime_forever": 12,
				"img_icon_url": "28a3cf9181b37f1005421e7c478e98b7f16c5cdc",
				"img_logo_url": "4dd1b0dc99cbc1b0d9d0460f9b2ace5e6d68e47a",
				"has_community_visible_stats": true
			},
			{
				"appid": 105600,
				"name": "Terraria",
				"playtime_forever": 1805,
				"img_icon_url": "858961e95fbf869f136e1770d586e0caefd4cfac",
				"img_logo_url": "783399da7d865b7b5b1560891b1e9463345e8fa9",
				"has_community_visible_stats": true
			},
			{
				"appid": 21090,
				"name": "F.E.A.R.",
				"playtime_forever": 0,
				"img_icon_url": "71f118282be5aaa34eb82506593130ecfcc6a90b",
				"img_logo_url": "df122e0ee9eb2a5371910ffda0f8a3382e09232e"
			},
			{
				"appid": 21110,
				"name": "F.E.A.R.: Extraction Point",
				"playtime_forever": 0,
				"img_icon_url": "153d4f89ef0bd59a0039c396ff963a31d4d5e71b",
				"img_logo_url": "df122e0ee9eb2a5371910ffda0f8a3382e09232e"
			},
			{
				"appid": 21120,
				"name": "F.E.A.R.: Perseus Mandate",
				"playtime_forever": 0,
				"img_icon_url": "7b1d0271f2735ca66e1cb681eb4da1a7c985d53f",
				"img_logo_url": "df122e0ee9eb2a5371910ffda0f8a3382e09232e"
			},
			{
				"appid": 16450,
				"name": "F.E.A.R. 2: Project Origin",
				"playtime_forever": 0,
				"img_icon_url": "6611d8b01c7a2cc3538c478c044d1e09f3140eaa",
				"img_logo_url": "41734347c3f05fe7dd797570130f5069c08f9d1b"
			},
			{
				"appid": 32800,
				"name": "The Lord of the Rings: War in the North",
				"playtime_forever": 1300,
				"img_icon_url": "56dcf3fe99a90c25daae1cbe84319bb8af3c6ac5",
				"img_logo_url": "b90d899806ebaff87ed7d2cdc4d9e0a3f11b73b0",
				"has_community_visible_stats": true
			},
			{
				"appid": 107100,
				"name": "Bastion",
				"playtime_forever": 62,
				"img_icon_url": "8377b4460f19465c261673f76f2656bdb3288273",
				"img_logo_url": "d113d66ef88069d7d35a74cfaf2e2ee917f61133",
				"has_community_visible_stats": true
			},
			{
				"appid": 28050,
				"name": "Deus Ex: Human Revolution",
				"playtime_forever": 3,
				"img_icon_url": "6c7ccd62c124ae63820e06ed9b24d4559c5b0b1f",
				"img_logo_url": "93705ac83aa363ce6ead3f6aad7fa4292d3cd80f",
				"has_community_visible_stats": true
			},
			{
				"appid": 200110,
				"name": "Nosgoth",
				"playtime_forever": 51,
				"img_icon_url": "5059f6d2b9c87f10a631fcdcbed1020f7aae0ef9",
				"img_logo_url": "9894c6c94dca1b2c6f1836a3c780d8504efdd4ef",
				"has_community_visible_stats": true
			},
			{
				"appid": 72850,
				"name": "The Elder Scrolls V: Skyrim",
				"playtime_forever": 5253,
				"img_icon_url": "b9aca8a189abd8d6aaf09047dbb0f57582683e1c",
				"img_logo_url": "c5af3cde13610fca25cd17634a96d72487d21e74",
				"has_community_visible_stats": true
			},
			{
				"appid": 41070,
				"name": "Serious Sam 3: BFE",
				"playtime_forever": 26,
				"img_icon_url": "2e7a17d4b345ffb13ef3d9e39257c2659fe4a86b",
				"img_logo_url": "cc3a3c30187b5fbbd0a8861ad08b4f7d779ba239",
				"has_community_visible_stats": true
			},
			{
				"appid": 564310,
				"name": "Serious Sam Fusion 2017 (beta)",
				"playtime_forever": 0,
				"img_icon_url": "d0bd5715f05deeb32f030a5d5e06073870b7daf8",
				"img_logo_url": "b4babc53b42275d5ca120909c04ae77f5724b29b",
				"has_community_visible_stats": true
			},
			{
				"appid": 2400,
				"name": "The Ship",
				"playtime_forever": 27,
				"img_icon_url": "1d17a5d3d7da68eb317d848727ea235790e1d8a4",
				"img_logo_url": "2b19a255140350735cf8461f6e893452e1eae95e",
				"has_community_visible_stats": true
			},
			{
				"appid": 2420,
				"name": "The Ship Single Player",
				"playtime_forever": 0,
				"img_icon_url": "683c3b48b4a8c586d0f143765502383cc8f07ac6",
				"img_logo_url": "38d863d8a2a44555693dbcc499e3557531a1bb19",
				"has_community_visible_stats": true
			},
			{
				"appid": 2430,
				"name": "The Ship Tutorial",
				"playtime_forever": 0,
				"img_icon_url": "683c3b48b4a8c586d0f143765502383cc8f07ac6",
				"img_logo_url": "38d863d8a2a44555693dbcc499e3557531a1bb19"
			},
			{
				"appid": 205350,
				"name": "Mortal Kombat Kollection",
				"playtime_forever": 0,
				"img_icon_url": "048e463386c8f0049d6e08bbf8f5ebb5d232394f",
				"img_logo_url": "44281a64a93a583fdd2435036ac794e7dcc7beb8",
				"has_community_visible_stats": true
			},
			{
				"appid": 200260,
				"name": "Batman: Arkham City GOTY",
				"playtime_forever": 5,
				"img_icon_url": "746ecf3ce44b2525eb7ad643e76a3b60913d2662",
				"img_logo_url": "9b229e12fd5ce27bd101d5862c19b1a6e3d01239",
				"has_community_visible_stats": true
			},
			{
				"appid": 204100,
				"name": "Max Payne 3",
				"playtime_forever": 22,
				"img_icon_url": "96af86331719b56cefc55298b4fcb99c99f1cfee",
				"img_logo_url": "135cf60686c2bf570999b96d5c29eb31e962293a",
				"has_community_visible_stats": true
			},
			{
				"appid": 108800,
				"name": "Crysis 2 Maximum Edition",
				"playtime_forever": 0,
				"img_icon_url": "5f401ab4b7d16ca8f778ff6b85dd25e0d3d49460",
				"img_logo_url": "bee338e11932e97e995b6e2d84d0772f7b22f2a9"
			},
			{
				"appid": 35140,
				"name": "Batman: Arkham Asylum GOTY Edition",
				"playtime_forever": 69,
				"img_icon_url": "e52f91ecb0d3f20263e96fe188de1bcc8c91643e",
				"img_logo_url": "172e0928b845c18491f1a8fee0dafe7a146ac129",
				"has_community_visible_stats": true
			},
			{
				"appid": 202170,
				"name": "Sleeping Dogs™",
				"playtime_forever": 2927,
				"img_icon_url": "3d70bfb50bc3a162685e6775c4da2d336d1ba1ea",
				"img_logo_url": "5be5f629e44cc13b7a845deacf81c93f92678e55",
				"has_community_visible_stats": true
			},
			{
				"appid": 209080,
				"name": "Guns of Icarus Online",
				"playtime_forever": 96,
				"img_icon_url": "968e8c0b7a55f0229392278123dfd486140c9421",
				"img_logo_url": "925b7c2a6b698144622bed4bd2d0086114df2fa9",
				"has_community_visible_stats": true
			},
			{
				"appid": 730,
				"name": "Counter-Strike: Global Offensive",
				"playtime_forever": 1675,
				"img_icon_url": "69f7ebe2735c366c65c0b33dae00e12dc40edbe4",
				"img_logo_url": "d0595ff02f5c79fd19b06f4d6165c3fda2372820",
				"has_community_visible_stats": true
			},
			{
				"appid": 204300,
				"name": "Awesomenauts",
				"playtime_forever": 287,
				"img_icon_url": "4996933171d0804bd0ceb7b9a0e224b3139d18ba",
				"img_logo_url": "2d92dc3a4b10e3e66340ebe53266b901e25ee52f",
				"has_community_visible_stats": true
			},
			{
				"appid": 212680,
				"name": "FTL: Faster Than Light",
				"playtime_forever": 36,
				"img_icon_url": "e8770ddb95fde0804694b116dfe3479f5a65900d",
				"img_logo_url": "975193db5ca8cc2a4c969cea8f80d93157264ec1"
			},
			{
				"appid": 200710,
				"name": "Torchlight II",
				"playtime_forever": 370,
				"img_icon_url": "40776762bb63c4eded37d1a2b4431a90aa57ea84",
				"img_logo_url": "fd37abb86628ff54ed304f75c2fb7cf75a4f6902",
				"has_community_visible_stats": true
			},
			{
				"appid": 219740,
				"name": "Don't Starve",
				"playtime_forever": 118,
				"img_icon_url": "03fe647df40dccc4d19bf42a0185cd3e6b9f2953",
				"img_logo_url": "46cbbc2fcb14eb0bbbbaebbdf0b1e0eaf6f4c646"
			},
			{
				"appid": 322330,
				"name": "Don't Starve Together",
				"playtime_forever": 508,
				"img_icon_url": "a80aa6cff8eebc1cbc18c367d9ab063e1553b0ee",
				"img_logo_url": "fab2e3b2ec6d14c6fc3ccd1671e85f85d0bbd91e",
				"has_community_visible_stats": true
			},
			{
				"appid": 219640,
				"name": "Chivalry: Medieval Warfare",
				"playtime_forever": 1118,
				"img_icon_url": "d4628be29b7e97d93a3404870dfe79642b90b907",
				"img_logo_url": "dd3488ae69593cedf5e73b818ae98e6737aa956c",
				"has_community_visible_stats": true
			},
			{
				"appid": 205790,
				"name": "Dota 2 Test",
				"playtime_forever": 0,
				"img_icon_url": "",
				"img_logo_url": ""
			},
			{
				"appid": 218680,
				"name": "Scribblenauts Unlimited",
				"playtime_forever": 25,
				"img_icon_url": "e933a9993b7d0b905dbb37636a97339a2c277e0f",
				"img_logo_url": "c3f8420cd87dd772df8a35013e3538e964ecc2b8",
				"has_community_visible_stats": true
			},
			{
				"appid": 4920,
				"name": "Natural Selection 2",
				"playtime_forever": 127,
				"img_icon_url": "6c2af07776e2042ee63bc3b6aeda129b88939829",
				"img_logo_url": "ab7b1142e17865e6d3472d3fd4b345620ec5f36f",
				"has_community_visible_stats": true
			},
			{
				"appid": 215470,
				"name": "Primal Carnage",
				"playtime_forever": 333,
				"img_icon_url": "1bffc779f16da98c97b606bf15021342531cae31",
				"img_logo_url": "a95d1db1d814ee21bd3fc5416228ad5a5d458eb1",
				"has_community_visible_stats": true
			},
			{
				"appid": 213610,
				"name": "Sonic Adventure™ 2 ",
				"playtime_forever": 59,
				"img_icon_url": "0ff2b133493b0bf7f1c16a38a83e7053f0b90f2d",
				"img_logo_url": "b59ee5bd744212a79db6fd8f71aec6729671da2b",
				"has_community_visible_stats": true
			},
			{
				"appid": 201790,
				"name": "Orcs Must Die! 2",
				"playtime_forever": 0,
				"img_icon_url": "fabd8658e8e76f7c99c56f26b69d29882756f9b4",
				"img_logo_url": "c345d9b205f349f0e7f4e6cdf8af4d0b7d242505",
				"has_community_visible_stats": true
			},
			{
				"appid": 227300,
				"name": "Euro Truck Simulator 2",
				"playtime_forever": 419,
				"img_icon_url": "adc18a4fc9adc0330144b76d61cbda68bb2394a0",
				"img_logo_url": "719b87f11209f9f20aeb237b3c6a42992bcf7c57",
				"has_community_visible_stats": true
			},
			{
				"appid": 17080,
				"name": "Tribes: Ascend",
				"playtime_forever": 17,
				"img_icon_url": "ff9812c1b957546e731c1765ed6ec463aca8b835",
				"img_logo_url": "9e61ac99e2e5a39a4cb4b522fcec9f74f2ab97ba"
			},
			{
				"appid": 212160,
				"name": "Vindictus",
				"playtime_forever": 0,
				"img_icon_url": "05b1cbe0a708cc17a1c94726fa247a4f0740b79a",
				"img_logo_url": "bd6a1431bf996b30abd462777c6710329cff770c",
				"has_community_visible_stats": true
			},
			{
				"appid": 212500,
				"name": "The Lord of the Rings Online™",
				"playtime_forever": 3454,
				"img_icon_url": "a8f4b23f272e552e88c42a2ece603c0ed431fa7e",
				"img_logo_url": "bbe89aa0f4cd84242c8d748519bb49b1d8ef6113",
				"has_community_visible_stats": true
			},
			{
				"appid": 218230,
				"name": "PlanetSide 2",
				"playtime_forever": 5,
				"img_icon_url": "f09d788b57eccd48ad9a6d1ec0dbf0707db39612",
				"img_logo_url": "8bb9796bf871a1d620b28db4dfb2abef2138542d",
				"has_community_visible_stats": true
			},
			{
				"appid": 230410,
				"name": "Warframe",
				"playtime_forever": 6281,
				"img_icon_url": "bcf887d7b0707e5418e1680de92e85ca899516ac",
				"img_logo_url": "3785f3576cdef5cf20a8b815bdf867154ccbe7d5",
				"has_community_visible_stats": true
			},
			{
				"appid": 236390,
				"name": "War Thunder",
				"playtime_forever": 118,
				"img_icon_url": "88259dcb7014dcdb109d9ece0cfc70c100bc2f9c",
				"img_logo_url": "219b91aa76b2c6325b763af5e4ad411fab535bf9",
				"has_community_visible_stats": true
			},
			{
				"appid": 238960,
				"name": "Path of Exile",
				"playtime_forever": 469,
				"img_icon_url": "1110764aac57ac28d7ffd8c43071c75d5482a9c9",
				"img_logo_url": "a71bd4fa0b3f84292c5e4d026e0f2acb6bc6c268",
				"has_community_visible_stats": true
			},
			{
				"appid": 240320,
				"name": "Panzar",
				"playtime_forever": 18,
				"img_icon_url": "970770ec92fa2a1adfc0dead728010ecb40ad2db",
				"img_logo_url": "ddf712ef25df34fe2d85d77ea81fd232b1c20dd4"
			},
			{
				"appid": 243870,
				"name": "Tom Clancy's Ghost Recon Phantoms - NA",
				"playtime_forever": 0,
				"img_icon_url": "7ca714724bfc22fc9601d8b65f65c47f5d4103f3",
				"img_logo_url": "e6d16e51104bc385e99ff6b14f5fb016c813590d"
			},
			{
				"appid": 209870,
				"name": "Blacklight: Retribution",
				"playtime_forever": 0,
				"img_icon_url": "de0e0786f3473b277fbbf7db4f3fdc5ea07b942c",
				"img_logo_url": "6c9cd35124a99938537fa7b99508ed8ae5e26d80",
				"has_community_visible_stats": true
			},
			{
				"appid": 214420,
				"name": "Gear Up",
				"playtime_forever": 136,
				"img_icon_url": "65d89df83c6909a93a862c1abf9a0e53ce768be5",
				"img_logo_url": "65861018dfcbf225bf5d3e68420c5787b6954c04",
				"has_community_visible_stats": true
			},
			{
				"appid": 265630,
				"name": "Fistful of Frags",
				"playtime_forever": 431,
				"img_icon_url": "e70c19e10125ea3f221666327af2b90f3fcecad9",
				"img_logo_url": "45ba88467785ebd77384e4b386abac1bfdad785b",
				"has_community_visible_stats": true
			},
			{
				"appid": 216150,
				"name": "MapleStory",
				"playtime_forever": 5800,
				"img_icon_url": "dc37fc5c7359db9fcbe4a940cd05e8450953785e",
				"img_logo_url": "bbe0f6fbbb4749121be6e50533ed05708bdeb3dd",
				"has_community_visible_stats": true
			},
			{
				"appid": 223750,
				"name": "DCS World",
				"playtime_forever": 166,
				"img_icon_url": "25e21835af7a7ba1b5f2fb995185a97f320999b5",
				"img_logo_url": "27fff67df94901f4b58ded075f9a8ad20f74abeb"
			},
			{
				"appid": 253710,
				"name": "theHunter Classic",
				"playtime_forever": 156,
				"img_icon_url": "4a91dc770675e559038a4f46e0daa4f8fa42ee30",
				"img_logo_url": "fbfd9daf55e8489e42500bd3e08ca8f4c5f028db",
				"has_community_visible_stats": true
			},
			{
				"appid": 225420,
				"name": "Cities in Motion 2",
				"playtime_forever": 0,
				"img_icon_url": "8153d0c11e07d5a8a55ae0a92d038e11d1c0789c",
				"img_logo_url": "199b0db2bcc736d44bc1a605377cce9687b35c0e",
				"has_community_visible_stats": true
			},
			{
				"appid": 227680,
				"name": "StarForge",
				"playtime_forever": 260,
				"img_icon_url": "911658bd1dc011bbc5a74cf7358befb093d64115",
				"img_logo_url": "85aa1fa99b475348c12b086d3b86d06d193cb0a5",
				"has_community_visible_stats": true
			},
			{
				"appid": 210770,
				"name": "Sanctum 2",
				"playtime_forever": 71,
				"img_icon_url": "4cdfa1d19be460374a111b718ce3a204f21ea1dc",
				"img_logo_url": "333a8c65480bb85148bb3a185843a8520ae5d90f",
				"has_community_visible_stats": true
			},
			{
				"appid": 234650,
				"name": "Shadowrun Returns",
				"playtime_forever": 0,
				"img_icon_url": "13c8e62b9b079fba385a2d959ed4e8ce2c378c8c",
				"img_logo_url": "d2ada23f204adf831dc89be7c6edbbbc38c99ef6",
				"has_community_visible_stats": true
			},
			{
				"appid": 241720,
				"name": "Guncraft",
				"playtime_forever": 344,
				"img_icon_url": "96868e40fb420ba4abc34e7c000a0a93b4c8515b",
				"img_logo_url": "24c3ee52c215700b43220d7900b051b33e81d693",
				"has_community_visible_stats": true
			},
			{
				"appid": 35720,
				"name": "Trine 2",
				"playtime_forever": 343,
				"img_icon_url": "061ecbbd7c70ae1c052377bad136c7759cbb708d",
				"img_logo_url": "7d7c3b93bd85ad1db2a07f6cca01a767069c6407",
				"has_community_visible_stats": true
			},
			{
				"appid": 242760,
				"name": "The Forest",
				"playtime_forever": 1488,
				"img_icon_url": "3a6847f6ac5879e48531db52261771d5e22904ac",
				"img_logo_url": "3a75d451fd17a15d1ff0ba2ac8cb4564cc36233c",
				"has_community_visible_stats": true
			},
			{
				"appid": 207140,
				"name": "SpeedRunners",
				"playtime_forever": 211,
				"img_icon_url": "65cfa21149c415430fe36d83c23e079e6db476cc",
				"img_logo_url": "9cea1681e07aa5578508b27ca9e6ceca42dc792e",
				"has_community_visible_stats": true
			},
			{
				"appid": 368730,
				"name": "No Time To Explain Remastered",
				"playtime_forever": 0,
				"img_icon_url": "4cea102f506d192056197b347544bfe77489e847",
				"img_logo_url": "ee4a606dba7848e97d5bf4fe1e4b0ff8e67a889f",
				"has_community_visible_stats": true
			},
			{
				"appid": 225080,
				"name": "Brothers - A Tale of Two Sons",
				"playtime_forever": 393,
				"img_icon_url": "9d6e8bcae597582734b382d8da93e5fa7b1c640b",
				"img_logo_url": "12f5c3aaa2b1d69d0786e1d09e0b77e2da6f8980",
				"has_community_visible_stats": true
			},
			{
				"appid": 239350,
				"name": "Spelunky",
				"playtime_forever": 30,
				"img_icon_url": "f11cc6800f5139e79643331be28c348cd7ccbba2",
				"img_logo_url": "1a3ce75a075da21471d4d376681b6a8dd2c4a8bd",
				"has_community_visible_stats": true
			},
			{
				"appid": 218620,
				"name": "PAYDAY 2",
				"playtime_forever": 859,
				"img_icon_url": "a6abc0d0c1e79c0b5b0f5c8ab81ce9076a542414",
				"img_logo_url": "4467a70648f49a6b309b41b81b4531f9a20ed99d",
				"has_community_visible_stats": true
			},
			{
				"appid": 233840,
				"name": "Worms Clan Wars",
				"playtime_forever": 571,
				"img_icon_url": "aa3156dab00553132dea849e9cc836e645083f6f",
				"img_logo_url": "fac25fef811857959ec28393592366b31f971966",
				"has_community_visible_stats": true
			},
			{
				"appid": 250110,
				"name": "Assault Android Cactus",
				"playtime_forever": 0,
				"img_icon_url": "d3ec4e1d00be6cbb427338092d9be74c3bfb2f29",
				"img_logo_url": "45fd252e10822425c5531865f60f923f4c4a30b2",
				"has_community_visible_stats": true
			},
			{
				"appid": 111900,
				"name": "Guardians of Middle-earth",
				"playtime_forever": 0,
				"img_icon_url": "5ab636ac90b8476892d6e0ae377624d5b934f600",
				"img_logo_url": "08a7116bebd1bf44bb8e86495358dca14224d223",
				"has_community_visible_stats": true
			},
			{
				"appid": 251130,
				"name": "Chroma Squad",
				"playtime_forever": 0,
				"img_icon_url": "334bdb60f1976deb7a8f3b3b054086efc35db695",
				"img_logo_url": "a6da7d47dbec8da73cd445e36580dbd0af419e2b",
				"has_community_visible_stats": true
			},
			{
				"appid": 251170,
				"name": "Damned",
				"playtime_forever": 361,
				"img_icon_url": "4ba50913acf7dc5d6d51cba73b1eb3e269da80cc",
				"img_logo_url": "b0f1b6ce8e363a5c1b0396ff73b7497f5228dfdf",
				"has_community_visible_stats": true
			},
			{
				"appid": 252490,
				"name": "Rust",
				"playtime_forever": 1504,
				"img_icon_url": "820be4782639f9c4b64fa3ca7e6c26a95ae4fd1c",
				"img_logo_url": "d83228eaef6c95c244976b6dc6ab357e6c7f0911",
				"has_community_visible_stats": true
			},
			{
				"appid": 700580,
				"name": "Rust - Staging Branch",
				"playtime_forever": 0,
				"img_icon_url": "820be4782639f9c4b64fa3ca7e6c26a95ae4fd1c",
				"img_logo_url": "d83228eaef6c95c244976b6dc6ab357e6c7f0911",
				"has_community_visible_stats": true
			},
			{
				"appid": 249990,
				"name": "FORCED",
				"playtime_forever": 79,
				"img_icon_url": "d9ab3c38b347a2510f6ab540921248da14349ca4",
				"img_logo_url": "befa0212beead77417a360cb103265310a2fa1a4",
				"has_community_visible_stats": true
			},
			{
				"appid": 245620,
				"name": "Tropico 5",
				"playtime_forever": 180,
				"img_icon_url": "2eeb96375072ce1d25254514f299181956f1513e",
				"img_logo_url": "d121d7d94f29984cae3f322b2925cee5b05f5ca2",
				"has_community_visible_stats": true
			},
			{
				"appid": 247730,
				"name": "Nether",
				"playtime_forever": 484,
				"img_icon_url": "b0d8c8b080352e22e498e7713d6badaebd1f79e3",
				"img_logo_url": "0f5a2ccdbd1a781b4bb3bc90cbd43d322e07befd",
				"has_community_visible_stats": true
			},
			{
				"appid": 9350,
				"name": "Supreme Commander",
				"playtime_forever": 0,
				"img_icon_url": "ebc51d0f50f1d964dd87e7000e517865436a24b9",
				"img_logo_url": "48baca59dc7ff836d3a5e4bcebb23ccfea3ce3de"
			},
			{
				"appid": 9420,
				"name": "Supreme Commander: Forged Alliance",
				"playtime_forever": 0,
				"img_icon_url": "fe0bc9a05b7c2af87ddbb0a1c031c00f55897edb",
				"img_logo_url": "20bbdf95d94ac06a61e68ee64ad50b7cf3b71bd4"
			},
			{
				"appid": 39650,
				"name": "The Guild II",
				"playtime_forever": 0,
				"img_icon_url": "d262e78e0501f0d25f021ad572ffce43728b9cd5",
				"img_logo_url": "cca1dbcb16333a5abd98cb57689b81e4bc196e5f"
			},
			{
				"appid": 55110,
				"name": "Red Faction: Armageddon",
				"playtime_forever": 8,
				"img_icon_url": "e59c7e741c05c9071176b270bdbb733afe55c751",
				"img_logo_url": "19f894d0e08dff8e284d4facc5968a1025da997d",
				"has_community_visible_stats": true
			},
			{
				"appid": 39690,
				"name": "ArcaniA",
				"playtime_forever": 0,
				"img_icon_url": "109554c6cb9ce581b57db529fb33af0a738adcf0",
				"img_logo_url": "ff47f03cb1da4dca9a4c2f0274cf434a33dd8cca"
			},
			{
				"appid": 50650,
				"name": "Darksiders II",
				"playtime_forever": 2,
				"img_icon_url": "a2d5549090144f1bfd9e00f1b460c1ad0aa9c366",
				"img_logo_url": "b0b8edfa57f332dc529c04b4dd2f5475227e71ac",
				"has_community_visible_stats": true
			},
			{
				"appid": 65530,
				"name": "SpellForce 2 - Faith in Destiny",
				"playtime_forever": 0,
				"img_icon_url": "a06c377c04a7c60a304dcb2174c75298c40d0cc2",
				"img_logo_url": "df8102fa40ea8784656cd127c53fb1167ffb9dc6"
			},
			{
				"appid": 214870,
				"name": "Painkiller Hell & Damnation",
				"playtime_forever": 0,
				"img_icon_url": "d212116bc894a9c521fa1cad1053862e28a490b7",
				"img_logo_url": "4a43f4cb7b0d8fb409a97ef2669aa3a3953d0f51",
				"has_community_visible_stats": true
			},
			{
				"appid": 243470,
				"name": "Watch_Dogs",
				"playtime_forever": 2401,
				"img_icon_url": "53368e59a196dfa9af66ecd32135939da97fa72e",
				"img_logo_url": "8957636e0668d8913539aa535a8a508e3e54b1f4",
				"has_community_visible_stats": true
			},
			{
				"appid": 42910,
				"name": "Magicka",
				"playtime_forever": 1142,
				"img_icon_url": "0eb97d0cd644ee08b1339d2160c7a6adf2ea0a65",
				"img_logo_url": "8c59c674ef40f59c3bafde8ff0d59b7994c66477",
				"has_community_visible_stats": true
			},
			{
				"appid": 238430,
				"name": "Contagion",
				"playtime_forever": 1521,
				"img_icon_url": "5b4f22ca04d338866b0c904af3166d9e939027f2",
				"img_logo_url": "207217ab75cce8e73642b286d8ebb66a86bd776a",
				"has_community_visible_stats": true
			},
			{
				"appid": 261180,
				"name": "Lethal League",
				"playtime_forever": 227,
				"img_icon_url": "9d667a8b47f936f99a96328c7835fcb3264511c7",
				"img_logo_url": "1d15bb3e7ebf3c8ba369309c34b577bb852f4702",
				"has_community_visible_stats": true
			},
			{
				"appid": 211820,
				"name": "Starbound",
				"playtime_forever": 3287,
				"img_icon_url": "4dbf4041c33eb2edfc41f552320a2e584519134c",
				"img_logo_url": "38652d0a34354f77e37073aeb5e8e9619d2c5308",
				"has_community_visible_stats": true
			},
			{
				"appid": 367540,
				"name": "Starbound - Unstable",
				"playtime_forever": 0,
				"img_icon_url": "9420b506fe5b00fd02d9005f1f5555358e3f71f7",
				"img_logo_url": "53eb828591fb86c72358b7939dde633ba3e5c6c7",
				"has_community_visible_stats": true
			},
			{
				"appid": 221100,
				"name": "DayZ",
				"playtime_forever": 1040,
				"img_icon_url": "16a985dfee9b093d76a0ffc4cf4c77ba20c2eb0d",
				"img_logo_url": "3520d3db4e282585b24fe28178ca86f54874e3b5",
				"has_community_visible_stats": true
			},
			{
				"appid": 269770,
				"name": "Secrets of Grindea",
				"playtime_2weeks": 477,
				"playtime_forever": 1129,
				"img_icon_url": "2680202bf4f831ca9f0a1e1edfc9915bd1669f0a",
				"img_logo_url": "3f0a4c7f4ecee7b13563a65008e35e3501408e43",
				"has_community_visible_stats": true
			},
			{
				"appid": 270450,
				"name": "Robot Roller-Derby Disco Dodgeball",
				"playtime_2weeks": 1,
				"playtime_forever": 214,
				"img_icon_url": "69897578c5bc80d5cf91636e68029a1017a2bc9b",
				"img_logo_url": "36767415e8730436f680d536fd4817fcf54d2ec8",
				"has_community_visible_stats": true
			},
			{
				"appid": 550,
				"name": "Left 4 Dead 2",
				"playtime_forever": 183,
				"img_icon_url": "7d5a243f9500d2f8467312822f8af2a2928777ed",
				"img_logo_url": "205863cc21e751a576d6fff851984b3170684142",
				"has_community_visible_stats": true
			},
			{
				"appid": 223530,
				"name": "Left 4 Dead 2 Beta",
				"playtime_forever": 0,
				"img_icon_url": "",
				"img_logo_url": ""
			},
			{
				"appid": 271590,
				"name": "Grand Theft Auto V",
				"playtime_forever": 3685,
				"img_icon_url": "1e72f87eb927fa1485e68aefaff23c7fd7178251",
				"img_logo_url": "e447e82f8b0c67f9e001498503c62f2a187bc609",
				"has_community_visible_stats": true
			},
			{
				"appid": 274190,
				"name": "Broforce",
				"playtime_forever": 0,
				"img_icon_url": "aade0d272c8df1e1ea7e47d4baea36cb80e8b33d",
				"img_logo_url": "c6728f33769caf6ea6b2a4421579d91fe3029eca",
				"has_community_visible_stats": true
			},
			{
				"appid": 222880,
				"name": "Insurgency",
				"playtime_2weeks": 339,
				"playtime_forever": 1455,
				"img_icon_url": "b072fc4239951c1952f4877edde340419438b528",
				"img_logo_url": "b620a8286682299e2a1ff272b04fb09d1b4edd38",
				"has_community_visible_stats": true
			},
			{
				"appid": 275200,
				"name": "Westerado: Double Barreled",
				"playtime_forever": 0,
				"img_icon_url": "c8dada6ab21b95ac5ec1942f64d838769f4cd45e",
				"img_logo_url": "11958e3977609a8deb9b36a658ed8afe3150e737",
				"has_community_visible_stats": true
			},
			{
				"appid": 244850,
				"name": "Space Engineers",
				"playtime_forever": 354,
				"img_icon_url": "0878b7de9fb16056144e8c6dd93f06a0d3f0e36a",
				"img_logo_url": "115f18763462ece5478d6096b22fd2f1faca0788",
				"has_community_visible_stats": true
			},
			{
				"appid": 225840,
				"name": "Sven Co-op",
				"playtime_forever": 54,
				"img_icon_url": "54f8d0253085201b07cbe117a823d889bed610bb",
				"img_logo_url": "1ef26a0b4dbabb81d8d1682ffd674bc3c71a313f",
				"has_community_visible_stats": true
			},
			{
				"appid": 278100,
				"name": "RIVE",
				"playtime_forever": 0,
				"img_icon_url": "fe2bb5c4e0028f8a197e3ac1416742398a2ab523",
				"img_logo_url": "70d80ee4d70de76e3550e472ec76685902e4e8b3",
				"has_community_visible_stats": true
			},
			{
				"appid": 281990,
				"name": "Stellaris",
				"playtime_forever": 990,
				"img_icon_url": "3e4dfdf4b304b1f4552c279ea716238876ac02c8",
				"img_logo_url": "63233adde1e8e89b9b2bbbb9bdf8787c1e8b4e56",
				"has_community_visible_stats": true
			},
			{
				"appid": 282070,
				"name": "This War of Mine",
				"playtime_forever": 21,
				"img_icon_url": "38ad6fd10e2b89ab24e8013584ece7961bebe086",
				"img_logo_url": "4d2ecaa400d7937fdfae6642b73ad5695c393bf7",
				"has_community_visible_stats": true
			},
			{
				"appid": 285900,
				"name": "Gang Beasts",
				"playtime_2weeks": 33,
				"playtime_forever": 656,
				"img_icon_url": "fe0f0440dabf5ff8d8326d2d6ff629e016fe3559",
				"img_logo_url": "75fa11f4955cef767e5aa257ebac150eb5fd5208",
				"has_community_visible_stats": true
			},
			{
				"appid": 286160,
				"name": "Tabletop Simulator",
				"playtime_forever": 319,
				"img_icon_url": "19f5b90e3c7084758f885ded843631b13929fa26",
				"img_logo_url": "4cd5c6a6580ae6e85026ac670f9fa1a0b45372c3",
				"has_community_visible_stats": true
			},
			{
				"appid": 287700,
				"name": "METAL GEAR SOLID V: THE PHANTOM PAIN",
				"playtime_forever": 380,
				"img_icon_url": "7a1737163c96ea641143db45709a4ac444ba8f7b",
				"img_logo_url": "6af3d5aae37f4d5e6add4f49d5edd58f7bdd420b",
				"has_community_visible_stats": true
			},
			{
				"appid": 290300,
				"name": "Rebel Galaxy",
				"playtime_forever": 0,
				"img_icon_url": "0ce498a5b3dc987826eb1ad1c96842d7c8b42a23",
				"img_logo_url": "9e9f8373019db6a9c6fa2be17702a57e88429fca",
				"has_community_visible_stats": true
			},
			{
				"appid": 291550,
				"name": "Brawlhalla",
				"playtime_forever": 32,
				"img_icon_url": "c43fac31b8bf8821764603a14d09412bc3d45f66",
				"img_logo_url": "2e73ca87f37414968f7dfa353d3d727dea01faed",
				"has_community_visible_stats": true
			},
			{
				"appid": 293780,
				"name": "Crawl",
				"playtime_forever": 70,
				"img_icon_url": "139dfb62ede8539f33b354e0c6852f37c7e58aea",
				"img_logo_url": "c9b40ceefe6914f7050482eca4fe3d1e498fdcf6",
				"has_community_visible_stats": true
			},
			{
				"appid": 295110,
				"name": "Just Survive",
				"playtime_forever": 926,
				"img_icon_url": "62defe57b364721d8947761c9998643ae5afaad1",
				"img_logo_url": "8d70843e7acf946c9f91b7da070b5e7ec80a232a"
			},
			{
				"appid": 362300,
				"name": "Just Survive Test Server",
				"playtime_forever": 0,
				"img_icon_url": "ae46a0a74a41c21f2d490dde824f552c20920761",
				"img_logo_url": "fcd2f610a238dfc6c2292c45ada6bb1edb77e926"
			},
			{
				"appid": 433850,
				"name": "H1Z1",
				"playtime_forever": 93,
				"img_icon_url": "a7a0cef96f9cf83f4afd7cb52a48174f2dfbb663",
				"img_logo_url": "7dfbc2eb2a886dd91bb4fbeb9b6886ce9b0374dc",
				"has_community_visible_stats": true
			},
			{
				"appid": 439700,
				"name": "H1Z1: Test Server",
				"playtime_forever": 0,
				"img_icon_url": "d0e924622be8ce1e9920197f397365bb1e6bca5f",
				"img_logo_url": "f77deaee709ef0b7b59f00c67e019804bb5138c7"
			},
			{
				"appid": 296470,
				"name": "Mount Your Friends",
				"playtime_forever": 67,
				"img_icon_url": "c149e3b23f5ee0b6b9706e0dad7c92d329b83b04",
				"img_logo_url": "a6b7346ec0879c33d1962cd3d913efa3e2435b6c",
				"has_community_visible_stats": true
			},
			{
				"appid": 35450,
				"name": "Rising Storm/Red Orchestra 2 Multiplayer",
				"playtime_forever": 196,
				"img_icon_url": "d70423dddb3bb2a144e38ab9cc811e6fda1eb622",
				"img_logo_url": "02d367780a6dcdba708bb8b94fbc42f23ba99a5b",
				"has_community_visible_stats": true
			},
			{
				"appid": 236830,
				"name": "Red Orchestra 2: Heroes of Stalingrad - Single Player",
				"playtime_forever": 0,
				"img_icon_url": "d70423dddb3bb2a144e38ab9cc811e6fda1eb622",
				"img_logo_url": "ac6571422ba4768dbb8f5196d954872955f26b50",
				"has_community_visible_stats": true
			},
			{
				"appid": 238460,
				"name": "BattleBlock Theater",
				"playtime_forever": 232,
				"img_icon_url": "2f258aaff583d797812cdcf24830d5992f48733b",
				"img_logo_url": "13380473acaa95f843301b8a21a383790ae384de",
				"has_community_visible_stats": true
			},
			{
				"appid": 237930,
				"name": "Transistor",
				"playtime_forever": 0,
				"img_icon_url": "b45dc369d45afe945d379e75545959f845094f92",
				"img_logo_url": "705c88fb22dc45a6e886f5afd96ba3c2e258aa06",
				"has_community_visible_stats": true
			},
			{
				"appid": 214190,
				"name": "Minimum",
				"playtime_forever": 151,
				"img_icon_url": "3f138b38697ffcd591aa69942b6d6cb2174d8d8f",
				"img_logo_url": "f6b158620fd2d25cf5500cbef744cefc8c00635e",
				"has_community_visible_stats": true
			},
			{
				"appid": 272890,
				"name": "Vertiginous Golf",
				"playtime_forever": 33,
				"img_icon_url": "8bbfd94ed16786f7c23f8726d2dbe64234af2d4c",
				"img_logo_url": "360c24cb280880ff8c5ae2d4206c759d2a0a8a15",
				"has_community_visible_stats": true
			},
			{
				"appid": 300550,
				"name": "Shadowrun: Dragonfall - Director's Cut",
				"playtime_forever": 0,
				"img_icon_url": "1fe5384c9e513285fd2eaf920b2615f9f0dab4b6",
				"img_logo_url": "e0c29af1992441227caacb463b2b46b9f41b2309",
				"has_community_visible_stats": true
			},
			{
				"appid": 304930,
				"name": "Unturned",
				"playtime_forever": 1591,
				"img_icon_url": "e18009fb628b35953826efe47dc3be556b689f4c",
				"img_logo_url": "32b7ea686e0fb11e24008e4dab179a40a6b2eb09",
				"has_community_visible_stats": true
			},
			{
				"appid": 306660,
				"name": "Ultimate General: Gettysburg",
				"playtime_forever": 0,
				"img_icon_url": "f5265aed11ea1326116859f6af912503b09983e3",
				"img_logo_url": "2a408bcad713015bed082c1e24574b0113b6125e",
				"has_community_visible_stats": true
			},
			{
				"appid": 307580,
				"name": "Technobabylon",
				"playtime_forever": 0,
				"img_icon_url": "a4904708c5b947dcd24d412795ca178b7d9e7e69",
				"img_logo_url": "3d511d206de7672f718270ee83126b687000fbe0",
				"has_community_visible_stats": true
			},
			{
				"appid": 227700,
				"name": "Firefall",
				"playtime_forever": 0,
				"img_icon_url": "9b00a74fea9759c7559e7e20a81b4f25bd0a61b4",
				"img_logo_url": "89c55efb73b88472ae69315dc691353955edcd98",
				"has_community_visible_stats": true
			},
			{
				"appid": 237850,
				"name": "Dreamfall Chapters",
				"playtime_forever": 0,
				"img_icon_url": "e1238d11e33f11cb516d460dea2cd1d42d84ec2e",
				"img_logo_url": "06507734d920cae6fcd5275cf97069bcd0e365c4",
				"has_community_visible_stats": true
			},
			{
				"appid": 312530,
				"name": "Duck Game",
				"playtime_forever": 519,
				"img_icon_url": "d539148e7970b82733bfc78d595b41465fd09275",
				"img_logo_url": "143f5f384064669fcdeb86ffbcc9211fb1d7cf77",
				"has_community_visible_stats": true
			},
			{
				"appid": 312840,
				"name": "Fahrenheit: Indigo Prophecy Remastered",
				"playtime_forever": 0,
				"img_icon_url": "d232a53093cd49a04df465bdc72c36332da7d18f",
				"img_logo_url": "e176c7506da0a20e339a5b64d2c19debf39fd837",
				"has_community_visible_stats": true
			},
			{
				"appid": 312990,
				"name": "The Expendabros",
				"playtime_forever": 196,
				"img_icon_url": "63305a7d0473b92c6d8830a3f62527e64c479e7c",
				"img_logo_url": "2f79038df0cb083412a603adcf933a082698a1b7"
			},
			{
				"appid": 313160,
				"name": "Farming Simulator 15",
				"playtime_forever": 340,
				"img_icon_url": "896b57d24d3c5460adfb2b8fbb9609e04af2a197",
				"img_logo_url": "c69de320668ec24adb17bad4faba87da87bf9a9f",
				"has_community_visible_stats": true
			},
			{
				"appid": 227940,
				"name": "Heroes & Generals",
				"playtime_forever": 18,
				"img_icon_url": "dc7d500149f0281a62d9064aafce8d50f1685b5a",
				"img_logo_url": "0700b3fd0b939bd2c058b5a47bf044d2e9fcfff9",
				"has_community_visible_stats": true
			},
			{
				"appid": 206420,
				"name": "Saints Row IV",
				"playtime_forever": 280,
				"img_icon_url": "b5e8448a3e2ea31ddf3595addae4e1eee2375c0d",
				"img_logo_url": "49d796621c286130a8ddeea918d9aae8c8441455",
				"has_community_visible_stats": true
			},
			{
				"appid": 253510,
				"name": "Warmachine Tactics",
				"playtime_forever": 0,
				"img_icon_url": "73e0e95503656718273a9596b0e83d3ce44e344a",
				"img_logo_url": "7fcc17724770975ff44c6a6445c80c1b97c89557",
				"has_community_visible_stats": true
			},
			{
				"appid": 318600,
				"name": "The Flame in the Flood",
				"playtime_forever": 23,
				"img_icon_url": "c02a40cc55fcb8f37d02680b1ee0da53290da5bf",
				"img_logo_url": "f4b4f192dfbfb2a3cba25e179710436950699531",
				"has_community_visible_stats": true
			},
			{
				"appid": 319480,
				"name": "Odallus: The Dark Call",
				"playtime_forever": 0,
				"img_icon_url": "921954e84eb280eb593f061af5a795264a076a22",
				"img_logo_url": "787a50c5aa24a8b063b457380b05c6d2e10d4a18",
				"has_community_visible_stats": true
			},
			{
				"appid": 241930,
				"name": "Middle-earth™: Shadow of Mordor™",
				"playtime_forever": 1986,
				"img_icon_url": "161afab3c9f725f593635723cc64a7fbeb324ead",
				"img_logo_url": "00631b918ee8799ff48b3d91d9eb0d3278aafa83",
				"has_community_visible_stats": true
			},
			{
				"appid": 322190,
				"name": "SteamWorld Heist",
				"playtime_forever": 0,
				"img_icon_url": "5838d342266d56bdf4416d59d35939df5d52b2f0",
				"img_logo_url": "848d24321b2f126c2fe2b94cf618898fc8bfd6b6",
				"has_community_visible_stats": true
			},
			{
				"appid": 289930,
				"name": "TransOcean: The Shipping Company",
				"playtime_forever": 0,
				"img_icon_url": "9dbd0f96515db78e22414401a2fef5884429bd84",
				"img_logo_url": "17eda0c8eecb35aab9ea0c2991cf0a4c7345c0c2",
				"has_community_visible_stats": true
			},
			{
				"appid": 322770,
				"name": "Vanishing Realms",
				"playtime_forever": 265,
				"img_icon_url": "08d4c71ffb6e0dd0003593d12904bab83197e8a0",
				"img_logo_url": "675b69cc7e9bc3588a9f93bd3b2a1e9a4e2757e0",
				"has_community_visible_stats": true
			},
			{
				"appid": 221380,
				"name": "Age of Empires II: HD Edition",
				"playtime_forever": 114,
				"img_icon_url": "109c74df17f9b67ea47d8f01e3d1ec25278b9f73",
				"img_logo_url": "37e9da3f1174891fe38f8fb0206acda8b6bfc729",
				"has_community_visible_stats": true
			},
			{
				"appid": 242640,
				"name": "Styx: Master of Shadows",
				"playtime_forever": 51,
				"img_icon_url": "674a59002023382bb99865793c1f04c7b76f520e",
				"img_logo_url": "e8abd6c7b1e06dc7ee0a8f594761fff907c0b326",
				"has_community_visible_stats": true
			},
			{
				"appid": 323580,
				"name": "Jotun: Valhalla Edition",
				"playtime_forever": 0,
				"img_icon_url": "69b336a11a1e8acee4034b970a89c1df7cf53b32",
				"img_logo_url": "09e4f191cbafba7d3cde386e73abe1e0504146b4",
				"has_community_visible_stats": true
			},
			{
				"appid": 302510,
				"name": "Ryse: Son of Rome",
				"playtime_forever": 448,
				"img_icon_url": "46114151ac11d6984ec280405d65c15a4ed9438e",
				"img_logo_url": "70e45a9429e0e188817b813147a417bb82dc3bf0",
				"has_community_visible_stats": true
			},
			{
				"appid": 324800,
				"name": "Shadow Warrior 2",
				"playtime_forever": 246,
				"img_icon_url": "e5bdde6548d967fb456b33b2674be1c8efc2d9ae",
				"img_logo_url": "e0e592ac34b92b40b0096f8ce5865ac191779a97",
				"has_community_visible_stats": true
			},
			{
				"appid": 326460,
				"name": "ShellShock Live",
				"playtime_forever": 328,
				"img_icon_url": "bebf5e02b861d7d435fbf96cf059be95415ba5a9",
				"img_logo_url": "bfab67cc354be29b6725054f286a8c7467184542",
				"has_community_visible_stats": true
			},
			{
				"appid": 301970,
				"name": "Screencheat",
				"playtime_forever": 0,
				"img_icon_url": "286d3208052be52d8e8bb9b29141d5ad0a6bc4cf",
				"img_logo_url": "cc40ff947ef8f328c69f537048a46c17dfcf2ed1",
				"has_community_visible_stats": true
			},
			{
				"appid": 274940,
				"name": "Depth",
				"playtime_forever": 411,
				"img_icon_url": "0c711a26af920e93af7cf0fc797fbb200367105e",
				"img_logo_url": "ed52c54d3d6ef23b3cfe0a6072528f1f7f546128",
				"has_community_visible_stats": true
			},
			{
				"appid": 331670,
				"name": "The Jackbox Party Pack",
				"playtime_forever": 645,
				"img_icon_url": "48b7b9b5dca4213ec903ef8934c194ea979375ca",
				"img_logo_url": "24e4322e5380b62a149474fe054c4be44e60865b",
				"has_community_visible_stats": true
			},
			{
				"appid": 234630,
				"name": "Project CARS",
				"playtime_forever": 0,
				"img_icon_url": "3817b4b626ac700dfa4266a3888f8e4d1ca03c7a",
				"img_logo_url": "88acff9eeb54253571aef8c65e8cfc57dddad493",
				"has_community_visible_stats": true
			},
			{
				"appid": 333930,
				"name": "Dirty Bomb",
				"playtime_forever": 53,
				"img_icon_url": "48a3c464019fc161c2ea17334ca8d545a846a98e",
				"img_logo_url": "b0a7716d2f51f08e4dd173fa8dc38eebe4e357d5",
				"has_community_visible_stats": true
			},
			{
				"appid": 276810,
				"name": "Mordheim: City of the Damned",
				"playtime_forever": 0,
				"img_icon_url": "51acbfe30cd22993eac3cbf7a71b7779c145ddc4",
				"img_logo_url": "c3cfccad8342f65ece4d4177e0a7caf052d2e968",
				"has_community_visible_stats": true
			},
			{
				"appid": 250900,
				"name": "The Binding of Isaac: Rebirth",
				"playtime_forever": 431,
				"img_icon_url": "16d46c8630499bfc54d20745ac90786a302cd643",
				"img_logo_url": "c7a76988c53e7f3a3aa1cf224aaf4dbd067ebbf9",
				"has_community_visible_stats": true
			},
			{
				"appid": 339200,
				"name": "Oceanhorn: Monster of Uncharted Seas",
				"playtime_forever": 59,
				"img_icon_url": "702021450ce232e55a829d7ed9f029f41ae11c73",
				"img_logo_url": "17c0e81e3632959c897d53e576bc46d306bdb46c",
				"has_community_visible_stats": true
			},
			{
				"appid": 339610,
				"name": "FreeStyle 2: Street Basketball",
				"playtime_forever": 30,
				"img_icon_url": "368f89b5ecc999f1956a98a9bdb86f4d6acb243d",
				"img_logo_url": "98f20dce7743a493765e8e03eb72d6a912a2d201",
				"has_community_visible_stats": true
			},
			{
				"appid": 332500,
				"name": "GRAV",
				"playtime_forever": 804,
				"img_icon_url": "b5d0d35b1719afef7fb5374ac0f65aa368f1d3f2",
				"img_logo_url": "c30fda30734f04e24cce102ff95cdbd9afc174a7",
				"has_community_visible_stats": true
			},
			{
				"appid": 343730,
				"name": "Irrational Exuberance: Prologue",
				"playtime_forever": 19,
				"img_icon_url": "a28f6b709a69dd699c570423365e1dd67c6e04e7",
				"img_logo_url": "a3fcaf4b65d84581e881df1198f724fea909ad87"
			},
			{
				"appid": 346110,
				"name": "ARK: Survival Evolved",
				"playtime_forever": 160,
				"img_icon_url": "fef1799533131c10f538d2dd697bbbd89e663265",
				"img_logo_url": "58a660ddb7ed1864656ec65e4c18d6edd3bbf512",
				"has_community_visible_stats": true
			},
			{
				"appid": 407530,
				"name": "ARK: Survival Of The Fittest",
				"playtime_forever": 0,
				"img_icon_url": "807c673cddebbfee0700a947a75f4872ad136e9b",
				"img_logo_url": "870478f8ba64ce675aa232829c046fbce3bdbdde",
				"has_community_visible_stats": true
			},
			{
				"appid": 346330,
				"name": "BrainBread 2",
				"playtime_forever": 6,
				"img_icon_url": "de2d36d62e915082ef48da48eedc6161ca13451f",
				"img_logo_url": "391d372645ba724c0e22be05edcea9478a6a8a7e",
				"has_community_visible_stats": true
			},
			{
				"appid": 348250,
				"name": "Google Earth VR",
				"playtime_forever": 616,
				"img_icon_url": "6e7575ca3c5ac486c5b6e3520c5b881a0cb61db0",
				"img_logo_url": "72b13c368cfbb037c6965cf1a9465140c1f6ab26",
				"has_community_visible_stats": true
			},
			{
				"appid": 349480,
				"name": "Modular Combat",
				"playtime_forever": 8,
				"img_icon_url": "cc120fd87b368bf41335f53f6da2d0520895334e",
				"img_logo_url": "13d1da1d56bacd16911a8282ef7dd96601e9c4f7"
			},
			{
				"appid": 298630,
				"name": "The Escapists",
				"playtime_forever": 34,
				"img_icon_url": "bd0870a5fb2b51f11699c9b77d1bc7e7ba688c74",
				"img_logo_url": "a8c068a3c3d4b73935f98d6522dfd676723bcb71",
				"has_community_visible_stats": true
			},
			{
				"appid": 351800,
				"name": "Dev Guy",
				"playtime_forever": 0,
				"img_icon_url": "3d38bfbfb026ea5cd756a225c1a59ffa54de4c4d",
				"img_logo_url": "9ff0ade97beb4b9e4f1ecfca5f94d03abea60539",
				"has_community_visible_stats": true
			},
			{
				"appid": 356050,
				"name": "Beyond Eyes",
				"playtime_forever": 0,
				"img_icon_url": "5d1df48f5f2ae483787e02a7bb3c81beac4b07cb",
				"img_logo_url": "9445779c189d8006f99133d63e96ccf47a157bdb",
				"has_community_visible_stats": true
			},
			{
				"appid": 235540,
				"name": "Warhammer: End Times - Vermintide",
				"playtime_forever": 365,
				"img_icon_url": "3cafd917b91d728da170dc1f80e5ef53f83a2b62",
				"img_logo_url": "2cccac90fd224bf6208d8b54ff0dc72b4ac99410",
				"has_community_visible_stats": true
			},
			{
				"appid": 261640,
				"name": "Borderlands: The Pre-Sequel",
				"playtime_forever": 299,
				"img_icon_url": "af5ef05eac8b1eb618e4f57354ac7b3e918ab1bd",
				"img_logo_url": "df64c72fd335a03dbcc0a19b1f81acc8db1b94ba",
				"has_community_visible_stats": true
			},
			{
				"appid": 345180,
				"name": "Victor Vran",
				"playtime_forever": 266,
				"img_icon_url": "daf6abde5f6599264275244b46d38c6fad84d6e1",
				"img_logo_url": "2ea4d34ea1fdcc8cdf51ad48ad0ad45ff252780e",
				"has_community_visible_stats": true
			},
			{
				"appid": 299360,
				"name": "Block N Load",
				"playtime_forever": 134,
				"img_icon_url": "7b36dde1b5631c436a1914c9b2a55672e4e1fb51",
				"img_logo_url": "2ee188861393cd114390d623deada1d957227c54",
				"has_community_visible_stats": true
			},
			{
				"appid": 360940,
				"name": "The Mean Greens - Plastic Warfare",
				"playtime_forever": 1152,
				"img_icon_url": "e0e8e9115614360ab29f0de41adb6a5ffe4bdd61",
				"img_logo_url": "29fdfda82f173e75104b006f315ca3d54a80bea7",
				"has_community_visible_stats": true
			},
			{
				"appid": 361300,
				"name": "Mother Russia Bleeds",
				"playtime_forever": 0,
				"img_icon_url": "0ca01b6857e876a1900daa958ffbe72701c2ed54",
				"img_logo_url": "b2d35d8e839a79159d2458fec26c94e6a5297de7",
				"has_community_visible_stats": true
			},
			{
				"appid": 361420,
				"name": "ASTRONEER",
				"playtime_forever": 214,
				"img_icon_url": "58b2dfa7da469dcacdc806196f5af0de7a91b03c",
				"img_logo_url": "2e21e61a21c3e2c38f9dda61b8e0881bdbc614d4"
			},
			{
				"appid": 362890,
				"name": "Black Mesa",
				"playtime_forever": 682,
				"img_icon_url": "51182b6a74035eb913b353d5d60e596c3804daf6",
				"img_logo_url": "07165fb02e18a4cf544125c1bd350fe300aef362",
				"has_community_visible_stats": true
			},
			{
				"appid": 363600,
				"name": "Holy Potatoes! A Weapon Shop?!",
				"playtime_forever": 0,
				"img_icon_url": "f5ae92e94c30bf72a045dd3b4a71b1b8bf35b24f",
				"img_logo_url": "3d40214468cff0154fa066ab8967a3937b3a2b56",
				"has_community_visible_stats": true
			},
			{
				"appid": 363970,
				"name": "Clicker Heroes",
				"playtime_forever": 0,
				"img_icon_url": "155ed2de95eacc3353b91c2a057bdbf727c11c20",
				"img_logo_url": "2c4d7dad61946f8a81548a21955ccdcf9199364b",
				"has_community_visible_stats": true
			},
			{
				"appid": 364420,
				"name": "Roguelands",
				"playtime_forever": 690,
				"img_icon_url": "3d3f0d1cfe44d2d739bcf6c088f1ce058230cad4",
				"img_logo_url": "1d64f9ea56178fcef40516a7ae075cb74472ef7c"
			},
			{
				"appid": 365450,
				"name": "Hacknet",
				"playtime_forever": 0,
				"img_icon_url": "2445c4ead6ee47784a326922271ec1c0b41d64e2",
				"img_logo_url": "50479f0bfe5a552132a0fc2668640b2e6a737398",
				"has_community_visible_stats": true
			},
			{
				"appid": 365720,
				"name": "Skyrim Script Extender (SKSE)",
				"playtime_forever": 0,
				"img_icon_url": "48eaa1815ac4beddc4d7c9fec6c2517f6f0b718e",
				"img_logo_url": "2e321af767f304de67d59f9c4329a8b8d553739b"
			},
			{
				"appid": 367450,
				"name": "Poly Bridge",
				"playtime_forever": 44,
				"img_icon_url": "7bc695b845364099d87469c2d9074a3782c68638",
				"img_logo_url": "d5fd2146d109140289052b3584bf632d3643fc04",
				"has_community_visible_stats": true
			},
			{
				"appid": 367500,
				"name": "Dragon's Dogma: Dark Arisen",
				"playtime_forever": 0,
				"img_icon_url": "c21a873b4d4ccd64e582e733c9f319fbb4d7899e",
				"img_logo_url": "4342f698691a76ee6495a7e2d7e374d575496ae7",
				"has_community_visible_stats": true
			},
			{
				"appid": 238370,
				"name": "Magicka 2",
				"playtime_forever": 150,
				"img_icon_url": "6c1ca2ff2c0f87c4d0a5378a9dbc7b7277bd239b",
				"img_logo_url": "c541f56b343320cccfdab1f9b9a87230e6e0b341",
				"has_community_visible_stats": true
			},
			{
				"appid": 397080,
				"name": "Magicka 2: Spell Balance Beta",
				"playtime_forever": 0,
				"img_icon_url": "",
				"img_logo_url": "",
				"has_community_visible_stats": true
			},
			{
				"appid": 368230,
				"name": "Kingdom: Classic",
				"playtime_forever": 148,
				"img_icon_url": "0d741624c643448ff74741f50a4b80a24529b869",
				"img_logo_url": "b684a91e7bf997a7a1acf121747ba843c7bb66fd",
				"has_community_visible_stats": true
			},
			{
				"appid": 496300,
				"name": "Kingdom: New Lands",
				"playtime_forever": 29,
				"img_icon_url": "d51edb8c8d40e68818adffcd3f9b40149173b2d5",
				"img_logo_url": "5662913c07750c882478e03be144982421e07628",
				"has_community_visible_stats": true
			},
			{
				"appid": 368860,
				"name": "Garbage Day",
				"playtime_forever": 90,
				"img_icon_url": "60d22e32b264dff6be000a6351c8478b2ecbb11e",
				"img_logo_url": "3bf3464e009016d211e1efe14e6c5dea672a735d"
			},
			{
				"appid": 369200,
				"name": "Ghost in the Shell: Stand Alone Complex - First Assault Online",
				"playtime_forever": 49,
				"img_icon_url": "b963ac9e7f0bc025b6ded210ea8f80005bfe2411",
				"img_logo_url": "f75d9fba3e0eb7693b2d796eb95a52e31f2f54ea",
				"has_community_visible_stats": true
			},
			{
				"appid": 370910,
				"name": "Kathy Rain",
				"playtime_forever": 0,
				"img_icon_url": "b303ac4e08ea30763257596112c13c0c4e4b0187",
				"img_logo_url": "e47c9f6c28b7098560b86d2e6f7357203d01e9ce",
				"has_community_visible_stats": true
			},
			{
				"appid": 267750,
				"name": "Shadowrun Chronicles - Boston Lockdown",
				"playtime_forever": 0,
				"img_icon_url": "323110f304d992546a5f33d05af9c937e5d9e9e0",
				"img_logo_url": "0155712c7b4fcdbca90dbceb09ff2b6eab19e584",
				"has_community_visible_stats": true
			},
			{
				"appid": 375600,
				"name": "Air Brawl",
				"playtime_forever": 839,
				"img_icon_url": "c310ea1a0438752ab97d5b667251ae39de60c937",
				"img_logo_url": "875aa448d007a4d4349f83b164d8174baf16cd07",
				"has_community_visible_stats": true
			},
			{
				"appid": 377160,
				"name": "Fallout 4",
				"playtime_forever": 696,
				"img_icon_url": "779c4356ebe32af2af7c9f0bbba595dfe872cd7f",
				"img_logo_url": "8977a8e98acbbdd3c0ff905afb7e0a6e2eb555ea",
				"has_community_visible_stats": true
			},
			{
				"appid": 377360,
				"name": "Western Press",
				"playtime_forever": 0,
				"img_icon_url": "642bf7210ebae68ae72f27245987c7e217795515",
				"img_logo_url": "3e239c3f756f21b4a02cfe59bffae72d5355a861",
				"has_community_visible_stats": true
			},
			{
				"appid": 380220,
				"name": "Hover Junkers",
				"playtime_forever": 376,
				"img_icon_url": "00c7c4e1532adbbd9953d582aec53f4b00b8a9d7",
				"img_logo_url": "37d2f69ee1efb6f56e5b3595a0f1c3e88640e5f4",
				"has_community_visible_stats": true
			},
			{
				"appid": 381940,
				"name": "Trials on Tatooine",
				"playtime_forever": 36,
				"img_icon_url": "cdcf644807cff06d840dc3c6b79f95860088abeb",
				"img_logo_url": "716860d540665a9f1860fa54bdef28657cb775e4"
			},
			{
				"appid": 382110,
				"name": "Virtual Desktop",
				"playtime_forever": 524,
				"img_icon_url": "c4f78db130aec6ee1188f432b0ceaf102d50e28a",
				"img_logo_url": "4c32cf132501fb26528b3b3316363f89bcf81785",
				"has_community_visible_stats": true
			},
			{
				"appid": 384190,
				"name": "ABZÛ",
				"playtime_forever": 0,
				"img_icon_url": "322d0d5990e35b3bdcd29e45982e110dd4a158ba",
				"img_logo_url": "8ddd3b70bf7c92ad9e7fb3eda763fcf558ea8b99",
				"has_community_visible_stats": true
			},
			{
				"appid": 383870,
				"name": "Firewatch",
				"playtime_forever": 222,
				"img_icon_url": "d13e70a08cab192c52104f315a7d68591c085e81",
				"img_logo_url": "4ce446fd39f19222e2b3f3995955c6bbd06f182c",
				"has_community_visible_stats": true
			},
			{
				"appid": 386360,
				"name": "SMITE",
				"playtime_2weeks": 27,
				"playtime_forever": 11609,
				"img_icon_url": "7ed9de7bbfab9accb81e47b84943e7478baf2f3a",
				"img_logo_url": "db36e43d2de5bf8913e5022425577866b2e8fd11",
				"has_community_visible_stats": true
			},
			{
				"appid": 386940,
				"name": "Ultimate Chicken Horse",
				"playtime_forever": 405,
				"img_icon_url": "07e45651fd2e37fde1d512c4cb77238ff5ce97c0",
				"img_logo_url": "cbf5f8788f86f3462f8642caffde490040f4117e",
				"has_community_visible_stats": true
			},
			{
				"appid": 387990,
				"name": "Scrap Mechanic",
				"playtime_forever": 1214,
				"img_icon_url": "a912301394e90691ef6a1598e971c9b47c1806b5",
				"img_logo_url": "e5545265c075273d886d6d7c60afcce4873bed6d",
				"has_community_visible_stats": true
			},
			{
				"appid": 389220,
				"name": "Maximum Override",
				"playtime_forever": 0,
				"img_icon_url": "613ea556ddffbd76b7e2d8e0c28864658da12da9",
				"img_logo_url": "be4869d5d280c4dbeac10904ba1f2b12e56c5a4e",
				"has_community_visible_stats": true
			},
			{
				"appid": 442700,
				"name": "MaximumVR Demo",
				"playtime_forever": 23,
				"img_icon_url": "",
				"img_logo_url": ""
			},
			{
				"appid": 352460,
				"name": "Dead Realm",
				"playtime_forever": 220,
				"img_icon_url": "9b60ed7eb2f4047b3e59952b5600d6d8b7da83ca",
				"img_logo_url": "8a7fe9a6ea136f489f0b70135e1ba328ba59256b",
				"has_community_visible_stats": true
			},
			{
				"appid": 391460,
				"name": "WARMODE",
				"playtime_forever": 13,
				"img_icon_url": "e42a4a7627c4806f29d40e4564d3b20092e16b2a",
				"img_logo_url": "8d158db12963af590a5d34b66f3abf15ff61fc33"
			},
			{
				"appid": 252950,
				"name": "Rocket League",
				"playtime_forever": 2098,
				"img_icon_url": "9ad6dd3d173523354385955b5fb2af87639c4163",
				"img_logo_url": "3854e40582bc14b8ba3c9ee163a0fa64bc538def",
				"has_community_visible_stats": true
			},
			{
				"appid": 225540,
				"name": "Just Cause 3",
				"playtime_forever": 2082,
				"img_icon_url": "c82c69c8d616d9d273d749e3dd3bd7a0f9da594a",
				"img_logo_url": "afdb9bd71ccd65d3fcfc4735076d50cead701036",
				"has_community_visible_stats": true
			},
			{
				"appid": 331600,
				"name": "ONE PIECE PIRATE WARRIORS 3",
				"playtime_forever": 0,
				"img_icon_url": "f8d8859c604acf2709a8e8de6907d4d4f91520f6",
				"img_logo_url": "3bf4e678cb6792752c35f4746089564a400a4422",
				"has_community_visible_stats": true
			},
			{
				"appid": 400180,
				"name": "Okhlos: Omega",
				"playtime_forever": 0,
				"img_icon_url": "f59290f7662b535183fa28befa359fd2175d97af",
				"img_logo_url": "22808ba96d35988305e1356fccf1343ef8774728",
				"has_community_visible_stats": true
			},
			{
				"appid": 393380,
				"name": "Squad",
				"playtime_forever": 180,
				"img_icon_url": "eb66a8cb52165274c84cae6526205065d13119d5",
				"img_logo_url": "0a3d0e18d60cc7697562eb9865886aaad3b1730a",
				"has_community_visible_stats": true
			},
			{
				"appid": 407060,
				"name": "AltspaceVR",
				"playtime_forever": 148,
				"img_icon_url": "524212cf48b566bfd174ee6a4f35f92bab0df554",
				"img_logo_url": "175424ff7d47031c7469b1fac80bae0ea2d93e43"
			},
			{
				"appid": 410390,
				"name": "Warhammer: Vermintide VR - Hero Trials",
				"playtime_forever": 0,
				"img_icon_url": "3cafd917b91d728da170dc1f80e5ef53f83a2b62",
				"img_logo_url": "88cf3f63eb0afa7f4c824361ca47fe416204710a"
			},
			{
				"appid": 412740,
				"name": "Audioshield",
				"playtime_forever": 208,
				"img_icon_url": "d489ad4162d6739e48d7ea91657f57374ca9a5c6",
				"img_logo_url": "8e8c19e0e77cf545cbc4a50506bfa554061e1f74"
			},
			{
				"appid": 413150,
				"name": "Stardew Valley",
				"playtime_forever": 1380,
				"img_icon_url": "35d1377200084a4034238c05b0c8930451e2fb40",
				"img_logo_url": "694de1f9cf09aba9d6d118bcff07714343529a0a",
				"has_community_visible_stats": true
			},
			{
				"appid": 414530,
				"name": "Skyforge",
				"playtime_forever": 629,
				"img_icon_url": "3d2c8c7275ee16e8a14a38db9c2411fce87bea24",
				"img_logo_url": "94ea2b6bdff26071b65ae0b6e7d0d2f11feb9e1d",
				"has_community_visible_stats": true
			},
			{
				"appid": 311210,
				"name": "Call of Duty: Black Ops III",
				"playtime_forever": 151,
				"img_icon_url": "bd3e3a9516b480164df25d16e49ae4ce4a063cb4",
				"img_logo_url": "baafcb41da391b280df931b525d3be58580989e7",
				"has_community_visible_stats": true
			},
			{
				"appid": 455130,
				"name": "Call of Duty: Black Ops III – Mod Tools",
				"playtime_forever": 0,
				"img_icon_url": "f5b052d3be4796e2a7a1f0f7a9578aa773882b5f",
				"img_logo_url": "4022defd0a99127c6264a3d31ef2a529b46ce0fe",
				"has_community_visible_stats": true
			},
			{
				"appid": 417890,
				"name": "Apotheon Arena",
				"playtime_forever": 126,
				"img_icon_url": "4f960147af2ae1d7d9d1162ab71f73a79e48bc37",
				"img_logo_url": "9e467d9e431cf32848b3e563e45ac0f26fb35fff"
			},
			{
				"appid": 418650,
				"name": "Space Pirate Trainer",
				"playtime_forever": 174,
				"img_icon_url": "77771ac82d2ca2d4e2e958cacfa7f8092eb216c2",
				"img_logo_url": "303c70c2ba6842a0603a9df28443fb570edade0c",
				"has_community_visible_stats": true
			},
			{
				"appid": 294000,
				"name": "Knight Squad",
				"playtime_forever": 3,
				"img_icon_url": "41079e167c4548da732c7c0d5f0fdebb9af7e6d1",
				"img_logo_url": "c971695b2f974632789a8b4e20cd695f3d635f8e",
				"has_community_visible_stats": true
			},
			{
				"appid": 423580,
				"name": "Project Highrise",
				"playtime_forever": 0,
				"img_icon_url": "7edde97ad31fe5d2cf4eeec38a366c7e450a639f",
				"img_logo_url": "e9c009cf2980c06b47c2e80dadac0c17fe780b12",
				"has_community_visible_stats": true
			},
			{
				"appid": 268500,
				"name": "XCOM 2",
				"playtime_forever": 0,
				"img_icon_url": "f275aeb0b1b947262810569356a199848c643754",
				"img_logo_url": "10a6157d6614f63cd8a95d002d022778c207c218",
				"has_community_visible_stats": true
			},
			{
				"appid": 427520,
				"name": "Factorio",
				"playtime_forever": 1859,
				"img_icon_url": "267f5a89f36ab287e600a4e7d4e73d3d11f0fd7d",
				"img_logo_url": "95e5aa627ae1481b1dea293f6db5954e8aa79f41",
				"has_community_visible_stats": true
			},
			{
				"appid": 428550,
				"name": "Momodora: Reverie Under the Moonlight",
				"playtime_2weeks": 151,
				"playtime_forever": 151,
				"img_icon_url": "17d2a60ead58d88259b7ff68c0bf698b0b5e4afc",
				"img_logo_url": "70bd99b8c3b8c7cb646327f202c8ea8356332d83",
				"has_community_visible_stats": true
			},
			{
				"appid": 428750,
				"name": "Neon Chrome",
				"playtime_forever": 0,
				"img_icon_url": "5baf6568787f5be7cfee49ae0ce046f5fbed48ca",
				"img_logo_url": "f7fbe2a3f03596d010646ea3458a3abd60cbe8b2",
				"has_community_visible_stats": true
			},
			{
				"appid": 436110,
				"name": "Medusa's Labyrinth",
				"playtime_forever": 30,
				"img_icon_url": "44964f38c651aae54649707f4df18e181c8e07cc",
				"img_logo_url": "44a1d184eb67e90129cbf1368c7ff6cf5babab19"
			},
			{
				"appid": 436320,
				"name": "Raw Data",
				"playtime_forever": 132,
				"img_icon_url": "8b5c46829f26e148f06e4f4fde437f675fdaeca8",
				"img_logo_url": "64f5f24a9a5907c0c00a7f5e3aad2c3b65281c26",
				"has_community_visible_stats": true
			},
			{
				"appid": 437390,
				"name": "HoPiKo",
				"playtime_forever": 0,
				"img_icon_url": "621659d31fe293e0f97339b79c3cbbaa9f6abb89",
				"img_logo_url": "058b85d3047c351a4c56ee666fd27bdd35c21fe9",
				"has_community_visible_stats": true
			},
			{
				"appid": 438100,
				"name": "VRChat",
				"playtime_forever": 0,
				"img_icon_url": "f9d80e73cf1b469f2e0edc920157f2824c106f25",
				"img_logo_url": "ccb46eccc37378f22e092570e99a2431d7f112f1",
				"has_community_visible_stats": true
			},
			{
				"appid": 364360,
				"name": "Total War: WARHAMMER",
				"playtime_forever": 150,
				"img_icon_url": "918a2af60362c81e36dabb20bf99c4d1aea45ff8",
				"img_logo_url": "cce5cf47318bfebf31c26307bcd33fc9302d364e",
				"has_community_visible_stats": true
			},
			{
				"appid": 365590,
				"name": "Tom Clancy's The Division",
				"playtime_forever": 1815,
				"img_icon_url": "93be9eec9ea09ee3cbc0f04de58f1c87a24b18f5",
				"img_logo_url": "1fcb383a3dc433690068a7d49373f81a4bbe5ade",
				"has_community_visible_stats": true
			},
			{
				"appid": 524440,
				"name": "Tom Clancy's The Division PTS",
				"playtime_forever": 0,
				"img_icon_url": "93be9eec9ea09ee3cbc0f04de58f1c87a24b18f5",
				"img_logo_url": "e82e56c842f3628dfe29cffc7a3b38a6129bee0e"
			},
			{
				"appid": 327140,
				"name": "Tilt Brush",
				"playtime_forever": 177,
				"img_icon_url": "b90d33b5e8c02536ed1586db8b1433cc11c33fc6",
				"img_logo_url": "1cfc76d8334e75d7b23a6c53aaa4c95b3068df01"
			},
			{
				"appid": 386690,
				"name": "Fantastic Contraption",
				"playtime_forever": 59,
				"img_icon_url": "31e9004ab5f5640faac0ae235b823cd741ba313f",
				"img_logo_url": "066c5926c953002de3fc7169d9d63b33835e668e",
				"has_community_visible_stats": true
			},
			{
				"appid": 448280,
				"name": "Job Simulator",
				"playtime_forever": 482,
				"img_icon_url": "ce403508316392c8ed1322c2dffdaaa486b463aa",
				"img_logo_url": "f03631841420796c193b5b31ffdd739a7a703d84",
				"has_community_visible_stats": true
			},
			{
				"appid": 450390,
				"name": "The Lab",
				"playtime_forever": 116,
				"img_icon_url": "69ca11312e3a1779946de8871d6bdb003636ffbf",
				"img_logo_url": "dde7f70d5d590ba242ca8fcfaac9fe9b5e5e8754",
				"has_community_visible_stats": true
			},
			{
				"appid": 451840,
				"name": "Out of Ammo",
				"playtime_forever": 58,
				"img_icon_url": "ca04ef70a0d6300698d3ed87e4edb3fd02f09fbf",
				"img_logo_url": "147a5a073d756d149b04daff2641af6e53c4b215",
				"has_community_visible_stats": true
			},
			{
				"appid": 452710,
				"name": "Realities",
				"playtime_forever": 18,
				"img_icon_url": "9f8868fb76c77ef444304d40cc92e1b381517e17",
				"img_logo_url": "8a4e9f7af43967df5a737a10ba445f52196f4b16"
			},
			{
				"appid": 455440,
				"name": "Spell Fighter VR",
				"playtime_forever": 0,
				"img_icon_url": "131cc236b7e998a562973e62ad2590e9870fc10b",
				"img_logo_url": "2faf19832a9885b73aa372e6fb6822ce7790b9b6"
			},
			{
				"appid": 457420,
				"name": "Surgeon Simulator VR: Meet The Medic",
				"playtime_forever": 19,
				"img_icon_url": "c08806c45ec43eaae1fbf4ad24e863b9d749d1a6",
				"img_logo_url": "60b7cdbb839abedf3aa4c9c2354b38e5f7d9b4b6"
			},
			{
				"appid": 457550,
				"name": "Bigscreen Beta",
				"playtime_forever": 26,
				"img_icon_url": "159819f9fa0765ddab16ae93be9aa956789817bc",
				"img_logo_url": "f85f453d356a898d6c971ad1219092ec1c636f3d",
				"has_community_visible_stats": true
			},
			{
				"appid": 460850,
				"name": "Allumette",
				"playtime_forever": 17,
				"img_icon_url": "c80127c3665b5ea9d0d1ab9b67075367123ce5f9",
				"img_logo_url": "c6bd0fbc02e117e4d78e45367860e5c846c8e74b"
			},
			{
				"appid": 461560,
				"name": "Mandagon",
				"playtime_forever": 4,
				"img_icon_url": "829703508461a34cad7e682712a5bf8f86011168",
				"img_logo_url": "e5256a71043af4fd7cacd655d1457331f8b8f16d",
				"has_community_visible_stats": true
			},
			{
				"appid": 462910,
				"name": "Poly Runner VR",
				"playtime_forever": 0,
				"img_icon_url": "4da440c2781338076e646b65bd62f160ed12e7f8",
				"img_logo_url": "9b2ed841c317ac865d73d3adacbf484464581576"
			},
			{
				"appid": 396060,
				"name": "The Rose and I",
				"playtime_forever": 10,
				"img_icon_url": "ea3ebbdc24f0485a0df5178e00035fa5d00ce311",
				"img_logo_url": "70d66b2ad9d63c9abf67afc6f949003c9fd44cb8"
			},
			{
				"appid": 464540,
				"name": "Colosse",
				"playtime_forever": 5,
				"img_icon_url": "6c856a49202f3c0a29e8a9d4249c63be753da14a",
				"img_logo_url": "52df932d6abb2c0944dd94882ce73a4da4ef41dc"
			},
			{
				"appid": 466560,
				"name": "Northgard",
				"playtime_forever": 542,
				"img_icon_url": "f290db6bc98c8b40d01a13b9c99baaf705c6ac17",
				"img_logo_url": "e77a9dad1dbc9b93f69b03446b5305a04eadd6ef",
				"has_community_visible_stats": true
			},
			{
				"appid": 379720,
				"name": "DOOM",
				"playtime_forever": 450,
				"img_icon_url": "b6e72ff47d1990cb644700751eeeff14e0aba6dc",
				"img_logo_url": "2e6aa9a14a0da798fe9f1c0a4d0bacecf241c0a2",
				"has_community_visible_stats": true
			},
			{
				"appid": 468700,
				"name": "NVIDIA® VR Funhouse",
				"playtime_forever": 62,
				"img_icon_url": "ab908f49c46c2fb0596c5b03c6a23b8773fd9680",
				"img_logo_url": "e5c91e2a365a999381571ec7e47836cd93e85272",
				"has_community_visible_stats": true
			},
			{
				"appid": 469610,
				"name": "Rick and Morty: Virtual Rick-ality",
				"playtime_forever": 337,
				"img_icon_url": "0ec5b9e5a0aeefe368415a2e13b6696a95b5f279",
				"img_logo_url": "a55b1d3501ae84114bf7a94681f1051cf0080d64",
				"has_community_visible_stats": true
			},
			{
				"appid": 471710,
				"name": "Rec Room",
				"playtime_forever": 91,
				"img_icon_url": "5f5ca9b341d2cdcba295a551a90040a7276e70ab",
				"img_logo_url": "c6fda400a35e9e111105d01d6f95f6088849ffa8",
				"has_community_visible_stats": true
			},
			{
				"appid": 459170,
				"name": "Discovr™ Egypt: King Tut's Tomb",
				"playtime_forever": 4,
				"img_icon_url": "b2a929e29f3d8e419e8feb1980a092e754685371",
				"img_logo_url": "88639c8601bcdbda442fe4b571c59fbf602a6474",
				"has_community_visible_stats": true
			},
			{
				"appid": 477160,
				"name": "Human: Fall Flat",
				"playtime_2weeks": 56,
				"playtime_forever": 113,
				"img_icon_url": "fbd4c6d6ac04408b9ea582f60dc1593e45ce69ab",
				"img_logo_url": "45f1ec8149d34a6e72c9c498a401b649e281cade",
				"has_community_visible_stats": true
			},
			{
				"appid": 484870,
				"name": "Battle Dome",
				"playtime_forever": 55,
				"img_icon_url": "1e8dee0d9ea4f08a9b03ea3b13729b7514ec0356",
				"img_logo_url": "6ab0dc5ed3a6e658fc415c95cc6994796159284e"
			},
			{
				"appid": 359550,
				"name": "Tom Clancy's Rainbow Six Siege",
				"playtime_forever": 83,
				"img_icon_url": "b75ebf437f767a4444d324e1bbbff2a1a74a13ff",
				"img_logo_url": "a2680b1788912ac8bfa5de06802ffd2e786922a9",
				"has_community_visible_stats": true
			},
			{
				"appid": 623990,
				"name": "Tom Clancy's Rainbow Six Siege - Technical Test Server",
				"playtime_forever": 1,
				"img_icon_url": "20deaf466474f76f2ffdb345fe56f40fe3af74c0",
				"img_logo_url": "2cb178152f49b16bf8189e11ff89e0e27cb622f4"
			},
			{
				"appid": 487120,
				"name": "Citadel: Forged With Fire",
				"playtime_forever": 1955,
				"img_icon_url": "01dcc0bff27681d6aee25d687f0c1d652ed1dc5c",
				"img_logo_url": "4472b2a7288f5833b035fad75187a03805085dd6",
				"has_community_visible_stats": true
			},
			{
				"appid": 487250,
				"name": "Spaera",
				"playtime_forever": 0,
				"img_icon_url": "5920a18d3f434c3bcf178af7b78b68100bd381be",
				"img_logo_url": "e2f010ea34035033917ecde1278675d8658f9867",
				"has_community_visible_stats": true
			},
			{
				"appid": 487350,
				"name": "Pirate Pop Plus",
				"playtime_forever": 0,
				"img_icon_url": "574440e1ae108f2429d51ae2dbed0966530aad12",
				"img_logo_url": "419f76a822059d4e04de86ff426b29a694bffeb6",
				"has_community_visible_stats": true
			},
			{
				"appid": 355800,
				"name": "Space Run Galaxy",
				"playtime_forever": 0,
				"img_icon_url": "4e81e735c73a5dadd24cd91464f268e4aa03e33d",
				"img_logo_url": "b8d68c91b09c60f71f6406ed1b15ec2109ef4cb2",
				"has_community_visible_stats": true
			},
			{
				"appid": 34190,
				"name": "Sonic and SEGA All Stars Racing",
				"playtime_forever": 1,
				"img_icon_url": "4d1e6978b6ca1add7e4ab63e966129bef19598f0",
				"img_logo_url": "9c8d20af4ff2655632b371d0cb39b47f14823a28"
			},
			{
				"appid": 202530,
				"name": "SONIC THE HEDGEHOG 4 Episode I",
				"playtime_forever": 0,
				"img_icon_url": "c41474017b2da75cd9cf422d045a91af55ed92a6",
				"img_logo_url": "21b47f8223df647006671630e6f0348642681bab",
				"has_community_visible_stats": true
			},
			{
				"appid": 34270,
				"name": "SEGA Mega Drive & Genesis Classics",
				"playtime_forever": 0,
				"img_icon_url": "48a187fa87c58b798646a430d446dd36eeabd1a4",
				"img_logo_url": "63f7807a9c6acbb8a9359d11f4ec689a1c7a2841",
				"has_community_visible_stats": true
			},
			{
				"appid": 71250,
				"name": "Sonic Adventure DX",
				"playtime_forever": 0,
				"img_icon_url": "6568d25b43e2d1d07fc16cbe3ac9278ca51c2fb3",
				"img_logo_url": "e8374c63e76724af4648cdea5331f4ae39af4d06",
				"has_community_visible_stats": true
			},
			{
				"appid": 200940,
				"name": "Sonic CD",
				"playtime_forever": 0,
				"img_icon_url": "c13c103a631685935bafb047ff5c3a4f9d44d697",
				"img_logo_url": "07f30507b25a239911bd4cf8dd8667dd294fd5b9",
				"has_community_visible_stats": true
			},
			{
				"appid": 71340,
				"name": "Sonic Generations",
				"playtime_forever": 0,
				"img_icon_url": "efda039147f0968bc726c547ff3809f98b69964a",
				"img_logo_url": "21ec1e24c31a50500bbddb8c8c8add451e6dcbe1",
				"has_community_visible_stats": true
			},
			{
				"appid": 203650,
				"name": "SONIC THE HEDGEHOG 4 Episode II",
				"playtime_forever": 0,
				"img_icon_url": "d7a8313da6d6f5d5ce1f8a7efe4d0cbcf22c557c",
				"img_logo_url": "f1a12805277866d2664c99c80a09b04d7767af23",
				"has_community_visible_stats": true
			},
			{
				"appid": 212480,
				"name": "Sonic & All-Stars Racing Transformed Collection",
				"playtime_forever": 12,
				"img_icon_url": "95767af7b08d7ecebf1e9cb1ed1c92c98e4c084f",
				"img_logo_url": "351603b89e1863831c84aacab7bf3a315f03443b",
				"has_community_visible_stats": true
			},
			{
				"appid": 229660,
				"name": "Sonic and All-Stars Racing Transformed Metal Sonic DLC Pack",
				"playtime_forever": 0,
				"img_icon_url": "",
				"img_logo_url": "",
				"has_community_visible_stats": true
			},
			{
				"appid": 329440,
				"name": "Sonic Lost World",
				"playtime_forever": 0,
				"img_icon_url": "db03f24839f0c846601799dc78c9994fff4dc3c7",
				"img_logo_url": "0da4d847bf4852478329054dd08f2fa3319ec6a8",
				"has_community_visible_stats": true
			},
			{
				"appid": 489520,
				"name": "Minion Masters",
				"playtime_forever": 0,
				"img_icon_url": "c17e3a51ac704de8a9a755df9828c7e7a2d7331c",
				"img_logo_url": "d9e07ab82cbdc07195e3cd3846bfd0d8a7c1726e",
				"has_community_visible_stats": true
			},
			{
				"appid": 494720,
				"name": "Morphblade",
				"playtime_forever": 0,
				"img_icon_url": "aa00d7d7728f2a358a1d35786878169ff61885c2",
				"img_logo_url": "8e5ad96d80949632ade3f1498e0ca5e1a292c341"
			},
			{
				"appid": 496190,
				"name": "Senza Peso",
				"playtime_forever": 30,
				"img_icon_url": "0cab569da5e346b9f0912c32458701a2a39d2629",
				"img_logo_url": "80c16b23ff2bf87eedbb2d6d377031ee17283b89"
			},
			{
				"appid": 497820,
				"name": "Quanero",
				"playtime_forever": 16,
				"img_icon_url": "d20e5051371cb87e6d0c8a6aeaee606f87682f79",
				"img_logo_url": "874ab3ee8ea0cefe22913785b323738d3568f5ef"
			},
			{
				"appid": 273350,
				"name": "Evolve Stage 2",
				"playtime_forever": 136,
				"img_icon_url": "6b9e205c389185a4b0e079a13090c751e47375d2",
				"img_logo_url": "df025d71b278e46eb9322230bbd19c0cb8004b0d"
			},
			{
				"appid": 500660,
				"name": "Limberjack",
				"playtime_forever": 11,
				"img_icon_url": "198ec131f16520c802ddaa312f6810207dd3e5f1",
				"img_logo_url": "b64d767f8e749f837c42df5aff6a1076a3a4680a",
				"has_community_visible_stats": true
			},
			{
				"appid": 501180,
				"name": "Acan's Call: Act 1",
				"playtime_forever": 0,
				"img_icon_url": "7bb591a575f29c49e4b2444058a6bd4cc054463c",
				"img_logo_url": "d7dc666bd2160e1ac530f70cae9f9770fc38a4f8"
			},
			{
				"appid": 503630,
				"name": "INVASION!",
				"playtime_forever": 7,
				"img_icon_url": "830de5d204c71b68937f9738bf9f995fdfd526ba",
				"img_logo_url": "be8ca487a1a346ea1340e9b44d67e5c39f1a2a03"
			},
			{
				"appid": 508790,
				"name": "Flat Heroes",
				"playtime_forever": 4,
				"img_icon_url": "e0e9f0c8b876493c28bc9359dd6cb946d1446abf",
				"img_logo_url": "87cdb86d663a7ff112d48182803f7e7073f9a544"
			},
			{
				"appid": 512300,
				"name": "Unbox",
				"playtime_forever": 70,
				"img_icon_url": "84e1d73b26645531002def4b04ecbd1952a49d7c",
				"img_logo_url": "9ce908f6c2f8369a5aba54606b306e8ee556d384",
				"has_community_visible_stats": true
			},
			{
				"appid": 518580,
				"name": "Accounting",
				"playtime_forever": 43,
				"img_icon_url": "be9fabff331bef430236c3aaa39720c68cc0aa0f",
				"img_logo_url": "afccecba0d315e60b485d4e00c18847db32c0392"
			},
			{
				"appid": 289070,
				"name": "Sid Meier's Civilization VI",
				"playtime_forever": 211,
				"img_icon_url": "9dc914132fec244adcede62fb8e7524a72a7398c",
				"img_logo_url": "356443a094f8e20ce21293039d7226eac3d3b4d9",
				"has_community_visible_stats": true
			},
			{
				"appid": 528580,
				"name": "Found",
				"playtime_forever": 0,
				"img_icon_url": "0fd13eb750f3bb922902a5e2296d8cbd6f4b59ec",
				"img_logo_url": "0cd599c04974babc385fc9b995d2afa9baad6d68",
				"has_community_visible_stats": true
			},
			{
				"appid": 549920,
				"name": "VRchaeology: Prologue",
				"playtime_forever": 0,
				"img_icon_url": "8aac534f533695ea08271beb6e9ea529f23b4e7a",
				"img_logo_url": "78063958651aeb82e48995068b73f9766cd6466c"
			},
			{
				"appid": 553960,
				"name": "Husk",
				"playtime_forever": 0,
				"img_icon_url": "cdb5ed0261a8f75ff2d140e0f6851bd6a88d6aed",
				"img_logo_url": "18ce17f093c56402d846a172bd59a3bd60a120b9",
				"has_community_visible_stats": true
			},
			{
				"appid": 561080,
				"name": "The Price of Freedom",
				"playtime_forever": 17,
				"img_icon_url": "78a1f09077078e0a70a16ae1f68632bae33156fd",
				"img_logo_url": "ac4dcd47d6ffe77f6f530cf7af89c8c2b1dce734",
				"has_community_visible_stats": true
			},
			{
				"appid": 565030,
				"name": "Blueshift",
				"playtime_forever": 76,
				"img_icon_url": "4ecfaad77d499fba80cfb18d2520a7d0709d7ea9",
				"img_logo_url": "f823217b281993f241275a44c0bde49feb2bb7c1"
			},
			{
				"appid": 578310,
				"name": "BRAIN / OUT",
				"playtime_forever": 78,
				"img_icon_url": "e710a604dd870c0623aa9875ae9d9de1ce7e018f",
				"img_logo_url": "423894aa9dee687c362d50c562a0a7e11e5391c6",
				"has_community_visible_stats": true
			},
			{
				"appid": 580200,
				"name": "Yonder: The Cloud Catcher Chronicles",
				"playtime_forever": 133,
				"img_icon_url": "5a43428017f92eeb62f89a3c8b6b3d465ce87cad",
				"img_logo_url": "345197910d505d7ee88cffe7eaf6907a9873f6ec",
				"has_community_visible_stats": true
			},
			{
				"appid": 584170,
				"name": "Freedom Locomotion VR",
				"playtime_forever": 0,
				"img_icon_url": "cee63ea6cd31686e8601d0dc99bb78c167f9d7ca",
				"img_logo_url": "91d47dfe7bfe688a8f3e67e8866d74d877d9dac5"
			},
			{
				"appid": 434510,
				"name": "Formicide",
				"playtime_forever": 93,
				"img_icon_url": "9e275cc7f0c3edf183a99d35da0dd39293b458d7",
				"img_logo_url": "4fd354f9eb88150d7349ce42f24933c1da554425"
			},
			{
				"appid": 356190,
				"name": "Middle-earth™: Shadow of War™",
				"playtime_forever": 251,
				"img_icon_url": "316c479e5d51d21e15eb8f82338fce82c42c4115",
				"img_logo_url": "5c8d36880cac09260240bc8931df20a7a19f3933",
				"has_community_visible_stats": true
			},
			{
				"appid": 600140,
				"name": "Belko VR: An Escape Room Experiment",
				"playtime_forever": 28,
				"img_icon_url": "6c6048d36f7929a43fe5f4d76e47f9d552765925",
				"img_logo_url": "d1a2327c85e9829db33e4cd53ec3e6dd394804f7"
			},
			{
				"appid": 626680,
				"name": "Kreedz Climbing",
				"playtime_forever": 23,
				"img_icon_url": "9c9e2463d9ad8d83d12466b78a2cd55a55aec8a3",
				"img_logo_url": "f24e5512edcb1c923484205fe266fe475d8954cc",
				"has_community_visible_stats": true
			},
			{
				"appid": 594490,
				"name": "Deadly Hunter VR",
				"playtime_forever": 11,
				"img_icon_url": "db3bd4125aeb0709919267fb85d1cb2dabd6618f",
				"img_logo_url": "b4beab8b15dd80abe499a2e33bba182565473e2f",
				"has_community_visible_stats": true
			},
			{
				"appid": 645480,
				"name": "Spider-Man: Homecoming - Virtual Reality Experience",
				"playtime_forever": 7,
				"img_icon_url": "561dc9185bfa33898dc119aff62526211013e9c3",
				"img_logo_url": "aeb5ceea8d597dad6f2568284fc9dbd4aba3e30d"
			},
			{
				"appid": 660880,
				"name": "b",
				"playtime_forever": 8,
				"img_icon_url": "961d1f2b6094eb72a91b5b62d0e39c40fa40eb7c",
				"img_logo_url": "f60a1055470e2975a0f7d1189dcb823df7d39dd5"
			},
			{
				"appid": 674940,
				"name": "Stick Fight: The Game",
				"playtime_forever": 42,
				"img_icon_url": "28bc7ba8952d488e01e7136126cbbc3b42ee443a",
				"img_logo_url": "f28c0524f32688b6b69fcbbcefb94ac7a95f18e4",
				"has_community_visible_stats": true
			},
			{
				"appid": 240720,
				"name": "Getting Over It with Bennett Foddy",
				"playtime_forever": 155,
				"img_icon_url": "161090eb78acf2e28333e8ae182121d906f1ee85",
				"img_logo_url": "4853f6e902fb72ffa4207fc1397c436fd3c02dcc",
				"has_community_visible_stats": true
			},
			{
				"appid": 466240,
				"name": "Deceit",
				"playtime_forever": 9,
				"img_icon_url": "e8887d08926e8b6e76221f0077e05b8a64d54e52",
				"img_logo_url": "d6fbc0126c00d030d3e82478b3acd2595a0cdc08",
				"has_community_visible_stats": true
			},
			{
				"appid": 763740,
				"name": "NARK THE DRAGON",
				"playtime_forever": 0,
				"img_icon_url": "50f2324038fb9965e172c929fadfd0721694add3",
				"img_logo_url": "9d28a8ad11b9c10c0d27b02b273f46694d9c287f",
				"has_community_visible_stats": true
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
