import React, { Component } from 'react';

import styles from './CardImage.css';

export default class CardImage extends Component{

	showHideDetail = (e) => {
		e.stopPropagation();
		const { toggleCardState, position } = this.props;
		if(position === 0){
			toggleCardState();
		}
	}

	render = () => {

		const { cardData, position, currentCardState } = this.props;

		const imageStyle = {
			backgroundImage: 'url("'+cardData.image_url+'")',
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			marginLeft: 60*position + 'px',
			marginTop: 20*position + 'px',
			zIndex: 999-position,
			opacity: 1 - (0.2*position),
			width: `calc(80vw - ${40*position}px)`,
			height: `calc(100% - ${40*position}px)`
		};

		const cardDetailClass = (currentCardState && currentCardState === "cardDetail" && position === 0) ? 
									`text-center ${styles.cardImageDiv} ${styles.fixed}` :
									`text-center ${styles.cardImageDiv}`;


		return (

			<div className={cardDetailClass} 
				 style={imageStyle}
				 onClick={this.showHideDetail}></div>

		);

	}
	
};

CardImage.defaultProps = {

};
