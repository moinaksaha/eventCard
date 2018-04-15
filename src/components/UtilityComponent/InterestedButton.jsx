import React, { Component } from 'react';

import styles from './InterestedButton.css';

export default class InterestedButton extends Component{

	constructor(){
        super();
        this.state = {
            isGoing: false
        }
    }
    
    toggleAction = () => {
        this.setState((prevState) => ({
            isGoing: !prevState.isGoing
        }))
    }

	render = () => {

        const displayText = (this.state.isGoing) ? 
                            `Going` : 
                            `Interested`;

        const isGoingClassName = (this.state.isGoing)?
                                    `${styles.interestedButton} ${styles.isGoing}`:
                                    `${styles.interestedButton}`;

		return (

            <div className={isGoingClassName}
                    onClick={this.toggleAction}>

                {displayText}

            </div>

		);

	}
	
};

InterestedButton.defaultProps = {

};
