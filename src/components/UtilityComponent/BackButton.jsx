import React, { Component } from 'react';

// PropTypes Import 
import PropTypes from 'prop-types';

// Imports from Bootstrap
import { Glyphicon } from 'react-bootstrap';

// CSS Imports
import styles from './BackButton.css';

export default class BackButton extends Component{

	render = () => {
		// Props import
		const { text, isCardDetail } = this.props;

		// className according to 'isCardDetail'
		const backButtonWrapperClassName = (!isCardDetail) ?
											`${styles.backButtonWrapper}`:
											`${styles.backButtonWrapper} ${styles.shadow}`;

		return (

			<div className={backButtonWrapperClassName}>

                <Glyphicon glyph="menu-left" />

				<span className={`${styles.backButtonText}`}>{text}</span>

            </div>

		);

	}
	
};

BackButton.defaultProps = {
	text: PropTypes.string
};
