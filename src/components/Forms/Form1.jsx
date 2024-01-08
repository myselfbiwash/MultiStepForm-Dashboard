import { useState, useContext } from 'react';
import { Box, Button, Stack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import FormContext from '../Context/Form/FormContext'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Form1 = () => {

    const { userData, setUserData } = useContext(FormContext);

    const [dob, setDOB] = useState(new Date());
    const [age, setAge] = useState('');

    const handleDOBChange = (date) => {
        setDOB(date);
        calculateAge(date);
        setUserData({
            ...userData,
            dateOfBirth: date.toISOString(), // You can format the date as needed
          });
    };

    const calculateAge = (birthdate) => {
        const currentDate = new Date();
        const birthDate = new Date(birthdate);
        const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

        // Adjust age if birthday hasn't occurred yet this year
        if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
            setAge(ageDifference - 1);
        } else {
            setAge(ageDifference);
        }
    };

    const maxDate = new Date(); // Set max date to current date

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
    const fieldStyles = {
        borderColor: 'blue.500',
        border: '1px solid',
        size: 'md',
        height: '40px',
        width: '416px',
      };



    return (
        <Box>
            <FormControl id="name" isRequired >
                <FormLabel>Your name</FormLabel>
                <Input
                    type="text"
                    value={userData['name'] || ''}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    variant="outline"
                    colorScheme="teal"
                    margin="normal"
                    size="md"
                    style={fieldStyles}
                   

                />
            </FormControl>
            <FormControl id="email" isRequired >
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
                    size="md"
                    style={fieldStyles}
                   

                />
            </FormControl>
            <FormControl id="phoneNumber" isRequired >
                <FormLabel>Phone Number</FormLabel>
                <Input
                    type="number"
                    value={userData['phoneNumber'] || ''}
                    onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                    variant="outline"
                    colorScheme="teal"
                    margin="normal"
                    size="md"
                    style={fieldStyles}
                   
                />
            </FormControl>
            <FormControl id="dob" isRequired >
                <FormLabel>Date of Birth</FormLabel>
                <DatePicker
                    selected={dob}
                    onChange={handleDOBChange}
                    maxDate={maxDate}
                    dateFormat="MM/dd/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={100}
                    className="form-control"
                    style={fieldStyles}
                    
                />
            </FormControl>
        </Box>
    );
};

export default Form1;
