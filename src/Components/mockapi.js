import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://643918404660f26eb1aa3099.mockapi.io/21pnv1a');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Hometown</th>
            <th>Phone</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.hometown}</td>
              <td>{student.phonenumber}</td>
              <td><img src={student.img}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
