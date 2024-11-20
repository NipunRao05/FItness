import {useState} from 'react'
import { Link } from 'react-router-dom'
 
function Booking() {
const [menu,setMenu]= useState("")

return(
    <div>
    <nav className="navbar">
      <div className="logo">FitWe</div>
      <ul className="nav-links">
      <Link to='/Welcome' onClick={() => setMenu("Welcome")} className={menu === "Welcome" ? "active" : ""}><li>Home</li></Link>  
    <Link to='/WorkoutPlan' onClick={() => setMenu("WorkoutPlan")} className={menu === "WorkoutPlan" ? "active" : ""}><li>WorkoutPlans</li></Link>
    <Link to='/BMICalculator' onClick={() => setMenu("BMICalculator")} className={menu === "BMICalculator" ? "active" : ""}><li>BMI Calculator</li></Link> 
   <Link to='/Trainer' onClick={() => setMenu("Trainer")} className={menu === "Trainer" ? "active" : ""}><li>Trainer</li></Link> 
    <Link to='/Diet' onClick={() => setMenu("Diet")} className={menu === "Diet" ? "active" : ""}><li>Diet Plan</li></Link>  
    <Link to='/Booking' onClick={() => setMenu("Booking")} className={menu === "Booking" ? "active" : ""}><li>Booking</li></Link>  


      </ul>
      
      <div className="buttons">
            <Link to="/" className="btn btn-join1">
              Sign Out
            </Link>
       </div>
    </nav>
    
  </div>

)
};


export default Booking