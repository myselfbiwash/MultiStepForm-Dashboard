import React, { useState, useContext, useEffect } from "react";
import { Box, FormControl, FormLabel, Input, Button, Heading, VStack, Select } from "@chakra-ui/react";
import FormContext from "../Context/Form/FormContext";
import './globalForm.css';

const Form4 = () => {
  const { finalData, setFinalData } = useContext(FormContext); // Use finalData and setFinalData
  const [facultySubjects, setFacultySubjects] = useState({});
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [marks, setMarks] = useState({});

  useEffect(() => {
    const storedSubjectsData = localStorage.getItem("facultySubjects");
    if (storedSubjectsData) {
      setFacultySubjects(JSON.parse(storedSubjectsData));
    }
  }, []);
  
  useEffect(() => {
    if (selectedFaculty && selectedSemester) {
      setSubjects(facultySubjects[selectedFaculty][selectedSemester]);
    }
  }, [selectedFaculty, selectedSemester]);

  

  const handleMarksChange = (subject, value) => {
    setMarks(prevState => ({
      ...prevState,
      [subject]: value,
    }));
  };

  const handleSave = () => {
    // Add the marks to the facultySubjects state
    const updatedFacultySubjects = {
      ...facultySubjects,
      [selectedFaculty]: {
        ...facultySubjects[selectedFaculty],
        [selectedSemester]: subjects.map((subject) => ({
          name: subject,
          marks: marks[subject] || 0,
        })),
      },
    };

    setFacultySubjects(updatedFacultySubjects);

    // Save the updated facultySubjects to the finalData context
    setFinalData((prevState) => ({
      ...prevState,
      facultySubjects: updatedFacultySubjects,
    }));
    console.log("marks are:",updatedFacultySubjects);
  };

  return (
    <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" className="form-part">
      <Heading as="h2" size="xl" mb={6}>
        Marksheet Form
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="faculty" isRequired>
          <FormLabel>Faculty</FormLabel>
          <Select onChange={(e) => setSelectedFaculty(e.target.value)}>
            {Object.keys(facultySubjects).map((faculty) => (
              <option key={faculty} value={faculty}>
                {faculty}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="semester" isRequired>
          <FormLabel>Semester</FormLabel>
          <Select onChange={(e) => setSelectedSemester(e.target.value)}>
            {selectedFaculty && Object.keys(facultySubjects[selectedFaculty]).map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </Select>
        </FormControl>
        <Heading as="h3" size="md" mt={4} mb={2}>
          Subject Marks
        </Heading>
        {subjects.map(subject => (
          <FormControl key={subject} id={subject} isRequired>
            <FormLabel>{subject.charAt(0).toUpperCase() + subject.slice(1)} Marks</FormLabel>
            <Input
              type="number"
              onChange={(e) => handleMarksChange(subject, e.target.value)}
            />
          </FormControl>
        ))}
        <Button colorScheme="teal" mt={6} onClick={handleSave}>
          Save Marksheet
        </Button>
      </VStack>
    </Box>
  );
};

export default Form4;