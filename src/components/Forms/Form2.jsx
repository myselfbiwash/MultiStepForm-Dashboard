import React, { useContext } from 'react';
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import FormContext from '../Context/Form/FormContext';

const Form2 = () => {
    const { userData, setUserData } = useContext(FormContext);

    const fieldStyles = {
        borderColor: 'blue.100',
        border: '2px solid',
        size: 'md',
        height: '40px',
        width: '416px',
    };

    return (
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', backgroundColor: 'lightblue', padding: '20px' }}>
            <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Textarea
                    defaultValue={userData['address'] || ''}
                    onBlur={(e) => setUserData({ ...userData, address: e.target.value })}
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
                    onBlur={(e) => setUserData({ ...userData, city: e.target.value })}
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
                    onBlur={(e) => setUserData({ ...userData, state: e.target.value })}
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
                    onBlur={(e) => setUserData({ ...userData, zipCode: e.target.value })}
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
