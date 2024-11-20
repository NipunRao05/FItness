import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import WorkoutPlan from './components/WorkoutList/WorkoutPlan';
import BMICalculator from './components/BMI cal/BMI';
import { Route,Router,Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import Signup from './components/SignUp/Signup';
import Login from './components/SignUp/Login';
import Trainer from './components/Trainer/Trainer'
import Diet from './components/Diet/Diet'
import Welcome from './components/Welcome/Welcome'
import Booking from './components/Booking/Booking'
// const Navbar = ({ menu, setMenu }) => {
//     return (
//       <nav className="navbar">
//         <div className="logo">FitWe</div>
//         <ul className="nav-links">
//           <li>
//             <Link
//               to="/WorkoutPlan"
//               onClick={() => setMenu("WorkoutPlan")}
//               className={menu === "WorkoutPlan" ? "active" : ""}
//             >
//               Workout Plans
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/BMICalculator"
//               onClick={() => setMenu("BMICalculator")}
//               className={menu === "BMICalculator" ? "active" : ""}
//             >
//               BMI Calculator
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/Trainer"
//               onClick={() => setMenu("Trainer")}
//               className={menu === "Trainer" ? "active" : ""}
//             >
//               Trainer
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/Diet"
//               onClick={() => setMenu("Diet")}
//               className={menu === "Diet" ? "active" : ""}
//             >
//               Diet Plan
//             </Link>
//           </li>
//         </ul>
//         <div className="buttons">
//           <Link
//             to="/"
//             onClick={() => setMenu("Homepage")}
//             className={menu === "Homepage" ? "active" : ""}
//           >
//             Logout
//           </Link>
//         </div>
//       </nav>
//     );
//   };
function App() {
    return (
        <div className="App">
        


        {/* <Navbar/> */}
        
         <Routes>          
          <Route path='/Trainer' element={<Trainer/>}/>
          <Route path='/BMICalculator' element={<BMICalculator/>}/>
          <Route path='/Diet' element={<Diet/>}/>
          <Route path='/Welcome' element={<Welcome/>}/>
          <Route path='/' element={<Homepage />} />
         <Route path='/WorkoutPlan' element={<WorkoutPlan />} />
          <Route path='/Login' element={<Login/>}/> 
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Booking' element={<Booking/>}/>




        </Routes>

              
        </div>
        
    )
}

export default App; 
