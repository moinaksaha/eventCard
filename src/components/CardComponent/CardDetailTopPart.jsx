import React, { Component } from 'react';


import InterestedButton from '../UtilityComponent/InterestedButton';

import CardHeading from './CardHeading';

import styles from './CardDetailTopPart.css';

export default class CardDetailTopPart extends Component{

	constructor(){
    	super();
	}

	render = () => {

        const { cardData } = this.props;
        
        console.log(cardData)

		return (

			<div className={`${styles.cardDetailTopPart}`}>

                <CardHeading cardData={cardData}
                            forCardDetail={true}/>

                <div className={`${styles.interestedButtonHolder}`}>

                    <InterestedButton />

                </div>

            </div>

		);

	}
	
};

CardDetailTopPart.defaultProps = {

};
