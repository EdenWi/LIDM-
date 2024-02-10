import React from 'react';
import logo from './logo.svg'; // Sesuaikan path logo sesuai struktur proyek Anda
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Dashboard</p>
      </nav>
      <div className="content">
        <div className="square"></div>
        <p>Hello, welcome to the dashboard!</p>
        {/* Tambahkan komponen Dashboard lainnya yang diperlukan */}
      </div>
    </div>
  );
}

export default Dashboard;
