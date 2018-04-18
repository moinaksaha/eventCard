import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

import CardHeading from './CardHeading';

import InterestedButton from '../UtilityComponent/InterestedButton';

import styles from './CardBottomPartContent.css';

export default class CardBottomPartContent extends Component{

	constructor(){
    	super();
	}

	render = () => {

		const { cardData } = this.props;

		return (

			<div>

				<div className={`${styles.cardDetailTopPart}`}>

					<CardHeading cardData={cardData}
								forCardDetail={true}/>

					<div className={`${styles.interestedButtonHolder}`}>

						<InterestedButton />

					</div>

				</div>

				<div className={`${styles.calendarSyncDiv}`}>

					<div>Add to calendar</div>

					<div className={`pull-right`}>

						<span className={`${styles.knowMoreText}`}>Know More</span>

						<span><Glyphicon glyph="arrow-right" /></span>

					</div>

				</div>

            </div>

		);

	}
	
};

CardBottomPartContent.defaultProps = {

};
