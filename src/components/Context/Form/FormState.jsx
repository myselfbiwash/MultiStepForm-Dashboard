import React, { useState } from 'react'
import  FormContext  from './FormContext'

const FormState = (props) => {
  const [name, setName] = useState('Biwash');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [grades, setGrades] = useState([]);
  const [scores, setScores] = useState([]);
  const [attendedCourse, setAttendedCourse] = useState('');

  const state = { name, email, phoneNumber, address, age, grades, scores, attendedCourse, setName, setEmail, setPhoneNumber, setAddress, setAge, setGrades, setScores, setAttendedCourse };

  return (
    <FormContext.Provider value={state}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormState;