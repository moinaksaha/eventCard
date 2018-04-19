import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Swipeable from 'react-swipeable';

import { CSSTransitionGroup } from 'react-transition-group'

// Card sections
import CardImage from '../CardComponent/CardImage'
import CardHeading from '../CardComponent/CardHeading'

// Styles import
import styles from './CardWrapper.css';

export default class CardWrapper extends Component{

	constructor(){
        super();
        this.state = {
            displayData: []
        }
    }

    componentDidMount = () => {
        const { allCardData, currentCardIndex } = this.props;
        this.setState({
            displayData: allCardData.slice(currentCardIndex)
        })
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.currentCardIndex !== this.props.currentCardIndex){
            this.changeDisplayData(nextProps.currentCardIndex);
        }
    }

    changeDisplayData = (index) => {
        this.setState((prevState, props) => ({
            displayData: props.allCardData.slice(index)
        }))
    }

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

        const { allCardData, 
                toggleCardState, 
                currentCardState, 
                currentCardIndex, 
                swipeDirection } = this.props;

        const currentCardData = allCardData.slice(currentCardIndex, currentCardIndex+1);

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
