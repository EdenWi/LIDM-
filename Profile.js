import React from 'react';
import './App.css';

function Profile() {
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <img src="https://via.placeholder.com/150" alt="Profile picture" />
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <p>Role: Admin</p>
    </div>
  );
}

export default Profile;