import React from 'react'
import { useContext } from 'react'
import FormContext from '../Context/Form/FormContext'

const Form2 = () => {
    const { name, email, phoneNumber, address, age } = useContext(FormContext);
  return (
    <div>
      Hello! My name is: {name}
    </div>
  )
}

export default Form2
