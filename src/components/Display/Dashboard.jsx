import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [finalData, setFinalData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('finalData');
    if (storedData) {
      setFinalData(JSON.parse(storedData));
    }
    console.log(JSON.parse(storedData));
  }, []); // Empty dependency array, runs only once after the initial render



  const renderNestedData = (data, parentKey = '') => {
    return Object.entries(data).map(([key, value], index) => {
      if (typeof value === 'object' && value !== null) {
        const newKey = parentKey === 'projects' ? `Project ${index + 1}` : key;
        return (
          <div key={key} className={styles.data}>
            {key !== 'projects' && <strong className={styles.dataKey}>{newKey}:</strong>}
            {renderNestedData(value, key)}
          </div>
        );
      } else {
        return (
          <div key={key} className={styles.data}>
            <strong className={styles.dataKey}>{key}:</strong> <span className={styles.dataValue}>{value}</span>
          </div>
        );
      }
    });
  };
  return (
    <div className={styles.dashboard}>
      <p className={styles.title}>Your Input Data are:</p>
      {renderNestedData(finalData)}
    </div>
  );
};

export default Dashboard;

// This is a React component named Dashboard. Let's break down what it does:

// State Initialization: finalData is a state variable initialized with an empty object {}. This state will hold the data fetched from the local storage.

// UseEffect Hook: The useEffect hook is used to perform side effects in function components. In this case, it's used to fetch data from the local storage when the component mounts. The empty array [] as the second argument means this effect will only run once after the initial render.

// Fetching Data from Local Storage: Inside the useEffect, it's checking if there's any data stored in local storage under the key 'finalData'. If there is, it parses that data from a JSON string back into a JavaScript object and sets it as the finalData state.

// Rendering Nested Data: The renderNestedData function is a recursive function that takes an object and a parent key as arguments. It maps over the entries of the object (key-value pairs) and for each entry, it checks if the value is an object. If it is, it calls itself with the value (which is an object) and the key as arguments. If the value is not an object, it simply returns a div with the key and value. If the parent key is 'projects', it changes the key to 'Project 1', 'Project 2', etc. by using the index.

// Rendering the Component: In the return statement of the Dashboard component, it renders a div that contains a title and the finalData state rendered with the renderNestedData function.

// Styling: The component uses CSS modules for styling. The styles are imported from 'Dashboard.module.css' and applied to the elements in the JSX.

// The commented out useEffect and renderNestedData are previous versions of the code that have been replaced with the new renderNestedData function.