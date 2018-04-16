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
		this.state = {
			cardData : []
		}
	}

	componentWillReceiveProps = (nextProps) => {
		// if(nextProps.currentCardState && nextProps.currentCardState === "cardDetail"){
		// 	this.setCardDetailData();
		// }else{
		// 	this.unsetCardDetailData();
		// }
	}

	setCardDetailData = () => {
		const { cardData } = this.props;
		this.setState((prevState) => ({
			cardData: cardData
		}))
	}

	unsetCardDetailData = () => {
		this.setState((prevState) => ({
			cardData: []
		}))
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

			return (

				<div className={cardClass}>

					<Swipeable onSwiped={this.swiped}>

						<div className={`${styles.topBlankPart}`}
							onClick={this.hideCardDetail}>
							
							{currentCardState && currentCardState === "cardDetail" && 
						
								<BackButton text={`Event Detail`}
											isCardDetail={true}/>

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

	}
	
};

CardBottomPart.defaultProps = {

};
