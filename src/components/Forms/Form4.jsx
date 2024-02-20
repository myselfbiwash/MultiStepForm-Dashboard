import React, { useState, useContext, useEffect } from "react";
import { Box, FormControl, FormLabel, Input, Button, Heading, VStack, Select } from "@chakra-ui/react";
import FormContext from "../Context/Form/FormContext";
import './globalForm.css';

const Form4 = () => {
  const { userData, setUserData } = useContext(FormContext); // Use finalData and setFinalData
  const [facultySubjects, setFacultySubjects] = useState({});
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [marks, setMarks] = useState({});

  // useEffect(() => {
  //   const storedSubjectsData = localStorage.getItem("facultySubjects");
  //   if (storedSubjectsData) {
  //     setFacultySubjects(JSON.parse(storedSubjectsData));
  //   }
  // }, []);
  
  // useEffect(() => {
  //   if (selectedFaculty){
  //     console.log("Faculty Subject is:",facultySubjects[selectedFaculty]);
  //     setSelectedSemester(facultySubjects[selectedFaculty]);
  //   }
  //   if (selectedFaculty && selectedSemester) {
  //     setSubjects(facultySubjects[selectedFaculty][selectedSemester]);
  //   }
  // }, [selectedFaculty, selectedSemester]);


  useEffect(() => {
    const storedSubjectsData = localStorage.getItem("facultySubjects");
    if (storedSubjectsData) {
      const parsedData = JSON.parse(storedSubjectsData);
      setFacultySubjects(parsedData);
  
      // Set the first faculty as default
      const firstFaculty = Object.keys(parsedData)[0];
      setSelectedFaculty(firstFaculty);
  
      // Set the first semester of the first faculty as default
      const firstSemester = Object.keys(parsedData[firstFaculty])[0];
      setSelectedSemester(firstSemester);

      // Set the subjects of the first semester as default
      setSubjects(parsedData[firstFaculty][firstSemester]);

    }
  }, []);
  

  const handleMarksChange = (subject, value) => {
    setMarks(prevState => ({
      ...prevState,
      [subject]: value,
    }));
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSubjects(facultySubjects[selectedFaculty][e.target.value]);
  };

  const handleFacultyChange = (e) => {
    const newFaculty = e.target.value;
    setSelectedFaculty(newFaculty);
  
    // Set the first semester of the new faculty as default
    const firstSemester = Object.keys(facultySubjects[newFaculty])[0];
    setSelectedSemester(firstSemester);
  
    // Set the subjects of the first semester of the new faculty as default
    setSubjects(facultySubjects[newFaculty][firstSemester]);
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
    console.log("🚀 ~ handleSave ~ updatedFacultySubjects:", updatedFacultySubjects)

    setFacultySubjects(updatedFacultySubjects);

    // Save the updated facultySubjects to the finalData context
    setUserData((prevState) => ({
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
          <Select onChange={handleFacultyChange}>
            {Object.keys(facultySubjects).map((faculty) => (
              <option key={faculty} value={faculty}>
                {faculty}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="semester" isRequired>
          <FormLabel>Semester</FormLabel>
          <Select onChange={(e) => handleSemesterChange(e)}>
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
          console.log("subject is:",subject),
          <FormControl key={subject} id={subject} isRequired>
            <FormLabel>{subject.charAt(0).toUpperCase() + subject.slice(1)} Marks</FormLabel>
            <Input
              type="number"
              onChange={(e) => handleMarksChange(subject, e.target.value)}
              _hover={{ borderColor: "blue.500", boxShadow: "xl" }} 

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