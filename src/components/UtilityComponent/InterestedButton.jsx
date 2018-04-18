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

        // const displayText = (this.state.isGoing) ? 
        //                     `Going` : 
        //                     `Interested`;

        const isGoingClassName = (this.state.isGoing)?
                                    `${styles.f1_container} ${styles.isGoing}`:
                                    `${styles.f1_container}`;

		return (

            <div className={`${styles.interestedButton}`}
                 onClick={this.toggleAction}>

                    {/* {displayText} */}
                    <div className={isGoingClassName}>

                        <div className={`${styles.f1_card} ${styles.shadow}`}>

                            <div className={`${styles.front} ${styles.face}`}>

                                Interested

                            </div>

                            <div className={`${styles.back} ${styles.face} ${styles.center}`}>

                                Going

                            </div>

                        </div>

                    </div>

            </div>
            

		);

	}
	
};

InterestedButton.defaultProps = {

};
