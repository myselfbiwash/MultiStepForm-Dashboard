import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [finalData, setFinalData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("finalData");
    if (storedData) {
      setFinalData(JSON.parse(storedData));
    }
  }, []);

  // Check if finalData.projects exists and has at least one element
  const projectTitle = finalData.projects && finalData.projects.length > 0 ? finalData.projects[0].title : '';

  return (
    <div className="dashboard">
      <div className="form1">  Name: {finalData.name}</div>
      <div className="form2">  Address: {finalData.address}</div>
      <div className="form3">  Project: {projectTitle}</div>
      <div className="form4">  Computer: {finalData.marksheet && finalData.marksheet.computer}</div>
    </div>
  );
};

export default Dashboard;
