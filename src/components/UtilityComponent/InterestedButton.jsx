import React, { Component } from 'react';

// CSS Imports
import styles from './InterestedButton.css';

export default class InterestedButton extends Component{

	constructor(){
        super();
        // Initial State
        this.state = {
            isGoing: false //To decide the state of the button
        }
    }
    
    // FUNCTION TO TOGGLE THE value of 'isGoing' 
    toggleAction = () => {
        this.setState((prevState) => ({
            isGoing: !prevState.isGoing
        }))
    }

	render = () => {

        // className according to the value of 'isGoing'
        const isGoingClassName = (this.state.isGoing)?
                                    `${styles.flipButtonContainer} ${styles.isGoing}`:
                                    `${styles.flipButtonContainer}`;

		return (

            <div className={`${styles.interestedButton}`}
                 onClick={this.toggleAction}>

                    {/* {displayText} */}
                    <div className={isGoingClassName}>

                        <div className={`${styles.buttonWrapper} ${styles.shadow}`}>

                            <div className={`${styles.front} ${styles.face}`}>

                                Interested

                            </div>

                            <div className={`${styles.back} ${styles.face}`}>

                                Going

                            </div>

                        </div>

                    </div>

            </div>
            

		);

	}
	
};
