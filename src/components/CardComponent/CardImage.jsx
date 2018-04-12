import React, { Component } from 'react';

import { Image } from 'react-bootstrap';
 
import styles from './CardImage.css';

export default class CardImage extends Component{

	constructor(){
    	super();
	}

	render = () => {

		const { cardData } = this.props;

		const imageStyle = {
			backgroundImage: 'url("'+cardData.image_url+'")',
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
		};

		return (

			<div className={`text-center ${styles.cardImageWrapper}`}>

				<div className={`${styles.cardImageDiv}`} style={imageStyle}></div>

                {/* <Image src={cardData.image_url} height={200} width={150} /> */}

            </div>

		);

	}
	
};

CardImage.defaultProps = {

};
