import React from 'react';

const Schedule = ({ scheduleData }) => (
  <table>
    <thead>
      <tr>
        <th>Time</th>
        <th>Subject</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {scheduleData.map((event, index) => (
        <tr key={index}>
          <td>{event.time}</td>
          <td>{event.subject}</td>
          <td>{event.type}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Schedule;