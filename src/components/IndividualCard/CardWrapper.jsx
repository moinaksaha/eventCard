import React, { Component } from 'react';

// PropTypes Import
import PropTypes from 'prop-types';

// Import Swipeable 
// Reference - https://github.com/dogfessional/react-swipeable
import Swipeable from 'react-swipeable';

// CSSTransitionGroup Imports
// Reference - https://github.com/reactjs/react-transition-group/tree/v1-stable
import { CSSTransitionGroup } from 'react-transition-group'

// Card sections Imports
import CardImage from '../CardComponent/CardImage'
import CardHeading from '../CardComponent/CardHeading'

// Styles import
import styles from './CardWrapper.css';

export default class CardWrapper extends Component{

	constructor(){
        super();
        // Initial State - Empty array
        this.state = {
            displayData: []
        }
    }

    // Set the Initial state of cards on the slider with all the cards data
    componentDidMount = () => {
        const { allCardData, currentCardIndex } = this.props;
        this.setState({
            displayData: allCardData.slice(currentCardIndex)
        })
    }

    // Change the state value of cards array on recieving an updated 'currentCardIndex'
    // By calling 'changeDisplayData' function
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.currentCardIndex !== this.props.currentCardIndex){
            this.changeDisplayData(nextProps.currentCardIndex);
        }
    }

    // Function to change the value of 'displayData' when it recieves an index
    changeDisplayData = (index) => {
        this.setState((prevState, props) => ({
            displayData: props.allCardData.slice(index)
        }))
    }

    // handles swipe left or right on the card slider div
    // Function called when a 'swipe' event is performed on the card holder div
    // Checks of the swipe distance is greater than a particular threshold(here 40px).
    // Then calls 'nextCard' or 'prevCard' according to the deltaX swipe distance
    swiped = (e, deltaX, deltaY, isFlick, velocity) => {
        if(deltaX > 40){
            const { nextCard } = this.props;
            nextCard();
        }else if(deltaX < -40){
            const { prevCard } = this.props;
            prevCard();
        }
    }

	render = () => {

        // Destructuring props
        const { allCardData, 
                toggleCardState, 
                currentCardState, 
                currentCardIndex, 
                swipeDirection } = this.props;
        
        // Filters the data of the current card in focus
        const currentCardData = allCardData.slice(currentCardIndex, currentCardIndex+1);
        
        // Style mapper to handle the different animation according to the swipe direction
        let cardHeaderAnimationClassNames = null;

        if(swipeDirection === "left"){
            cardHeaderAnimationClassNames = {
                enter: `${styles.enterHeading}`,
                enterActive: `${styles.enterActiveHeading}`,
                leave: `${styles.leaveHeading}`,
                leaveActive: `${styles.leaveActiveHeading}`
            } 
        }else if(swipeDirection === "right"){
            cardHeaderAnimationClassNames = {
                enter: `${styles.enterHeadingInverted}`,
                enterActive: `${styles.enterActiveHeadingInverted}`,
                leave: `${styles.leaveHeadingInverted}`,
                leaveActive: `${styles.leaveActiveHeadingInverted}`
            } 
        }

        if(this.state.displayData && this.state.displayData.length>0){

            return (

                <div>

                    {/* CARD HEADING */}

                    <div className={`${styles.headingWrapper}`}>

                        <CSSTransitionGroup
                            transitionName={cardHeaderAnimationClassNames}
                            transitionLeaveTimeout={300}
                            transitionEnterTimeout={300}>

                            {(currentCardData.map((object, i) => {

                                return(

                                    <CardHeading cardData={object} key={object.id}/>

                                )

                            }))}
                            
                        </CSSTransitionGroup>

                    </div>

                    {/* CARD IMAGE */}
                    <Swipeable onSwiped={this.swiped}>
    
                        <div className={`text-center ${styles.cardImageWrapper}`}>

                        <CSSTransitionGroup transitionName={{
                                                enter: `${styles.enter}`,
                                                enterActive: `${styles.enterActive}`,
                                                leave: `${styles.leave}`,
                                                leaveActive: `${styles.leaveActive}`
                                            } }
                                            transitionEnterTimeout={500}
                                            transitionLeaveTimeout={300}>
    
                            {this.state.displayData.map((object, i) => {
    
                                return(
                            
                                    <CardImage cardData={object}
                                            key={object.id}
                                            position={i}
                                            toggleCardState={toggleCardState}
                                            currentCardState={currentCardState}/>
    
                                )
    
                            })}

                        </CSSTransitionGroup>

                        </div>

                    </Swipeable>
    
                </div>
    
            );

        }else{

            return null;

        }

	}
	
};

CardWrapper.defaultProps = {
    swipeDirection: PropTypes.string,
    allCardData: PropTypes.array, 
    toggleCardState: PropTypes.func, 
    currentCardState: PropTypes.string,
    currentCardIndex:PropTypes.number
};
