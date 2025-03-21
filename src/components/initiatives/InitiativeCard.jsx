import React from 'react';

const InitiativeCard = ({ initiative }) => {
  return (
    <div className="initiative-card">
      <h3>{initiative.title}</h3>
      <p>{initiative.description}</p>
      <p>Impact: {initiative.impact}</p>
      <p>Duration: {initiative.duration}</p>
      <button className="btn">Learn More</button>
    </div>
  );
};

export default InitiativeCard;