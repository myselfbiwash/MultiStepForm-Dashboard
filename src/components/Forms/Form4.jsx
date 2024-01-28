import React, { useState, useContext, useEffect } from "react";
import { Box, FormControl, FormLabel, Input, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import FormContext from "../Context/Form/FormContext";
import './globalForm.css';


const Form4 = () => {
  const { userData, setUserData } = useContext(FormContext);
  const [form4Data, setForm4Data] = useState({
    name: "",
    marksheet: {
      computer: "",
      math: "",
      english: "",
      science: "",
      nepali: "",
      social: "",
      // Add more subjects as needed
    },
  });

  const handleInputChange = (key, value) => {
    setForm4Data(prevState => ({ ...prevState, [key]: value }));
  };

  const handleMarksChange = (subject, value) => {
    setForm4Data(prevState => ({
      ...prevState,
      marksheet: {
        ...prevState.marksheet,
        [subject]: value,
      },
    }));
  };

  // Update userData state when form4Data state changes
  useEffect(() => {
    setUserData(prevState => ({ ...prevState, ...form4Data }));
    console.log("User Data is:",userData);
  }, [form4Data]);

  return (
    <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" className="form-part">
      <Heading as="h2" size="xl" mb={6}>
        Marksheet Form
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="name" isRequired>
          <FormLabel>Your name</FormLabel>
          <Input
            type="text"
            defaultValue={form4Data["name"] || ""}
            onBlur={(e) => handleInputChange("name", e.target.value)}
          />
        </FormControl>
        <Heading as="h3" size="md" mt={4} mb={2}>
          Subject Marks
        </Heading>
        {Object.entries(form4Data.marksheet).map(([subject, marks]) => (
          <FormControl key={subject} id={subject} isRequired>
            <FormLabel>{subject.charAt(0).toUpperCase() + subject.slice(1)} Marks</FormLabel>
            <Input
              type="number"
              value={marks}
              onChange={(e) => handleMarksChange(subject, e.target.value)}
            />
          </FormControl>
        ))}
        <Button colorScheme="teal" mt={6}>
          Save Marksheet
        </Button>
      </VStack>
    </Box>
  );
};

export default Form4;