import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = ({ students, setStudents }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!name || !course) {
      alert('All fields are required.');
      return;
    }
    const newStudent = { id: students.length + 1, name, course };
    setStudents([...students, newStudent]);
    setName('');
    setCourse('');
  };

  return (
    <div className="student-form">
      <h2>Add Student</h2>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;