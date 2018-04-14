import React, { Component } from 'react';

import Swipeable from 'react-swipeable';

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

							`text-center ${styles.cardDetailWrapper} ${styles.visible}` : 

							`text-center ${styles.cardDetailWrapper}`;


		// if(currentCardState === "cardDetail"){

			return (

				<div className={cardClass}>

					<Swipeable onSwiped={this.swiped}>

						<div className={`${styles.topBlankPart}`}
							onClick={this.hideCardDetail}></div>

					</Swipeable>
	
					<div className={`${styles.cardContentHolder}`}>
	
						{cardData[0].text}

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
