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

// Import style from Home.css file
import styles from './Home.css';

import HomeComponent from '../../components/Home/HomeComponent'

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

        <Col xs={12}>

          Moinak Testing here

          <HomeComponent message={`Hello World!`} />
                    
        </Col>

      </Row>

    )

  }

}

Home.propTypes = {

};
