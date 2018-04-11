import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

import styles from './Home.css';

import HomeComponent from '../../components/Home/HomeComponent'

export default class Home extends Component {
  constructor(props) {
    /**
     * This is for illustration purpose. Since this is empty. It can be removed
    */
    super(props);
  }


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
