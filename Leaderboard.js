import React from 'react';

const LeaderBoard = ({ leaderboardData }) => (
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Major Speller</th>
        <th>Score</th>
        <th>Goals</th>
      </tr>
    </thead>
    <tbody>
      {leaderboardData.map((student, index) => (
        <tr key={student.name}>
          <td>{index + 1}</td>
          <td>{student.name}</td>
          <td>{student.majorSpeller}</td>
          <td>{student.score}</td>
          <td>{student.goals}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LeaderBoard;