import React, { useContext } from 'react'
import FormContext from '../Context/Form/FormContext'

const Form2 = () => {
    const { name, email, phoneNumber, address, age } = useContext(FormContext);
  return (
    <div>
      Hello! My name is: {name}
      name: {name} form 2

    </div>
  )
}

export default Form2
