import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Imports from Bootstrap
import styles from './FlashMessage.css';

export default class FlashMessage extends Component{

	render = () => {

        const { text } = this.props;

		return (

            <div className={`${styles.flashMessageText}`}>

                {text}

            </div>

		);

	}
	
};

// Proptype validation
FlashMessage.defaultProps = {
    hildren: PropTypes.string.isRequired
};
