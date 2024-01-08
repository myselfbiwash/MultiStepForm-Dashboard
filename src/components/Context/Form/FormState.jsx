import React, { useState } from 'react'
import  FormContext  from './FormContext'
import Form1 from '../../Forms/Form1';

const FormState = (props) => {
 const [userData, setUserData] = useState([]);
 const [finalData, setFinalData] = useState([]);


  const state = { userData, setUserData, finalData, setFinalData };
  console.log(userData);

  return (
    <FormContext.Provider value={state}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormState;