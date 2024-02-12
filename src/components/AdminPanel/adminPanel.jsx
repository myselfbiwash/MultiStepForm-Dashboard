// AdminPanel.jsx
import React, { useState, useContext } from 'react';
import FormContext from '../Context/Form/FormContext';
import './AdminPanel.css';

const AdminPanel = () => {
  const { facultySubjects, setFacultySubjects } = useContext(FormContext);
  const [faculty, setFaculty] = useState('computerEngineering');
  const [semester, setSemester] = useState(1);
  const [numSubjects, setNumSubjects] = useState(0);
  const [subjects, setSubjects] = useState([]);

  const handleNumSubjectsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    if (!isNaN(num) && num >= 0) {
        setNumSubjects(num);
        setSubjects(Array(num).fill(''));
    } else {
        console.error('Invalid number of subjects:', e.target.value);
    }
};

  const handleSubjectChange = (index, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = value;
    setSubjects(updatedSubjects);
  };

  const handleSaveSubjects = () => {
    const updatedFacultySubjects = { ...facultySubjects };
  
    if (!updatedFacultySubjects[faculty]) {
      updatedFacultySubjects[faculty] = {};
    }
  
    if (!updatedFacultySubjects[faculty][semester]) {
      updatedFacultySubjects[faculty][semester] = subjects;
    }
  
    setFacultySubjects(updatedFacultySubjects);
  
   
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <label>Select Faculty:</label>
      <select value={faculty} onChange={(e) => setFaculty(e.target.value)}>
        <option value="computerEngineering">Computer Engineering</option>
        <option value="mechanicalEngineering">Mechanical Engineering</option>
        {/* Add other faculties as needed */}
      </select>

      <label>Select Semester:</label>
      <select
        value={semester}
        onChange={(e) => setSemester(parseInt(e.target.value, 10))}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
          <option key={sem} value={sem}>
            Semester {sem}
          </option>
        ))}
      </select>

      <label>Number of Subjects:</label>
      <input
        type="number"
        value={numSubjects}
        onChange={handleNumSubjectsChange}
      />

      <div>
        <h3>Subjects for Semester {semester}</h3>
        {subjects.map((subject, index) => (
          <div key={index}>
            <label>Subject {index + 1}:</label>
            <input
              type="text"
              value={subject || ''}
              onChange={(e) => handleSubjectChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleSaveSubjects} style={{background:'blue'}}>Save Subjects</button>
      </div>
    </div>
  );
};

export default AdminPanel;
