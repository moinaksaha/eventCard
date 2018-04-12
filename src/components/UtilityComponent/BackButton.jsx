import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

import styles from './BackButton.css';

export default class BackButton extends Component{

	constructor(){
    	super();
	}

	render = () => {

		// const { message } = this.props;

		// const { buttonAttribute } = this.props;

		const buttonAttribute = {
			text: "Event"
		}

		return (

			<div className={`${styles.backButtonWrapper}`}>

                <span><Glyphicon glyph="menu-left" /></span>

				<span className={`${styles.backButtonText}`}>Event</span>

            </div>

		);

	}
	
};

BackButton.defaultProps = {

};
