import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

import styles from './BottomBar.css';

export default class BottomBar extends Component{

	constructor(){
    	super();
	}

	render = () => {

		// const { message } = this.props;

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

BottomBar.defaultProps = {

};
