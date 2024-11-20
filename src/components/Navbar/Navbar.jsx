import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar1 = () => {
  
  const [menu,setMenu] =useState("Homepage")
  const [user,setUser] =useState()
  return (
    <nav className="navbar">
      <h1>FitWe</h1>
      <ul>
     <Link to='/' onClick={() => setMenu("Homepage")} className={menu === "Homepage" ? "active" : ""}><li>Home</li></Link>
      <Link to='/WorkoutList' onClick={() => setMenu("WorkoutList")} className={menu === "WorkoutList" ? "active" : ""}><li>WorkoutPlans</li></Link>
      <Link to='/BMICalculator' onClick={() => setMenu("BMICalculator")} className={menu === "BMICalculator" ? "active" : ""}><li>BMI Calculator</li></Link> 
     <Link to='/Trainer' onClick={() => setMenu("Trainer")} className={menu === "Trainer" ? "active" : ""}><li>Trainer</li></Link> 
      <Link to='/Diet' onClick={() => setMenu("Diet")} className={menu === "Diet" ? "active" : ""}><li>Diet</li></Link>  
      {/* <Link to='/Signup' onClick={() => setMenu("Signup")} className={menu === "Signup" ? "active" : ""}><li>Signup</li></Link>     
      <Link to='/Login' onClick={() => setMenu("Login")} className={menu === "Login" ? "active" : ""}><li>Login</li></Link>  */}


        {/* <Route path='/' element={<Homepage />} />
				<Route path='/Login' element={!user ? <Login /> : <Navbar to={"/"} />} />
				<Route path='/Signup' element={!user ? <SignUpPage /> : <Navbar to={"/"} />} />
				<Route path='WorkoutList' element={user ? <WorkoutList /> : <Navbar to={"/Login"} />} />
				<Route path='/BMICalculator' element={user ? <BMICalculator /> : <Navbar to={"/Login"} />} />
				<Route path='/Trainer' element={user ? <Trainer /> : <Navbar to={"/Login"} />} />
				<Route path='/Diet' element={user ? <Diet /> : <Navbar to={"/Login"} />} /> */}


        {/* <li className={menu==="home"?"active":""}>Home</li>
        <li>Workout Plans</li>
        <li>BMI Calculator</li>
        <li>Login/SignUp</li> */}

      
      </ul>
    </nav>
  );
};

export default Navbar1;
