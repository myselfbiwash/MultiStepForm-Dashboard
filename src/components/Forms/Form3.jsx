import React,{useContext} from 'react'
import FormContext from '../Context/Form/FormContext'


const Form3 = () => {

    const { name, email, phoneNumber, address, age } = useContext(FormContext);

  return (
    <div>
                 name: {name} form 3

    </div>
  )
}

export default Form3
