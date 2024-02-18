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
          This is Mr. {finalData.name}. He is living at {finalData.address}. You
          can contact Mr. {finalData.name} with email: {finalData.email}. He is
          from {finalData.state} province.
        </div>
      </div>
      <div className="projects no-gap">
        {finalData.projects &&
          finalData.projects.map((project, index) => (
            <div key={index} className="form3">
              Project: {project.title}&nbsp;&nbsp;
              <span>Description: {project.description}</span>
            </div>
          ))}
      </div>

      <div>
        <h3>Faculty Subjects</h3>
        {finalData.facultySubjects &&
          Object.entries(finalData.facultySubjects).map(
            ([faculty, semesters]) => (
              <div key={faculty}>
                <h4>{faculty}</h4>
                {Object.entries(semesters).map(([semester, subjects]) => (
                  <div key={semester}>
                    <h5>Semester {semester}</h5>
                    <ul>
                      {subjects.map((subject, index) => (
                        <li key={index}>
                          {typeof subject === "object" ? (
                            <span>
                              {subject.name}: {subject.marks}
                            </span>
                          ) : (
                            subject
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Dashboard;
