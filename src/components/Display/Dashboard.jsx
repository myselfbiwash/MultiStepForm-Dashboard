import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [finalData, setFinalData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('finalData');
    if (storedData) {
      setFinalData(JSON.parse(storedData));
    }
    console.log(JSON.parse(storedData));
  }, []); // Empty dependency array, runs only once after the initial render

  // useEffect(() => {
  //   // This effect will run every time `finalData` changes
  //   localStorage.setItem('finalData', JSON.stringify(finalData));
  // }, [finalData]); // Dependency on `finalData`

  const renderNestedData = (data) => {
    return Object.entries(data).map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return (
          <div key={key}>
            <strong>{key}:</strong>
            {renderNestedData(value)}
          </div>
        );
      } else {
        return (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        );
      }
    });
  };

  return (
    <div>
      <p>Your Input Data are:</p>
      {renderNestedData(finalData)}
    </div>
  );
};

export default Dashboard;
