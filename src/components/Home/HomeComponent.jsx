import React, { Component } from 'react';

import styles from './HomeComponent.css';

export default class HomeComponent extends Component{

	constructor(){
    	super();
	}

	render = () => {

		const { message } = this.props;

		return (

			<div className={`text-center`}>

                {message}

            </div>

		);

	}
	
};

HomeComponent.defaultProps = {

};
