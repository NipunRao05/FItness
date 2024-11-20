import React from 'react';
import './WorkoutCard.css';

const WorkoutCard = ({ plan }) => {
    return (
        <div className="workout-card">
            <img src={plan.image} alt={plan.title} className="workout-image" />
            <div className="workout-info">
                <h3>{plan.title}</h3>
                <p>{plan.goal}</p>
                <p>For: {plan.gender}</p>
                <p>Duration: {plan.duration}</p>
            </div>
            <div className="workout-actions">
                <button className="view-details">View Details</button>
                <button className="save">Save</button>
            </div>
        </div>
    );
};

export default WorkoutCard;
