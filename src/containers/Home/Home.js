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

import { Row, Col } from 'react-bootstrap';

import sampleData from './SampleData'

// Import style from Home.css file
import styles from './Home.css';

import IndividualCard from '../../components/IndividualCard/IndividualCard';

import BackButton from '../../components/UtilityComponent/BackButton';
import BottomBar from '../../components/UtilityComponent/BottomBar';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }


  /*
		Function to handle error while form validation
	*/
  render() {

    return (

      <Row className={`${styles.mainWrapper}`}>

        <Col xs={12} className={`${styles.topBar}`}>

          <BackButton />

        </Col>

        <Col xs={12}>

          {sampleData.data.map((object, i) => {

            return(

              <IndividualCard key={object.id}
                              cardData={object}/>

            )

          })}
                    
        </Col>

        <Col xs={12} className={`${styles.bottomBarWrapper}`}>

          <BottomBar />

        </Col>

      </Row>

    )

  }

}

Home.propTypes = {

};
