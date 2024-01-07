import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import FormState from './components/Context/Form/FormState';
import './App.css'
import Form2 from './components/Forms/Form2'
import MultiStepForm from './components/Forms/MultiStepForm';

function App() {

  return (
    <>
      <FormState>
        <ChakraProvider>
          <div className="App">
            <h1>Multi-Step Form</h1> 
          </div>
          <Form2 />
          <MultiStepForm />
        </ChakraProvider>
      </FormState>
      {/* <div className="App">
        <h1>Multi-Step Form</h1>
      </div> */}
    </>
  )
}

export default App
