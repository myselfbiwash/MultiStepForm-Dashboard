import { useState, useContext } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import FormContext from '../Context/Form/FormContext'
const Form1 = () => {
    
    const { name, email, phoneNumber, address, age } = useContext(FormContext);

   

    return (
        <Box>
           name: {name} form 1
        </Box>
    );
};

export default Form1;
