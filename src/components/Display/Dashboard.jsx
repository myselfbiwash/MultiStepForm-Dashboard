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

  

  return (
    <div className="dashboard">
      <div className="intro no-gap">
        <div className="form1 ">  
          <span>Name: {finalData.name}</span>
          <span>Email: {finalData.email}</span>
          <span>Phone No. : {finalData.phoneNumber}</span>
          <span>Date of Birth: {finalData.dateOfBirth}</span>
        </div>
        <div className="form2 no-gap">  
          This is Mr. {finalData.name}. He is living at {finalData.address}. You can contact Mr. {finalData.name} with email: {finalData.email}. He is from {finalData.state} province.
        </div>
      </div>
      <div className="projects no-gap">

      {finalData.projects && finalData.projects.map((project, index) => (
         <div key={index} className="form3">  
          Project: {project.title}&nbsp;&nbsp; 
          <span>Description: {project.description}</span>
        </div>
      ))}
             </div>

             <div className="form4">
  {finalData.marksheet && (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Computer</td>
          <td>{finalData.marksheet.computer}</td>
        </tr>
        <tr>
          <td>Math</td>
          <td>{finalData.marksheet.math}</td>
        </tr>
        <tr>
          <td>English</td>
          <td>{finalData.marksheet.english}</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>{finalData.marksheet.science}</td>
        </tr>
        <tr>
          <td>Nepali</td>
          <td>{finalData.marksheet.nepali}</td>
        </tr>
        <tr>
          <td>Social</td>
          <td>{finalData.marksheet.social}</td>
        </tr>
      </tbody>
    </table>
  )}
</div>
    </div>
  );
};

export default Dashboard;