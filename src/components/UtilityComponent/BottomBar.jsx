import React, { Component } from 'react';

// Imports from Bootstrap
import { Glyphicon } from 'react-bootstrap';

// CSS Imports
import styles from './BottomBar.css';

export default class BottomBar extends Component{

	render = () => {

		return (

			<div className={`clearfix ${styles.bottomButtonHolder}`}>

                <div className={`pull-left ${styles.leftHamburger}`}>

                    <Glyphicon glyph="menu-hamburger" />

                </div>

                <div className={`pull-right ${styles.createButton}`}>

                    <span><Glyphicon glyph="plus"/></span>

                    <span className={`${styles.createText}`}>Create Event</span>
					
                </div>

            </div>

		);

	}
	
};
