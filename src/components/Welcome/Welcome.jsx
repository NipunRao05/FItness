import React,{useState} from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

function App() {
    const [menu,setMenu]=useState("")
  return (
    <div className="Welcome">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo">FitWe</span>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
          <Link to='/' onClick={() => setMenu("Homepage")} className={menu === "Homepage" ? "active" : ""}><li>Home</li></Link>
          <Link to='/WorkoutPlan' onClick={() => setMenu("WorkoutPlan")} className={menu === "WorkoutPlan" ? "active" : ""}><li>WorkoutPlans</li></Link>
          <Link to='/BMICalculator' onClick={() => setMenu("BMICalculator")} className={menu === "BMICalculator" ? "active" : ""}><li>BMICalculator</li></Link>
          <Link to='/Trainer' onClick={() => setMenu("Trainer")} className={menu === "Trainer" ? "active" : ""}><li>Trainer</li></Link>
          <Link to='/Diet' onClick={() => setMenu("Diet")} className={menu === "Diet" ? "active" : ""}><li>Diet Plan</li></Link>
          <Link to='/Booking' onClick={() => setMenu("Booking")} className={menu === "Booking" ? "active" : ""}><li>Booking</li></Link>


            
          </ul>
        </div>
      </nav>
      <div className="welcome-message">
        <h1>Welcome Back!</h1>
      </div>
    </div>
  );
}

export default App;

