// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './BMI.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState('');
  const [menu, setMenu] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      setBMI(calculatedBMI);

      let bmiStatus = '';
      if (calculatedBMI < 18.5) bmiStatus = 'Underweight';
      else if (calculatedBMI < 24.9) bmiStatus = 'Normal weight';
      else if (calculatedBMI < 29.9) bmiStatus = 'Overweight';
      else bmiStatus = 'Obesity';

      setStatus(bmiStatus);
    } else {
      alert('Please fill in all fields correctly!');
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FitWe</div>
        <ul className="nav-links">
        <Link
            to="/Welcome"
            onClick={() => setMenu("Welcome")}
            className={menu === "WorkoutPlan" ? "active" : ""}
          >
            <li>Home</li></Link>
          <Link
            to="/WorkoutPlan"
            onClick={() => setMenu("WorkoutPlan")}
            className={menu === "WorkoutPlan" ? "active" : ""}
          >
            <li>Workout Plans</li>
          </Link>
          <Link
            to="/BMICalculator"
            onClick={() => setMenu("BMICalculator")}
            className={menu === "BMICalculator" ? "active" : ""}
          >
            <li>BMI Calculator</li>
          </Link>
          <Link
            to="/Trainer"
            onClick={() => setMenu("Trainer")}
            className={menu === "Trainer" ? "active" : ""}
          >
            <li>Trainer</li>
          </Link>
          <Link
            to="/Diet"
            onClick={() => setMenu("Diet")}
            className={menu === "Diet" ? "active" : ""}
          >
            <li>Diet Plan</li>
          </Link>
          <Link
            to="/Booking"
            onClick={() => setMenu("Booking")}
            className={menu === "Booking" ? "active" : ""}
          >
            <li>Booking</li></Link>
        </ul>
        <div className="buttons">
          <Link to="/" className="btn btn-join1">
            Sign Out
          </Link>
          
        </div>
      </nav>

      {/* BMI Calculator */}
      <div className="overlay">
        <div className="bmi-container">
          <h1>BMI Calculator</h1>
          <div className="form-group">
            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in cm"
            />
          </div>
          <div className="form-group">
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kg"
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          {bmi && (
            <div className="result">
              <h2>Your BMI: {bmi}</h2>
              <p>Status: {status}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
