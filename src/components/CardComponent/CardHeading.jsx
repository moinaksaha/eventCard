import React, { Component } from 'react';

// PropTypes Imports
import PropTypes from 'prop-types';

// Imports from Bootstrap
import { Glyphicon } from 'react-bootstrap';

// CSS Imports
import styles from './CardHeading.css';

export default class CardHeading extends Component{

	render = () => {

		const { cardData, forCardDetail } = this.props;

		// Styling based on the 'forCardDetail' prop
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
	cardData: PropTypes.object
};
