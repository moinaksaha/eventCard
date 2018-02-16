import React, { Component } from 'react';

import { Grid, Row, Col, form, FormGroup, Checkbox, Radio, ControlLabel, Button, option, FormControl } from 'react-bootstrap';

import styles from '../../containers/Home/Home.css';

import StepHeading from './StepHeading';

import FormCheckBox from '../FormComponents/FormCheckBox';

export default class Step1 extends Component{

	constructor(){
    	super();
  	}

	render = () => {

    const { setCheckedValue } = this.props;

		return (

			<div className={`${styles.formStep} ${styles.step1}`}>

        <StepHeading headingtext={`Step 1:`} />

          <div className={`${styles.content}`}>

            <ControlLabel className={`${styles.helpText}`}>Please select an OPTION</ControlLabel>

            <FormCheckBox checkBoxID={`checkBox1`}
                          checkBoxName={`checkBox1`}
                          labelText={`A1`}
                          setCheckedValue={setCheckedValue} />

            <FormCheckBox checkBoxID={`checkBox2`}
                          checkBoxName={`checkBox2`}
                          labelText={`A2`}
                          setCheckedValue={setCheckedValue} />

          </div>

      </div>

    );
    
  }
  
};

Step1.defaultProps = {

};
