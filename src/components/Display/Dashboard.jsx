import React, { useContext } from 'react';
import FormContext from '../Context/Form/FormContext';

const Dashboard = () => {
  const { finalData } = useContext(FormContext);

  const renderFinalData = () => {
    return Object.entries(finalData).map(([key, value]) => (
      <div key={key}>
        <strong>{key}:</strong> {value}
      </div>
    ));
  };

  return (
    <div>
      <p>Your Input Data are:</p>
      {renderFinalData()}
    </div>
  );
};

export default Dashboard;
