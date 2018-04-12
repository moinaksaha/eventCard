import React, { Component } from 'react';

import styles from './IndividualCard.css';

import CardImage from '../CardComponent/CardImage'

import CardHeading from '../CardComponent/CardHeading'

import CardBottomPart from '../CardComponent/CardBottomPart'

export default class IndividualCard extends Component{

	constructor(){
    	super();
	}

	render = () => {

		const { cardData } = this.props;

		return (

			<div className={``}>

                <CardHeading cardData={cardData}/>

                <CardImage cardData={cardData}/>

                <CardBottomPart cardData={cardData}/>

            </div>

		);

	}
	
};

IndividualCard.defaultProps = {

};
