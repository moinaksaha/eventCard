import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Glyphicon } from 'react-bootstrap';

import styles from './BackButton.css';

export default class BackButton extends Component{

	render = () => {

		const { text, isCardDetail } = this.props;

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
