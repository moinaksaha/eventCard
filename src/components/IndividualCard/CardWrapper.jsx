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
            allCardData: []
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

    swiped = (e, deltaX, deltaY, isFlick, velocity) => {
        console.log("You Swiped...", e, deltaX, deltaY, isFlick, velocity);
        if(deltaX > 0){
            const { nextCard } = this.props;
            nextCard();
        }else{
            const { prevCard } = this.props;
            prevCard()
        }
    }

	render = () => {

        const { toggleCardState, currentCardState, currentCardIndex } = this.props;

        // const { allCardData, currentCardIndex } = this.props;

        // console.log(styles)

        // const currentCardData = this.state.displayData.slice(0, 1);
        const currentCardData = this.state.allCardData.slice(currentCardIndex, currentCardIndex+1);

        console.log(currentCardData)

        // console.log(this.state.displayData)

        if(this.state.displayData && this.state.displayData.length>0){

            return (

                <div className={``}>

                    {/* <CSSTransitionGroup
                        transitionName={{
                            enter: `${styles.enterHeadingNew}`,
                            enterActive: `${styles.enterActiveHeadingNew}`,
                            leave: `${styles.leaveHeadingNew}`,
                            leaveActive: `${styles.leaveActiveHeadingNew}`,
                            appear: `${styles.appearHeadingNew}`,
                            appearActive: `${styles.appearActiveHeadingNew}`
                          } }
                          transitionLeaveTimeout={300}
                          transitionEnterTimeout={300}> */}

                            <CardHeading cardData={currentCardData} key={currentCardData.id}/>
                        
                        {/* </CSSTransitionGroup> */}

                    {/* <CSSTransitionGroup transitionName={{
                                                enter: `${styles.enterHeading}`,
                                                enterActive: `${styles.enterActiveHeading}`,
                                                leave: `${styles.leaveHeading}`,
                                                leaveActive: `${styles.leaveActiveHeading}`
                                            } }
                                            transitionLeaveTimeout={300}
                                            transitionEnterTimeout={300}> */}
                        
                        {/* <CardHeading cardData={currentCardData} key={currentCardData}/> */}

                        {/* {this.state.displayData.map((object, i) => {
    
                            return(

                                <CardHeading cardData={object}
                                        key={object.id}
                                        position={i}/>

                            )

                        })} */}


                    {/* </CSSTransitionGroup> */}
    
                    <Swipeable onSwiped={this.swiped}>
    
                        <div className={`text-center ${styles.cardImageWrapper}`}>

                        {/* <div className={`clearfix`}> */}

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
    
                        {/* </div> */}

                        </div>

    
                    </Swipeable>
    
                    {/* <CardBottomPart cardData={currentCardData}
                                    currentCardState={currentCardState}
                                    toggleCardState={toggleCardState}/> */}
    
                </div>
    
            );

        }else{

            return null;

        }

		

	}
	
};

CardWrapper.defaultProps = {

};
