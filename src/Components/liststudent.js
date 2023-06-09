import React, { useState, useEffect } from 'react';
import studentData from './21pnv1a.json';


function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentData);
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Hometown</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.hoten}</td>
              <td>{student.gioitinh}</td>
              <td>{student.quequan}</td>
              <td>{student.sodienthoai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
