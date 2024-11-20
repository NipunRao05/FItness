import React,{useState }from "react";
import "./Trainer.css";
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';


function App() {
  const trainers = [
    {
      id: 1,    
      name: "John Doe",
      specialization: "Muscle Buliding",
      qualifications: "Certified trainer",
      experience: "7 years",
      image: assets.john,
      rating: 4.5,
    },
    {
      id: 2,
      name: " Sara Lee",
      specialization: "Zumba",
      qualifications: "Zumba Instructor",
      experience: "3 years",
      image: assets.jane,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Jane smith",
      specialization: "Cardio and Strength training",
      qualifications: "Certified Trainer",
      experience: "6 years",
      image: assets.sara,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Jack Benjamin",
      specialization: "Strength and Conditioning",
      qualifications: "Certified Trainer",
      experience: "3 years",
      image: assets.jack,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Katy Paul",
      specialization: "Yoga",
      qualifications: "Certified Yoga Trainer",
      experience: "10 years",
      image: assets.katy,
      rating: 4.7,
    },
    {
      id: 6,
      name: "George Matthew",
      specialization: "Calisthenics",
      qualifications: "Certified Trainer",
      experience: "6 years",
      image: assets.george,
      rating: 4.4,
    },
    {
      id: 7,
      name: "Josh Thompson",
      specialization: "Body building",
      qualifications: "Certified Trainer",
      experience: "6 years",
      image: assets.josh,
      rating: 4.9,
    },
    {
      id: 8,
      name: "Louis Mark",
      specialization: "Strength and Conditioning",
      qualifications: "Certified Trainer",
      experience: "5 years",
      image: assets.louis,
      rating: 4.6,
    },
    {
      id: 9,
      name: "Rachel jose",
      specialization: "Yoga",
      qualifications: "Certified Yoga Trainer",
      experience: "4 years",
      image: assets.rachel,
      rating: 4.7,
    },
    {
      id: 10,
      name: "Isaac Joseph",
      specialization: "Calisthenics",
      qualifications: "Certified Trainer",
      experience: "5 years",
      image: assets.isaac,
      rating: 4.7,
    },
    // Add more trainers here as needed
  ];
  return (
    <div>
      <MyApp />
      <div className="App">
        <h1 className="page-heading">Trainer Booking Session</h1>
        <div className="trainer-container">
          {trainers.map((trainer) => (
            <TrainerProfile key={trainer.id} trainer={trainer} />
          ))}
        </div>
        
      </div>
    </div>
  );
}

function MyApp() {
  const [menu,setMenu]=useState("")
  return (
    <div>
      <nav className="navbar">
        <div className="logo">FitWe</div>
        <ul className="nav-links">
        <li>
          <Link to='/Welcome' onClick={() => setMenu("Welcome")} className={menu === "Welcome" ? "active" : ""}><li>Home</li></Link>
          </li>

          <li>
            
          <Link to='/WorkoutPlan' onClick={() => setMenu("WorkoutPlan")} className={menu === "WorkoutPlan" ? "active" : ""}><li>Workout Plans</li></Link>
          </li>
          <li>
          <Link to='/BMICalculator' onClick={() => setMenu("BMICalculator")} className={menu === "BMICalculator" ? "active" : ""}><li>BMICalculator</li></Link>
          </li>
          <li>
          <Link to='/Trainer' onClick={() => setMenu("Trainer")} className={menu === "Trainer" ? "active" : ""}><li>Trainer</li></Link>
          </li>
          <li><Link to='/Diet' onClick={() => setMenu("Diet")} className={menu === "Diet" ? "active" : ""}><li>Diet Plan</li></Link>
          </li>
          <li><Link to='/Booking' onClick={() => setMenu("Booking")} className={menu === "Booking" ? "active" : ""}><li>Booking</li></Link>
          </li>
        </ul>
        <div className="buttons">
              <Link to="/" className="btn btn-join1">
                Sign Out
              </Link>
          
        </div>
      </nav>
    </div>
  );
}
  
function TrainerProfile({ trainer }) {
  return (
    <div className="trainer-card">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="trainer-image"
        onError={(e) => (e.target.src = "/images/placeholder.jpg")}
      />
      <h2>{trainer.name}</h2>
      <p>
        <strong>Specialization:</strong> {trainer.specialization}
      </p>
      <p>
        <strong>Qualifications:</strong> {trainer.qualifications}
      </p>
      <p>
        <strong>Experience:</strong> {trainer.experience}
      </p>
      <p>
        <strong>Rating:</strong> {trainer.rating} ★
      </p>
      <button
        onClick={() => alert("Booking a session with " + trainer.name)}
      >
        Book a Session
      </button>
    </div>
        
    
);
}

export default App
