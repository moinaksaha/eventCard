/*
	=========================================================
	CONTAINER NAME: Home
	FUNCTION: Returns the Home page of the application which has the form, error message, submission successful message, LoaderModal component
	PROPS:  checkBoxID -> 'id' of the checkbox element
			setCheckedValue -> method to set the current checked value of the checkbox on the parent 
			labelText -> label to display with the checkbox
			checkBoxName ->	name for the checkbox
	=========================================================
*/

import React, { Component } from 'react';

import { Row, Col, Glyphicon } from 'react-bootstrap';

// Assumed an array of object as the sample data for the cards
import sampleData from './SampleData'

// Import style from Home.css file
import styles from './Home.css';

// Importing the other components for the page
import CardWrapper from '../../components/IndividualCard/CardWrapper';
import CardBottomPart from '../../components/CardComponent/CardBottomPart'

import BackButton from '../../components/UtilityComponent/BackButton';
import BottomBar from '../../components/UtilityComponent/BottomBar';
import FlashMessage from '../../components/UtilityComponent/FlashMessage';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCardIndex: 0,
      allCardData: sampleData.data,
      currentCardState: "carousel", // "cardDetail"
      currentSwipeDirection: "left",
      showGalleryEndMessage: false
    }
  }

  showFlashMessage = () => {
    this.setState({
      showGalleryEndMessage: true
    })
    setTimeout(() => {
      this.setState({
        showGalleryEndMessage: false
      })
    }, 2000)
  }

  prevCard = () => {
    console.log("currentCardIndex", this.state.currentCardIndex);
    console.log("allCardData.length", this.state.allCardData.length);
    console.log("====================================")
    if(this.state.currentCardIndex > 0){
      this.setState((prevState) => ({
        currentSwipeDirection: "right",
        currentCardIndex: prevState.currentCardIndex - 1
      }))
    }else{
      this.showFlashMessage();
    }
  }

  nextCard = () => {
    console.log("currentCardIndex", this.state.currentCardIndex);
    console.log("allCardData.length", this.state.allCardData.length);
    console.log("====================================")
    if(this.state.currentCardIndex < this.state.allCardData.length-1){
      this.setState((prevState, props) => ({
        currentSwipeDirection: "left",
        currentCardIndex: prevState.currentCardIndex + 1
      }));
    }else{
      this.showFlashMessage();
    }
  }

  toggleCardState = () => {
    this.setState((prevState) => ({
      currentCardState: (prevState.currentCardState === "carousel") ? "cardDetail" : "carousel"
    }))
  }

  render() {

    return (

      <Row className={`${styles.mainWrapper}`}>

        <Col xs={12} className={`${styles.topBar}`}>

          <BackButton text={`Event`}/>

        </Col>

        <Col xs={12}>

          <CardWrapper allCardData={this.state.allCardData}
                       currentCardIndex={this.state.currentCardIndex}
                       toggleCardState={this.toggleCardState}
                       currentCardState={this.state.currentCardState}
                       nextCard={this.nextCard}
                       prevCard={this.prevCard}
                       swipeDirection={this.state.currentSwipeDirection} />
                    
        </Col>

        <CardBottomPart allCardData={this.state.allCardData}
                        currentCardIndex={this.state.currentCardIndex}
                        currentCardState={this.state.currentCardState}
                        toggleCardState={this.toggleCardState}/>

        <Col xs={12} className={`${styles.navigationTest} text-center`}>

          <div className={`pull-left ${styles.prev}`}
               onClick={this.prevCard}> 
            <Glyphicon glyph="chevron-left"/>
          </div>

          {this.state.showGalleryEndMessage && 

            <div className={`${styles.flashMessageHolder}`}>
              
              <FlashMessage text={`You've reached the end!`} />

            </div>

          }

          <div className={`pull-right ${styles.next}`}
               onClick={this.nextCard}> 
            <Glyphicon glyph="chevron-right"/>
          </div>

        </Col>

        <Col xs={12} className={`${styles.bottomBarWrapper}`}>

          <BottomBar />

        </Col>

      </Row>

    )

  }

}

// Home.propTypes = {

// };
