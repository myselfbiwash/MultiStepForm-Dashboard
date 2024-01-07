import React, { useState } from 'react'
import  FormContext  from './FormContext'

const FormState = (props) => {
 const [userData, setUserData] = useState([]);
 const [finalData, setFinalData] = useState([]);


  const state = { userData, setUserData, finalData, setFinalData };

  return (
    <FormContext.Provider value={state}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormState;