/*
	=========================================================
	CONTAINER NAME: App
	FUNCTION: Returns the App container
	=========================================================
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-Bootstrap imports
import { Grid } from 'react-bootstrap';

// Import style from the App.css file
import styles from './App.css';

export default class App extends Component {
  
  render() {
    
    const { children } = this.props;

    return (

      <Grid fluid className={`${styles.mainContainer}`}>

        {children}

      </Grid>
      
    )

  }

}

App.propTypes = {
  children: PropTypes.any.isRequired
};
