import React, { useState } from 'react'
import FormContext from './FormContext'
import Form1 from '../../Forms/Form1';

const FormState = (props) => {
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitForm = () => {
    setFinalData(userData);
  };

  const state = { userData, setUserData, finalData, setFinalData };
  console.log(userData);

  return (
    <FormContext.Provider value={{ ...state, submitForm }}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormState;