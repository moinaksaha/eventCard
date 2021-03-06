import React, { Component } from 'react';

// Imports from Bootstrap
import { Glyphicon } from 'react-bootstrap';

// CSS Imports
import styles from './CardBottomPartCalendar.css';

export default class CardBottomPartCalendar extends Component{

	render = () => {

		return (

			<div className={`${styles.calendarSyncDiv}`}>

				<div>Add to calendar</div>

				<div className={`pull-right`}>

					<span className={`${styles.knowMoreText}`}>Know More</span>

					<span><Glyphicon glyph="arrow-right" /></span>

				</div>

			</div>

		);

	}
	
};
