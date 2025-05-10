import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [students, setStudents] = useState([]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.reload(); // Reload the page to navigate back to the login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user.email}</h1>
      <StudentForm students={students} setStudents={setStudents} />
      <StudentList students={students} />
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;