import React, { useState } from 'react';
import './Homepage.css'; // Import the provided CSS
import { assets } from '../../assets/assets'; // Ensure the path is correct
import { Link } from 'react-router-dom';

function Homepage() {
  const [menu, setMenu] = useState(""); // Initialize state for active menu
  
  return (
    <main>
      <div>
        {/* Header Section */}
        <header>
          <div className="header-container">
            <div className="logo">
              FitWe            </div>
            <nav className="auth-buttons1">
              <ul>
                
              </ul>
            </nav>
            <div className="auth-buttons">
              
              <Link to="/Signup" className="btn btn-join">
                Sign Up
              </Link>
            </div>
          </div>
        </header>
        {/* <img className="img" src={assets.bg1} alt="Background" /> */}

        {/* Hero Section */}
        <section className="hero">

          <h1>Unleash Your Inner Athlete</h1>
          <p>We are dedicated to helping you transform your body and mind through the power of fitness.</p>
          <div className="cta-buttons">
            <Link to="/Signup" className="btn btn-primary">
              Join Now
            </Link>
            <Link to="/Signup" className="btn btn-secondary">
              Join Free Trial
            </Link>
          </div>
          <p className="members-count">500+ Members Happy</p>
        </section>

        {/* Transform Your Fitness Journey Section */}
        {/* <section className="fitness-journey">
          <h2>Transform Your Fitness Journey</h2>
          <div className="programs">
            <div className="program">
              <h3>Gym</h3>
              
            </div>
            <div className="program">
              <h3>Zumba</h3>
            </div>
            <div className="program">
              <h3>Yoga</h3>
            </div>
            <div className="program">
              <h3>Martial Art</h3>
            </div>
          </div>
        </section> */}

        {/* Comfortable Gym Section */}
        <section className="comfortable-gym">
          <div className="gallery">
            {/* Add gym equipment or location images here */}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Homepage;
