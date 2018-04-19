import React, { Component } from 'react';

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

FlashMessage.defaultProps = {

};
