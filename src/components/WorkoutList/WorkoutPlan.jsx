import React, { useState } from "react";
import "./WorkoutPlan.css";
import { Link } from "react-router-dom";

// Exercise data
const exercises = {
  weightLoss: {
    shoulder: [
      { name: "Jumping Jacks", gif: "gifs/shoulder1.gif" },
      { name: "Arm Circles", gif: "gifs/shoulder2.gif" },
      { name: "Dumbbell Press", gif: "gifs/shoulder3.gif" },
    ],
    biceps: [
      { name: "Bicep Curls", gif: "gifs/biceps1.gif" },
      { name: "Hammer Curls", gif: "gifs/biceps2.gif" },
      { name: "Resistance Band Curls", gif: "gifs/biceps3.gif" },
    ],
    triceps: [
      { name: "Tricep Dips", gif: "gifs/triceps1.gif" },
      { name: "Overhead Extensions", gif: "gifs/triceps2.gif" },
      { name: "Pushdowns", gif: "gifs/triceps3.gif" },
    ],
    chest: [
      { name: "Push-Ups", gif: "gifs/chest1.gif" },
      { name: "Incline Push-Ups", gif: "gifs/chest2.gif" },
      { name: "Chest Flys", gif: "gifs/chest3.gif" },
    ],
    back: [
      { name: "Pull-Ups", gif: "gifs/back1.gif" },
      { name: "Superman Pose", gif: "gifs/back2.gif" },
      { name: "Bent-Over Rows", gif: "gifs/back3.gif" },
    ],
    legs: [
      { name: "Bodyweight Squats", gif: "gifs/legs1.gif" },
      { name: "Lunges", gif: "gifs/legs2.gif" },
      { name: "Step-Ups", gif: "gifs/legs3.gif" },
    ],
  },
  bodybuilding: {
    shoulder: [
      { name: "Overhead Press", gif: "gifs/shoulder4.gif" },
      { name: "Lateral Raises", gif: "gifs/shoulder5.gif" },
      { name: "Front Raises", gif: "gifs/shoulder6.gif" },
    ],
    biceps: [
      { name: "Barbell Curls", gif: "gifs/biceps4.gif" },
      { name: "Concentration Curls", gif: "gifs/biceps5.gif" },
      { name: "Incline Curls", gif: "gifs/biceps6.gif" },
    ],
    triceps: [
      { name: "Close-Grip Bench Press", gif: "gifs/triceps4.gif" },
      { name: "Skull Crushers", gif: "gifs/triceps5.gif" },
      { name: "Kickbacks", gif: "gifs/triceps6.gif" },
    ],
    chest: [
      { name: "Bench Press", gif: "gifs/chest4.gif" },
      { name: "Incline Bench Press", gif: "gifs/chest5.gif" },
      { name: "Cable Flys", gif: "gifs/chest6.gif" },
    ],
    back: [
      { name: "Deadlifts", gif: "gifs/back4.gif" },
      { name: "Pull-Ups", gif: "gifs/back5.gif" },
      { name: "T-Bar Rows", gif: "gifs/back6.gif" },
    ],
    legs: [
      { name: "Barbell Squats", gif: "gifs/legs4.gif" },
      { name: "Leg Press", gif: "gifs/legs5.gif" },
      { name: "Romanian Deadlifts", gif: "gifs/legs6.gif" },
    ],
  },
};

// Navbar component
const Navbar = ({ menu, setMenu }) => (
  <nav className="navbar">
    <div className="logo">FitWe</div>
    <ul className="nav-links">
    <li>
        <Link
          to="/Welcome"
          onClick={() => setMenu("Welcome")}
          className={menu === "Welcome" ? "active" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/WorkoutPlan"
          onClick={() => setMenu("WorkoutPlan")}
          className={menu === "WorkoutPlan" ? "active" : ""}
        >
          Workout Plans
        </Link>
      </li>
      <li>
        <Link
          to="/BMICalculator"
          onClick={() => setMenu("BMICalculator")}
          className={menu === "BMICalculator" ? "active" : ""}
        >
          BMI Calculator
        </Link>
      </li>
      <li>
        <Link
          to="/Trainer"
          onClick={() => setMenu("Trainer")}
          className={menu === "Trainer" ? "active" : ""}
        >
          Trainer
        </Link>
      </li>
      <li>
        <Link
          to="/Diet"
          onClick={() => setMenu("Diet")}
          className={menu === "Diet" ? "active" : ""}
        >
          Diet Plan
        </Link>
      </li>
      <li>
        <Link
          to="/Booking"
          onClick={() => setMenu("Booking")}
          className={menu === "Booking" ? "active" : ""}>
          Booking
        </Link>
      </li>
    </ul>
    <div className="buttons">
      <Link
        to="/"
        onClick={() => setMenu("Homepage")}
        className={menu === "Homepage" ? "active" : ""}
      >
        Logout
      </Link>
      <a href="#join" className="btn btn-join">
        Join Now
      </a>
    </div>
  </nav>
);

const WorkoutPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("weightLoss");
  const [menu, setMenu] = useState("");

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      <div className="workout-container">
        
        
        <h1 className="title">Workout Plan</h1>
        <div className="button-group">
          <button
            className={`plan-button ${
              selectedPlan === "weightLoss" ? "active" : ""
            }`}
            onClick={() => setSelectedPlan("weightLoss")}
          >
            Weight Loss
          </button>
          <button
            className={`plan-button ${
              selectedPlan === "bodybuilding" ? "active" : ""
            }`}
            onClick={() => setSelectedPlan("bodybuilding")}
          >
            Bodybuilding
          </button>
        </div>
        <div className="exercise-list">
          {Object.entries(exercises[selectedPlan]).map(([muscle, exList]) => (
            <div key={muscle} className="muscle-group">
              <h2>{muscle}</h2>
              <div className="exercises">
                {exList.map((exercise, index) => (
                  <div key={index} className="exercise-card">
                    <img
                      src={exercise.gif}
                      alt={exercise.name}
                      className="exercise-gif"
                    />
                    <p>{exercise.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
