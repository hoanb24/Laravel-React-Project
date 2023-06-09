import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    hometown: '',
    class: '',
    image: ''
  });
  const [updateStudent, setUpdateStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get('https://643918404660f26eb1aa3099.mockapi.io/21pnv1a')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent((prevState) => ({
      ...prevState,
      [name]: value
    }));
    if (updateStudent) {
      setUpdateStudent((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const addStudent = () => {
    axios
      .post('https://643918404660f26eb1aa3099.mockapi.io/21pnv1a', newStudent)
      .then((response) => {
        setStudents((prevState) => [...prevState, response.data]);
        setNewStudent({
          id: '',
          name: '',
          hometown: '',
          class: '',
          image: ''
        });
        setShowForm(false);
      })
      .catch((error) => {
        console.error('Error adding student:', error);
      });
  };

  const updateStudentData = () => {
    axios
      .put(`https://643918404660f26eb1aa3099.mockapi.io/21pnv1a/${updateStudent.id}`, updateStudent)
      .then((response) => {
        setStudents((prevState) => prevState.map((student) => (student.id === updateStudent.id ? response.data : student)));
        setUpdateStudent(null);
        setNewStudent({
          id: '',
          name: '',
          hometown: '',
          class: '',
          image: ''
        });
        setShowForm(false);
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setUpdateStudent(null);
    setNewStudent({
      id: '',
      name: '',
      hometown: '',
      class: '',
      image: ''
    });
  };

  const deleteStudent = (studentId) => {
    axios
      .delete(`https://643918404660f26eb1aa3099.mockapi.io/21pnv1a/${studentId}`)
      .then(() => {
        setStudents((prevState) => prevState.filter((student) => student.id !== studentId));
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
      });
  };

  const updateForm = (student) => {
    setUpdateStudent(student);
    setShowForm(true);
    setNewStudent({
      id: student.id,
      name: student.name,
      hometown: student.hometown,
      class: student.class,
      image: student.image
    });
  };

  return (
    <div className="container">
      <h1>Danh sách sinh viên</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Quê quán</th>
            <th>Lớp</th>
            <th>Hình ảnh</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.hometown}</td>
              <td>{student.class}</td>
              <td>
                <img src={student.image} alt={student.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>
                  Xóa
                </button>
                <button className="btn btn-primary ml-2" onClick={() => updateForm(student)}>
                  Cập nhật
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!showForm && (
        <button className="btn btn-primary" onClick={toggleForm}>
          Thêm sinh viên
        </button>
      )}

      {showForm && (
        <div>
          {updateStudent ? <h2>Cập nhật sinh viên</h2> : <h2>Thêm sinh viên</h2>}
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>ID:</label>
                  <input
                    type="text"
                    name="id"
                    value={newStudent.id}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Tên:</label>
                  <input
                    type="text"
                    name="name"
                    value={newStudent.name}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Quê quán:</label>
                  <input
                    type="text"
                    name="hometown"
                    value={newStudent.hometown}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Lớp:</label>
                  <input
                    type="text"
                    name="class"
                    value={newStudent.class}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Hình ảnh:</label>
                  <input
                    type="text"
                    name="image"
                    value={newStudent.image}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            {updateStudent ? (
              <button type="button" className="btn btn-success" onClick={updateStudentData}>
                Cập nhật sinh viên
              </button>
            ) : (
              <button type="button" className="btn btn-success" onClick={addStudent}>
                Thêm sinh viên
              </button>
            )}
            <button type="button" className="btn btn-secondary" onClick={toggleForm}>
              Hủy
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
