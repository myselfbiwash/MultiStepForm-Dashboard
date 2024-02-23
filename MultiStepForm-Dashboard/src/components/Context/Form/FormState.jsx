import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";
import axios from 'axios';

const FormState = (props) => {
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [facultySubjects, setFacultySubjects] = useState([]);
  const [data, setData] = useState([]);

  // Save data to local storage when finalData changes (i.e. when the submit button is clicked)

  useEffect(() => {
    if (finalData.length === 0) return;
    localStorage.setItem("finalData", JSON.stringify(finalData));
  }, [finalData]);

  useEffect(() => {
    if (data.length === 0) return;
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // Retrieve data from local storage when component mounts. It is helpful for page refresh but can be removed if not needed.
  useEffect(() => {
    const storedData = localStorage.getItem("finalData");
    if (storedData) {
      setFinalData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (facultySubjects.length === 0) return;
    localStorage.setItem("facultySubjects", JSON.stringify(facultySubjects));
  }, [facultySubjects]);

  const submitForm = () => {
   // setFinalData(userData);
   console.log("🚀 ~ submitForm ~ userData:", userData)

    axios.post('http://127.0.0.1:8000/api/user-data', userData)
    .then(response => {
      console.log("The response from the backend is:",response);
      setFinalData(userData);
      setData(response.data);
      console.log("🚀 ~ submitForm ~ response.data:", response.data)

    
    })
    .catch(error => {
      console.error(error);
    });
  };

  const state = { userData, setUserData, finalData, setFinalData, facultySubjects, setFacultySubjects,data,setData};
  console.log(userData);

  return (
    <FormContext.Provider value={{ ...state, submitForm }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
