import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

import styles from './CardHeading.css';

export default class CardHeading extends Component{

	constructor(){
    	super();
	}

	render = () => {

		const { cardData, position, forCardDetail } = this.props;

		console.log(cardData);

		const cardHeadingClassName = (forCardDetail === true) ? 
									`${styles.cardHeading}`:
									`${styles.cardHeading} ${styles.isNotCardDetail}`;
		
		// const cardDateClassName = (forCardDetail === true) ? 
		// 							`${styles.cardDateNew}`:
		// 							`${styles.cardDateNew} pull-right`;

		// if(position === 0){

			return (

				<div className={cardHeadingClassName}>

					<div className={`${styles.titleLocationWrapper}`}>
	
						<div className={`${styles.cardTitle}`}>{cardData.title}</div>
		
						<div className={`${styles.cardLocation}`}>

							<span><Glyphicon glyph="map-marker" /></span>

							<span className={`${styles.cardLocationText}`}>{cardData.location}</span>
							
						</div>

					</div>

					<div className={`${styles.cardDateNew}`}>{cardData.date}</div>
					
					{/* <div className={cardDateClassName}>{cardData.date}</div> */}
	
				</div>
	
			);

		// }else{

		// 	return null;

		// }
		

	}
	
};

CardHeading.defaultProps = {

};
