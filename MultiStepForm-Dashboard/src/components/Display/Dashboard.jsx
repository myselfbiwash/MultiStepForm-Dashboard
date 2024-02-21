import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

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
      <Navbar />
      <div className="intro">
        <div className="form1">
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> {finalData.name}</p>
          <p><strong>Email:</strong> {finalData.email}</p>
          <p><strong>Phone No.:</strong> {finalData.phoneNumber}</p>
          <p><strong>Date of Birth:</strong> {finalData.dateOfBirth}</p>
        </div>
        <div className="form2">
          <p>This is Mr. {finalData.name}. He is living at {finalData.address}. You
          can contact Mr. {finalData.name} with email: {finalData.email}. He is
          from {finalData.state} province.</p>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        {finalData.projects &&
          finalData.projects.map((project, index) => (
            <div key={index} className="form3">
              <h3>Project: {project.title}</h3>
              <p><strong>Description:</strong> {project.description}</p>
            </div>
          ))}
      </div>

      <div>
        <h2>Faculty Subjects</h2>
        {finalData.facultySubjects &&
  Object.entries(finalData.facultySubjects).map(
    ([faculty, semesters]) => {
      
      
      const hasMarks = Object.values(semesters).some(subjects =>
        subjects.some(subject => subject.marks !== null && subject.marks !== undefined)
      );
      return hasMarks ? (
        <div key={faculty}>
          <h3>{faculty}</h3>
          {Object.entries(semesters).map(([semester, subjects]) => {
            const hasMarksInSemester = subjects.some(subject => subject.marks !== null && subject.marks !== undefined);
            return hasMarksInSemester ? (
              <div key={semester}>
                <h4>Semester {semester}</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject, index) =>
                      subject.marks !== null && subject.marks !== undefined ? (
                        <tr key={index}>
                          <td>{subject.name}</td>
                          <td>{subject.marks}</td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
              </div>
            ) : null;
          })}
        </div>
      ) : null;
    }
  )}
      </div>
    </div>
  );
};

export default Dashboard;