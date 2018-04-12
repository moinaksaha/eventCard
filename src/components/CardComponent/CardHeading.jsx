import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

import styles from './CardHeading.css';

export default class CardHeading extends Component{

	constructor(){
    	super();
	}

	render = () => {

		const { cardData } = this.props;

		return (

			<div className={`${styles.cardHeading}`}>

				<div className={`${styles.cardDate}`}>{cardData.date}</div>

                <div className={`${styles.cardTitle}`}>{cardData.title}</div>

				<div className={`${styles.cardLocation}`}>
					<span><Glyphicon glyph="map-marker" /></span>
					<span className={`${styles.cardLocationText}`}>{cardData.location}</span>
				</div>



            </div>

		);

	}
	
};

CardHeading.defaultProps = {

};
