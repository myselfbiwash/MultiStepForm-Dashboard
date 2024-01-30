import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";

const FormState = (props) => {
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [facultySubjects, setFacultySubjects] = useState([]);

  // Save data to local storage when finalData changes (i.e. when the submit button is clicked)

  useEffect(() => {
    if (finalData.length === 0) return;
    localStorage.setItem("finalData", JSON.stringify(finalData));
  }, [finalData]);

  // Retrieve data from local storage when component mounts. It is helpful for page refresh but can be removed if not needed.
  useEffect(() => {
    const storedData = localStorage.getItem("finalData");
    if (storedData) {
      setFinalData(JSON.parse(storedData));
    }
  }, []);

  const submitForm = () => {
    setFinalData(userData);
  };

  const state = { userData, setUserData, finalData, setFinalData, facultySubjects, setFacultySubjects};
  console.log(userData);

  return (
    <FormContext.Provider value={{ ...state, submitForm }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
