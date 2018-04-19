import React, { Component } from 'react';

// PropTypes Import
import PropTypes from 'prop-types';

// Imports from Bootstrap
import styles from './CardImage.css';

export default class CardImage extends Component{

	// Function to call 'toggleCardState' in CardWrapper on clicking on the top image
	// 'toggleCardState' changes the state from 'carousel' to 'cardDetail' in 'Home.js'
	showHideDetail = (e) => {
		e.stopPropagation();
		const { toggleCardState, position } = this.props;
		if(position === 0){
			toggleCardState();
		}
	}

	render = () => {

		const { cardData, position, currentCardState } = this.props;

		// Dynamically styling individual card according to it's position in the slider
		// this is based on the index value ('position') provided by the map function
		const imageStyle = {
			backgroundImage: 'url("'+cardData.image_url+'")',
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			marginLeft: 60*position + 'px',
			marginTop: 20*position + 'px',
			zIndex: 999-position,
			opacity: 1 - (0.2*position),
			width: `calc(80% - ${40*position}px)`,
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

// props validation
CardImage.defaultProps = {
	cardData: PropTypes.array,
	position: PropTypes.number,
	currentCardState: PropTypes.string
};
