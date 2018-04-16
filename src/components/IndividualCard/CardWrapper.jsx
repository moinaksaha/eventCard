import React, { Component } from 'react';

import debounce from 'lodash.debounce'

import Swipeable from 'react-swipeable';

import { CSSTransitionGroup } from 'react-transition-group'

import styles from './CardWrapper.css';

import CardImage from '../CardComponent/CardImage'

import CardHeading from '../CardComponent/CardHeading'

import CardBottomPart from '../CardComponent/CardBottomPart'

// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class CardWrapper extends Component{

	constructor(){
        super();
        this.state = {
            displayData: [],
            allCardData: [],
            currentSwipeDirection: "left"
        }
    }

    componentDidMount = () => {
        const { allCardData, currentCardIndex } = this.props;
        // console.log("duh", allCardData, currentCardIndex)
        this.setState({
            displayData: allCardData.slice(currentCardIndex),
            allCardData: allCardData
        })
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.currentCardIndex !== this.props.currentCardIndex){
            this.changeDisplayData(nextProps.currentCardIndex);
        }
    }

    changeDisplayData = (index) => {
        this.setState((prevState) => ({
            displayData: prevState.allCardData.slice(index)
        }))
    }

    changeCurrentSwipeDirection = (direction) => {
        if(direction && (direction!== this.state.currentSwipeDirection )){
            this.setState((prevState) => ({
                currentSwipeDirection: direction
            }))
        }
    }

    swiped = (e, deltaX, deltaY, isFlick, velocity) => {
        console.log("You Swiped...", e, deltaX, deltaY, isFlick, velocity);
        if(deltaX > 0){
            this.changeCurrentSwipeDirection("right");
            const { nextCard } = this.props;
            nextCard();
        }else{
            this.changeCurrentSwipeDirection("left");
            const { prevCard } = this.props;
            prevCard();
        }
    }

	render = () => {

        const { toggleCardState, currentCardState, currentCardIndex, swipeDirection } = this.props;

        const currentCardData = this.state.allCardData.slice(currentCardIndex, currentCardIndex+1);

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

                <div className={``}>

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
                                                leaveActive: `${styles.leaveActive}`,
                                                appear: `${styles.appear}`,
                                                appearActive: `${styles.appearActive}`
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

};
