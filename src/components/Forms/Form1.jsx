import { useState, useContext } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import FormContext from '../Context/Form/FormContext'
const Form1 = () => {

    const { userData, setUserData } = useContext(FormContext);
    const validateEmail = (email) => {
        // You can perform additional validation logic here
        // For example, checking if the email contains the "@" symbol
        if (!isValidEmail(email)) {
            // Display an error message or take appropriate action
            console.log("Invalid email format");
        }
    };

    const isValidEmail = (email) => {
        // Use a regular expression to check if the email contains "@" symbol
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };




    return (
        <Box>
            <FormControl id="name" isRequired>
                <FormLabel>Your name</FormLabel>
                <Input
                    type="text"
                    value={userData['name'] || ''}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    variant="outline"
                    colorScheme="teal"
                    margin="normal"
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    value={userData['email'] || ''}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    onBlur={() => validateEmail(userData['email'])}
                    isInvalid={!isValidEmail(userData['email'])}
                    variant="outline"
                    colorScheme="teal"
                    margin="normal"
                />
            </FormControl>
            <FormControl id="phoneNumber" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                    type="number"
                    value={userData['phoneNumber'] || ''}
                    onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                    variant="outline"
                    colorScheme="teal"
                    margin="normal"
                />
            </FormControl>
        </Box>
    );
};

export default Form1;
