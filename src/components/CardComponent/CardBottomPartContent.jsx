import React, { Component } from 'react';

// PropTypes Imports
import PropTypes from 'prop-types';

// component imports
import CardHeading from './CardHeading';
import InterestedButton from '../UtilityComponent/InterestedButton';

// CSS Imports
import styles from './CardBottomPartContent.css';

export default class CardBottomPartContent extends Component{

	render = () => {

		const { cardData } = this.props;

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

// props validation
CardBottomPartContent.defaultProps = {
	cardData: PropTypes.object
};
