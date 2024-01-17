import { useState, useContext } from 'react';
import { Box, Button, Stack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import FormContext from '../Context/Form/FormContext';

const Form3 = () => {
  const { userData, setUserData } = useContext(FormContext);
  const [projects, setProjects] = useState([{ title: '', description: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: '', description: '' }]);
  };

  const handleSave = () => {
    const projectElements = projects.map((project, index) => (
      <div key={index}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    ));
    setUserData({ ...userData, projects: projectElements });
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'lightblue',
        padding: '20px',
      }}
    >
      {projects.map((project, index) => (
        <Box key={index} marginBottom="20px">
          <FormControl>
            <FormLabel>Project Title</FormLabel>
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
      <Button onClick={handleAddProject}>Add Project</Button>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default Form3;
