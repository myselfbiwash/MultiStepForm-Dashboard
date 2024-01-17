import React, { useState, useContext } from "react";
import { Box, FormControl, FormLabel, Input, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import FormContext from "../Context/Form/FormContext";

const Form4 = () => {
  const { userData, setUserData } = useContext(FormContext);
  const [subjectMarks, setSubjectMarks] = useState({
    computer: "",
    math: "",
    english: "",
    science: "",
    nepali: "",
    social: "",
    // Add more subjects as needed
  });

  const handleMarksChange = (subject, value) => {
    setSubjectMarks((prevMarks) => ({
      ...prevMarks,
      [subject]: value,
    }));
  };

  const saveMarksheet = () => {
    setUserData({
      ...userData,
      marksheet: {
        ...subjectMarks,
      },
    });
    // Optionally, you can reset subject marks to an empty state
    setSubjectMarks({
      computer: "",
      math: "",
      english: "",
      science: "",
      nepali: "",
      social: "",
      // Add more subjects as needed
    });
  };

  return (
    <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading as="h2" size="xl" mb={6}>
        Marksheet Form
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="name" isRequired>
          <FormLabel>Your name</FormLabel>
          <Input
            type="text"
            defaultValue={userData["name"] || ""}
            onBlur={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </FormControl>
        <Heading as="h3" size="md" mt={4} mb={2}>
          Subject Marks
        </Heading>
        {Object.entries(subjectMarks).map(([subject, marks]) => (
          <FormControl key={subject} id={subject} isRequired>
            <FormLabel>{subject.charAt(0).toUpperCase() + subject.slice(1)} Marks</FormLabel>
            <Input
              type="number"
              value={marks}
              onChange={(e) => handleMarksChange(subject, e.target.value)}
            />
          </FormControl>
        ))}
        <Button onClick={saveMarksheet} colorScheme="teal" mt={6}>
          Save Marksheet
        </Button>
      </VStack>
    </Box>
  );
};

export default Form4;
