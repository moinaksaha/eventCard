import React, { Component } from 'react';

import { Image } from 'react-bootstrap';

import styles from './CardImage.css';

const canUseDOM = !!((typeof window !== 'undefined' && window.document && window.document.createElement));

let width = 0;

let height = 0;

export default class CardImage extends Component{

	constructor(){
		super();
	}

	showHideDetail = (e) => {
		e.stopPropagation();
		const { toggleCardState, position } = this.props;
		if(position === 0){
			toggleCardState();
		}
	}

	render = () => {

		const { cardData, position, toggleCardState, currentCardState } = this.props;

		const imageStyle = {
			backgroundImage: 'url("'+cardData.image_url+'")',
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			marginLeft: 60*position + 'px',
			marginTop: 20*position + 'px',
			zIndex: 999-position,
			opacity: 1 - (0.2*position),
			// width: "80%" - (40*position) + 'px',
			// height: "100%" - (40*position) + 'px',
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
