import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

import Swipeable from 'react-swipeable';

import CardHeading from './CardHeading';

import BackButton from '../UtilityComponent/BackButton';

import InterestedButton from '../UtilityComponent/InterestedButton';

import styles from './CardBottomPart.css';

export default class CardBottomPart extends Component{

	constructor(){
    	super();
	}

	hideCardDetail = (e) => {
		e.stopPropagation();
		const { toggleCardState } = this.props;
		toggleCardState();
	}

	swiped = (e, deltaX, deltaY, isFlick, velocity) => {
        console.log("You Swiped...", e, deltaX, deltaY, isFlick, velocity);
        if(deltaY < 0){
            const { toggleCardState } = this.props;
            toggleCardState();
        }
    }

	render = () => {

		const { currentCardState, cardData } = this.props;

		const cardClass = (currentCardState && currentCardState === "cardDetail") ?

							`${styles.cardDetailWrapper} ${styles.visible}` : 

							`${styles.cardDetailWrapper}`;


		// if(currentCardState === "cardDetail"){

			return (

				<div className={cardClass}>

					<Swipeable onSwiped={this.swiped}>

						<div className={`${styles.topBlankPart}`}
							onClick={this.hideCardDetail}>
							
							{currentCardState && currentCardState === "cardDetail" && 
						
								<BackButton />

							}
							
						</div>

					</Swipeable>
	
					<div className={`${styles.cardContentHolder}`}>

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
	
				</div>
	
			);

		// }else{

		// 	return null;

		// }

	}
	
};

CardBottomPart.defaultProps = {

};
