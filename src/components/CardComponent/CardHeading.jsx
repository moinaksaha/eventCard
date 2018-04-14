import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

import styles from './CardHeading.css';

export default class CardHeading extends Component{

	constructor(){
    	super();
	}

	render = () => {

		const { cardData, position } = this.props;

		// if(position === 0){

			return (

				<div className={`${styles.cardHeading}`}>
	
					<div className={`${styles.cardDate}`}>{cardData[0].date}</div>
	
					<div className={`${styles.cardTitle}`}>{cardData[0].title}</div>
	
					<div className={`${styles.cardLocation}`}>

						<span><Glyphicon glyph="map-marker" /></span>

						<span className={`${styles.cardLocationText}`}>{cardData[0].location}</span>
						
					</div>
	
				</div>
	
			);

		// }else{

		// 	return null;

		// }
		

	}
	
};

CardHeading.defaultProps = {

};
