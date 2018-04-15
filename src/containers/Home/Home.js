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

import sampleData from './SampleData'

// Import style from Home.css file
import styles from './Home.css';

import IndividualCard from '../../components/IndividualCard/IndividualCard';
import CardWrapper from '../../components/IndividualCard/CardWrapper';
import CardBottomPart from '../../components/CardComponent/CardBottomPart'

import BackButton from '../../components/UtilityComponent/BackButton';
import BottomBar from '../../components/UtilityComponent/BottomBar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCardIndex: 0,
      allCardData: sampleData.data,
      currentCardState: "carousel" // "cardDetail"
    }
  }

  componentDidMount = () => {
    // setTimeout(() => {
    //   this.nextCard();
    //   setTimeout(() => {
    //     this.nextCard();
    //     setTimeout(() => {
    //       this.prevCard();
    //       setTimeout(() => {
    //         this.prevCard();
    //       }, 2000)
    //     }, 2000)
    //   }, 2000)
    // }, 2000)
  }

  prevCard = () => {
    this.setState((prevState) => ({
      currentCardIndex: (prevState.currentCardIndex>0)? prevState.currentCardIndex - 1 : 0
    }))
  }

  nextCard = () => {
    this.setState((prevState, props) => ({
      currentCardIndex: (prevState.currentCardIndex<prevState.allCardData.length-1) ? prevState.currentCardIndex + 1 : prevState.currentCardIndex
    }));
  }

  toggleCardState = () => {
    this.setState((prevState) => ({
      currentCardState: (prevState.currentCardState === "carousel") ? "cardDetail" : "carousel"
    }))
  }

  /*
		Function to handle error while form validation
	*/
  render() {

    const currentCardData = this.state.allCardData.slice(this.state.currentCardIndex, this.state.currentCardIndex+1);

    return (

      <Row className={`${styles.mainWrapper}`}>

        <Col xs={12} className={`${styles.topBar}`}>

          <BackButton />

        </Col>

        <Col xs={12}>

          <CardWrapper allCardData={this.state.allCardData}
                       currentCardIndex={this.state.currentCardIndex}
                       toggleCardState={this.toggleCardState}
                       currentCardState={this.state.currentCardState}
                       nextCard={this.nextCard}
                       prevCard={this.prevCard} />
                    
        </Col>

        <CardBottomPart cardData={currentCardData}
                        currentCardState={this.state.currentCardState}
                        toggleCardState={this.toggleCardState}/>



        {/* ONLY FOR TESTING PURPOSE */}

        <Col xs={12} className={`${styles.navigationTest}`}>

          <div className={`pull-left ${styles.prev}`}
               onClick={this.prevCard}> 
            <Glyphicon glyph="chevron-left"/>
          </div>

          <div className={`pull-right ${styles.next}`}
               onClick={this.nextCard}> 
            <Glyphicon glyph="chevron-right"/>
          </div>

        </Col>

        {/* ONLY FOR TESTING PURPOSE */}

        <Col xs={12} className={`${styles.bottomBarWrapper}`}>

          <BottomBar />

        </Col>

      </Row>

    )

  }

}

Home.propTypes = {

};
