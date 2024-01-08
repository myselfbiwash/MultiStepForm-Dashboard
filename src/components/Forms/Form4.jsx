import { useState, useContext } from 'react';
import { Box, Button, Stack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import FormContext from '../Context/Form/FormContext';

const Form4 = () => {
  const { userData, setUserData, finalData, setFinalData, submitForm } = useContext(FormContext);

  

  return (
    <div>
      {/* Your form fields go here */}
   
    </div>
  );
};

export default Form4;
