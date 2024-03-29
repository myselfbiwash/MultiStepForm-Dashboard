import React, { useState, useEffect } from 'react';

const DisplayData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem("data");
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    return (
        <div className="dashboard">
            <div className="intro">
                <div className="form1">
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Address:</strong> {data.address}</p>
                </div>
            </div>
            <div className="projects">
                <h2>Projects</h2>
                {data.projects &&
                    data.projects.map((project, index) => (
                        <div key={index} className="form3">
                            <h3>Project: {project.title}</h3>
                            <p><strong>Description:</strong> {project.description}</p>
                        </div>
                    ))}
            </div>

            <div>
                <h2>Faculty Subjects</h2>
                {data.facultySubjects &&
                    Object.entries(data.facultySubjects).map(
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

export default DisplayData;