import React, { useState, useContext, useEffect } from 'react';
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import FormContext from '../Context/Form/FormContext';

const Form2 = () => {
    const { userData, setUserData } = useContext(FormContext);
    const [form2Data, setForm2Data] = useState({});

    const fieldStyles = {
        borderColor: 'blue.100',
        border: '2px solid',
        size: 'md',
        height: '40px',
        width: '416px',
    };

    // Update form2Data state when input fields are blurred
    const handleBlur = (key, value) => {
        setForm2Data(prevState => ({ ...prevState, [key]: value }));
    };

    // Update userData state when form2Data state changes
    useEffect(() => {
        setUserData(prevState => ({ ...prevState, ...form2Data }));
    }, [form2Data]);

    return (
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', backgroundColor: 'lightblue', padding: '20px' }}>
            <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Textarea
                    defaultValue={userData['address'] || ''}
                    onBlur={(e) => handleBlur('address', e.target.value)}
                    variant="outline"
                    colorScheme="teal"
                    size="md"
                    style={fieldStyles}
                />
            </FormControl>
            <FormControl id="city" isRequired>
                <FormLabel>City</FormLabel>
                <Input
                    type="text"
                    defaultValue={userData['city'] || ''}
                    onBlur={(e) => handleBlur('city', e.target.value)}
                    variant="outline"
                    colorScheme="teal"
                    margin="normal"
                    style={fieldStyles}
                />
            </FormControl>
            <FormControl id="state" isRequired>
                <FormLabel>State</FormLabel>
                <Input
                    type="text"
                    defaultValue={userData['state'] || ''}
                    onBlur={(e) => handleBlur('state', e.target.value)}
                    variant="outline"
                    colorScheme="teal"
                    margin="normal"
                    style={fieldStyles}
                />
            </FormControl>
            <FormControl id="zipCode" isRequired>
                <FormLabel>Zip Code</FormLabel>
                <Input
                    type="text"
                    defaultValue={userData['zipCode'] || ''}
                    onBlur={(e) => handleBlur('zipCode', e.target.value)}
                    variant="outline"
                    colorScheme="teal"
                    margin="normal"
                    style={fieldStyles}
                />
            </FormControl>
        </div>
    );
};

export default Form2;