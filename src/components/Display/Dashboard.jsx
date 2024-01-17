import React, { useContext } from 'react';
import FormContext from '../Context/Form/FormContext';

const Dashboard = () => {
  const { finalData } = useContext(FormContext);
  console.log("Final Data is:", finalData);

  const renderFinalData = () => {
    return Object.entries(finalData).map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return (
          <div key={key}>
            <strong>{key}:</strong>
            {Object.entries(value).map(([subKey, subValue]) => (
              <div key={subKey}>
                <strong>{subKey}:</strong> {subValue}
              </div>
            ))}
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
      {renderFinalData()}
    </div>
  );
};

export default Dashboard;
