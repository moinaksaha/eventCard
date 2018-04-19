import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

import styles from './CardHeading.css';

export default class CardHeading extends Component{

	render = () => {

		const { cardData, forCardDetail } = this.props;

		const cardHeadingClassName = (forCardDetail === true) ? 
									`${styles.cardHeading}`:
									`${styles.cardHeading} ${styles.isNotCardDetail}`;

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

			</div>

		);
		
	}
	
};

CardHeading.defaultProps = {

};
