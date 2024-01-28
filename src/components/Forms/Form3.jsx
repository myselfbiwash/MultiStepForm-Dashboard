import { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import FormContext from "../Context/Form/FormContext";
import "./Form.css";
import './globalForm.css';


const Form3 = () => {
  const { userData, setUserData } = useContext(FormContext);
  const [projects, setProjects] = useState([{ title: "", description: "" }]);
  const [form3Data, setForm3Data] = useState({});

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
    setForm3Data({ projects: updatedProjects });
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: "", description: "" }]);
  };

  // Update userData state when form3Data state changes
  useEffect(() => {
    setUserData(prevState => ({ ...prevState, ...form3Data }));
  }, [form3Data]);

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
      className="form-part"
    >
      {projects.map((project, index) => (
        <Box key={index} marginBottom="20px">
          <FormControl>
            <FormLabel>Project {index + 1}</FormLabel>
            <Input
              type="text"
              name="title"
              value={project.title}
              onChange={(event) => handleInputChange(index, event)}
            />
          </FormControl>
          <FormControl marginTop="10px">
            <FormLabel>Project Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={project.description}
              onChange={(event) => handleInputChange(index, event)}
            />
          </FormControl>
        </Box>
      ))}
        <Button onClick={handleAddProject} colorScheme="blue">Add Project<b>+</b></Button>
      </div>
  );
};

export default Form3;