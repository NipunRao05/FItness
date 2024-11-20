
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './Signup.css'

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Signed up successfully!");
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <h1>Create Account</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn-primary">
//             Sign Up
//           </button>
//         </form>
//         <p className="auth-switch">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { Link } from "react-router-dom";
function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate()

  const [menu,setMenu]=useState()
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignup = () => {
    navigate('/welcome')
  }

  return (
    <div className="app">
      <div className="background-image"></div>
      <div className="card">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              required
            />
          )}
          <input
            type="tel"
            placeholder="Phone Number"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <button type="submit" className="submit-btn" onClick={handleSignup}>
          
          {/* <Link to='/Welcome' onClick={() => setMenu("Welcome")} className={menu === "Welcome" ? "active" : ""}><li><Welcome></Welcome></li></Link> */}
          {isSignUp ? "Sign Up" : "Login"}


          </button>
        </form>
        <p className="toggle-text" onClick={toggleForm}>
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
}
export default App;
