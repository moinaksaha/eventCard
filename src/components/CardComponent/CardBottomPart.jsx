import React, { Component } from 'react';

import Swipeable from 'react-swipeable';

import BackButton from '../UtilityComponent/BackButton';

import { CSSTransitionGroup } from 'react-transition-group'

import CardBottomPartContent from './CardBottomPartContent';
import CardBottomPartCalendar from './CardBottomPartCalendar';

import styles from './CardBottomPart.css';

export default class CardBottomPart extends Component{

	constructor(){
		super();
		this.state = {
			currentCardData : []
		}
	}

	componentWillReceiveProps = (nextProps) => {
		if(nextProps.currentCardState && nextProps.currentCardState === "cardDetail"){
			this.setCardDetailData();
		}else{
			this.unsetCardDetailData();
		}
	}

	setCardDetailData = () => {
		setTimeout(() => {
			this.setState((prevState, props) => ({
				currentCardData: props.allCardData.slice(props.currentCardIndex, props.currentCardIndex+1)
			}))
		}, 200)
	}

	unsetCardDetailData = () => {
		this.setState((prevState) => ({
			currentCardData: []
		}))
	}

	hideCardDetail = (e) => {
		e.stopPropagation();
		const { toggleCardState } = this.props;
		toggleCardState();
	}

	swiped = (e, deltaX, deltaY, isFlick, velocity) => {
        if(deltaY < -40){
            const { toggleCardState } = this.props;
            toggleCardState();
        }
	}
	
	preventEventPropagation = (e) => {
		e.stopPropagation();
	}

	render = () => {

		const { currentCardState } = this.props;

		const cardClass = (currentCardState && currentCardState === "cardDetail") ?

							`${styles.cardDetailWrapper} ${styles.visible}` : 

							`${styles.cardDetailWrapper}`;

		return (

			<Swipeable onSwiped={this.swiped}>

				<div className={cardClass}
					onClick={this.hideCardDetail}>

					<div className={`${styles.backButtonHolder}`}>

						<CSSTransitionGroup transitionName={{
								enter: `${styles.enter}`,
								enterActive: `${styles.enterActive}`,
								leave: `${styles.leave}`,
								leaveActive: `${styles.leaveActive}`
							}}
							transitionLeaveTimeout={300}
							transitionEnterTimeout={300}>

							{(this.state.currentCardData.map((object, i) => {

								return(

									<BackButton text={`Event Detail`}
												isCardDetail={true} 
												key={object.id}/>

								)

							}))}

						</CSSTransitionGroup>

					</div>
	
					<div className={`${styles.cardContentHolder}`}
						onClick={this.preventEventPropagation}>

						<CSSTransitionGroup
							transitionName={{
								enter: `${styles.enter}`,
								enterActive: `${styles.enterActive}`,
								leave: `${styles.leave}`,
								leaveActive: `${styles.leaveActive}`
							}}
							transitionLeaveTimeout={300}
							transitionEnterTimeout={300}>

							{(this.state.currentCardData.map((object, i) => {

								return(

									<CardBottomPartContent cardData={object} key={object.id}/>

								)

							}))}
							
						</CSSTransitionGroup>

						<CSSTransitionGroup
							transitionName={{
								enter: `${styles.enterCalendar}`,
								enterActive: `${styles.enterActiveCalendar}`,
								leave: `${styles.leaveCalendar}`,
								leaveActive: `${styles.leaveActiveCalendar}`
							}}
							transitionLeaveTimeout={300}
							transitionEnterTimeout={300}>

							{(this.state.currentCardData.map((object, i) => {

								return(

									<CardBottomPartCalendar cardData={object} key={object.id}/>

								)

							}))}
							
						</CSSTransitionGroup>

					</div>

				</div>

			</Swipeable>

		);

	}
	
};

CardBottomPart.defaultProps = {

};
