import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import './StudentList.css';

const StudentList = ({ students }) => {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const mock = new MockAdapter(axios);
    mock.onGet('/api/students').reply(200, [
      { id: 1, name: 'Srinidhi', course: 'EEE' },
      { id: 2, name: 'priyanka', course: 'CSE' },
    ]);

    axios.get('/api/students').then((response) => {
      setFilteredStudents(response.data);
    });
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setFilteredStudents(
      students.filter((student) => student.course.toLowerCase().includes(value.toLowerCase()))
    );
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <input
        type="text"
        placeholder="Filter by course"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;