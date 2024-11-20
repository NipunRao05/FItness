import React, { useState } from "react";
import "./Diet.css";
import { Link } from "react-router-dom";

// Sample meal plan for 4 weeks with different plans for weight loss and weight gain
const mealPlan = {
  weightLoss: {
    week1: [
      { day: "Monday", meals: [
      { mealType: "Breakfast", name: "Avocado Toast", img: "/images/avocado_toast.jpg" }, 
      { mealType: "Lunch", name: "Spinach Salad", img: "/images/spinach_salad.jpg" }, 
      { mealType: "Dinner", name: "Brown rice Khichdi", img: "/images/brown rice khichdi.jpg" }] },
      { day: "Tuesday", meals:[ 
        {mealType:"Breakfast", name:"Oatmeal with chia seeds", img: "/images/oatmeal.jpg" },
        { mealType: "Lunch", name:"Phulkas with kadai vegetable", img: "/images/phulkas_kv.jpg"},
        { mealType: "Dinner", name: "Curd Rice", img: "/images/curd rice.jpg" }] },
      { day: "Wednesday", meals:[ 
        {mealType:"Breakfast", name:"Sweet Corn Soup", img: "/images/sweet corn soup.jpg" },
        { mealType: "Lunch", name:"Rice with tomato Rasam", img: "/images/tomato rasam.jpg"},
        { mealType: "Dinner", name: "Grilled Chicken with Veggies", img: "/images/grilled chicken.jpg" }] },
      { day: "Thursday", meals:[ 
          {mealType:"Breakfast", name:"High Protein boiled sprouts", img: "/images/boiled sprouts.jpg" },
          { mealType: "Lunch", name:"Chappati with Green peas curry", img: "/images/green peas.jpg"},
          { mealType: "Dinner", name: "Veg Pulav with buttermilk", img: "/images/veg pulav.jpg" }] },
      { day: "Friday", meals:[ 
          {mealType:"Breakfast", name:"Poha with Sev", img: "/images/poha.jpg" },
          { mealType: "Lunch", name:"Jowar Roti with sabzi", img: "/images/jowar roti.jpg"},
          { mealType: "Dinner", name: "Sweet Potato chaat", img: "/images/sweet p.jpg" }] },
      { day: "Saturday", meals:[ 
          {mealType:"Breakfast", name:"Kiwi Avocado green smoothie", img: "/images/kiwi.jpg" },
          { mealType: "Lunch", name:"Ragi Roti with sabzi", img: "/images/ragi roti.jpg"},
          { mealType: "Dinner", name: "Roti with fish curry", img: "/images/fish curry.jpg" }] },
      { day: "Sunday", meals:[ 
          {mealType:"Breakfast", name:"Strawberry Banana Smoothie", img: "/images/strawberry.jpg" },
          { mealType: "Lunch", name:"Rice with dal", img: "/images/rice with dal.jpg"},
          { mealType: "Dinner", name: "Phulka with Pumpkin Sabzi", img: "/images/pumpkin.jpg" }] },
        ],
    week2: [
      { day: "Monday", meals:[ 
        {mealType:"Breakfast", name:"Egg Omlette", img: "/images/omelette.jpg" },
        { mealType: "Lunch", name:"Rajma Chawal", img: "/images/rajma.jpg"},
        { mealType: "Dinner", name: "Spinach Corn Salad", img: "/images/spinach corn.jpg" }] },
      { day: "Tuesday", meals:[ 
        {mealType:"Breakfast", name:"Pancake with maple syrup", img: "/images/pancake.jpg" },
        { mealType: "Lunch", name:"Chicken stir fry with brocolli", img: "/images/chicken stir fry.jpg"},
        { mealType: "Dinner", name: "Stuffed Multigrain paratha ", img: "/images/stuffed.jpg" }] },
      { day: "Wednesday", meals:[ 
          {mealType:"Breakfast", name:"Greek Yogurt with Nuts", img: "/images/yogurt.jpg" },
          { mealType: "Lunch", name:"Millet Roti with sabzi", img: "/images/millet.jpg"},
          { mealType: "Dinner", name: "Rice with moong dal", img: "/images/moong.jpg" }] },
      { day: "Thursday", meals:[ 
          {mealType:"Breakfast", name:"Chickpea Salad", img: "/images/chickpea.jpg" },
          { mealType: "Lunch", name:"Paneer wrap", img: "/images/paneer wrap.jpg"},
          { mealType: "Dinner", name: "Lentil Stew with rice", img: "/images/lentil stew.jpg" }] },
      { day: "Friday", meals:[ 
          {mealType:"Breakfast", name:"Scrambled eggs", img: "/images/scrambled eggs.jpg" },
          { mealType: "Lunch", name:"Chicken biriyani", img: "/images/chicken biriyani.jpg"},
          { mealType: "Dinner", name: "Honey Lemon tea", img: "/images/honey lemon tea.jpg" }] },
      { day: "Saturday", meals:[ 
          {mealType:"Breakfast", name:"Quinoa Dosa", img: "/images/quinoa.jpg" },
          { mealType: "Lunch", name:"Chapatti with Palak Paneer", img: "/images/palak.jpg"},
          { mealType: "Dinner", name: "Fruit salad", img: "/images/fruit salad.jpg" }] },
      { day: "Sunday", meals:[ 
          {mealType:"Breakfast", name:"Lentil soup", img: "/images/lentil soup.jpg" },
          { mealType: "Lunch", name:"Egg bhurjhi", img: "/images/egg bhurji.jpg"},
          { mealType: "Dinner", name: "Green Tea", img: "/images/green tea.jpg" }] },],
    week3: [
      { day: "Monday", meals: [
           { mealType: "Breakfast", name: "Avocado Toast", img: "/images/avocado_toast.jpg" }, 
           { mealType: "Lunch", name: "Spinach Salad", img: "/images/spinach_salad.jpg" }, 
           { mealType: "Dinner", name: "Brown rice Khichdi", img: "/images/brown rice khichdi.jpg" }] },
      { day: "Tuesday", meals:[ 
           {mealType:"Breakfast", name:"Oatmeal with chia seeds", img: "/images/oatmeal.jpg" },
           { mealType: "Lunch", name:"Phulkas with kadai vegetable", img: "/images/phulkas_kv.jpg"},
           { mealType: "Dinner", name: "Curd Rice", img: "/images/curd rice.jpg" }] },
      { day: "Wednesday", meals:[ 
            {mealType:"Breakfast", name:"Sweet Corn Soup", img: "/images/sweet corn soup.jpg" },
            { mealType: "Lunch", name:"Rice with tomato Rasam", img: "/images/tomato rasam.jpg"},
            { mealType: "Dinner", name: "Grilled Chicken with Veggies", img: "/images/grilled chicken.jpg" }] },
      { day: "Thursday", meals:[ 
            {mealType:"Breakfast", name:"High Protein boiled sprouts", img: "/images/boiled sprouts.jpg" },
            { mealType: "Lunch", name:"Chappati with Green peas curry", img: "/images/green peas.jpg"},
            { mealType: "Dinner", name: "Veg Pulav with buttermilk", img: "/images/veg pulav.jpg" }] },
      { day: "Friday", meals:[ 
            {mealType:"Breakfast", name:"Poha with Sev", img: "/images/poha.jpg" },
            { mealType: "Lunch", name:"Jowar Roti with sabzi", img: "/images/jowar roti.jpg"},
            { mealType: "Dinner", name: "Sweet Potato chaat", img: "/images/sweet p.jpg" }] },
      { day: "Saturday", meals:[ 
             {mealType:"Breakfast", name:"Kiwi Avocado green smoothie", img: "/images/kiwi.jpg" },
             { mealType: "Lunch", name:"Ragi Roti with sabzi", img: "/images/ragi roti.jpg"},
             { mealType: "Dinner", name: "Roti with fish curry", img: "/images/fish curry.jpg" }] },
      { day: "Sunday", meals:[ 
              {mealType:"Breakfast", name:"Strawberry Banana Smoothie", img: "/images/strawberry.jpg" },
              { mealType: "Lunch", name:"Rice with dal", img: "/images/rice with dal.jpg"},
              { mealType: "Dinner", name: "Phulka with Pumpkin Sabzi", img: "/images/pumpkin.jpg" }] },
                  ],
    week4: [
      { day: "Monday", meals:[ 
              {mealType:"Breakfast", name:"Egg Omlette", img: "/images/omelette.jpg" },
              { mealType: "Lunch", name:"Rajma Chawal", img: "/images/rajma.jpg"},
              { mealType: "Dinner", name: "Spinach Corn Salad", img: "/images/spinach corn.jpg" }] },
      { day: "Tuesday", meals:[ 
              {mealType:"Breakfast", name:"Pancake with maple syrup", img: "/images/pancake.jpg" },
              { mealType: "Lunch", name:"Chicken stir fry with brocolli", img: "/images/chicken stir fry.jpg"},
              { mealType: "Dinner", name: "Stuffed Multigrain paratha ", img: "/images/stuffed.jpg" }] },
      { day: "Wednesday", meals:[ 
              {mealType:"Breakfast", name:"Greek Yogurt with Nuts", img: "/images/yogurt.jpg" },
              { mealType: "Lunch", name:"Millet Roti with sabzi", img: "/images/millet.jpg"},
              { mealType: "Dinner", name: "Rice with moong dal", img: "/images/moong.jpg" }] },
      { day: "Thursday", meals:[ 
              {mealType:"Breakfast", name:"Chickpea Salad", img: "/images/chickpea.jpg" },
              { mealType: "Lunch", name:"Paneer wrap", img: "/images/paneer wrap.jpg"},
              { mealType: "Dinner", name: "Lentil Stew with rice", img: "/images/lentil stew.jpg" }] },
      { day: "Friday", meals:[ 
              {mealType:"Breakfast", name:"Scrambled eggs", img: "/images/scrambled eggs.jpg" },
              { mealType: "Lunch", name:"Chicken biriyani", img: "/images/chicken biriyani.jpg"},
              { mealType: "Dinner", name: "Honey Lemon tea", img: "/images/honey lemon tea.jpg" }] },
      { day: "Saturday", meals:[ 
              {mealType:"Breakfast", name:"Quinoa Dosa", img: "/images/quinoa.jpg" },
              { mealType: "Lunch", name:"Chapatti with Palak Paneer", img: "/images/palak.jpg"},
              { mealType: "Dinner", name: "Fruit salad", img: "/images/fruit salad.jpg" }] },
      { day: "Sunday", meals:[ 
              {mealType:"Breakfast", name:"Lentil soup", img: "/images/lentil soup.jpg" },
              { mealType: "Lunch", name:"Egg bhurjhi", img: "/images/egg bhurji.jpg"},
              { mealType: "Dinner", name: "Green Tea", img: "/images/green tea.jpg" }] },],
  },
  weightGain: {
    week1: [
      { day: "Monday", meals:[ 
        {mealType:"Breakfast", name:"High Protein Smoothie", img: "/images/high p.jpg" },
        { mealType: "Lunch", name:"Chapatti with chicken curry", img: "/images/chicken curry.jpg"},
        { mealType: "Dinner", name: "Tuna Sandwich", img: "/images/tuna sand.jpg" }] },
      { day: "Tuesday", meals:[ 
        {mealType:"Breakfast", name:"Banana Milkshake", img: "/images/banana.jpg" },
        { mealType: "Lunch", name:"Phulkas with fish curry", img: "/images/fish curry.jpg"},
        { mealType: "Dinner", name: "Rice with Sambhar", img: "/images/sambhar.jpg" }] },
      { day: "Wednesday", meals:[ 
        {mealType:"Breakfast", name:"Masala Dosa with chutney", img: "/images/masala dosa.jpg" },
        { mealType: "Lunch", name:"Rice with dal thadka", img: "/images/dal fry.jpg"},
        { mealType: "Dinner", name: "Chicken breast", img: "/images/chicken breast.jpg" }] },
      { day: "Thursday", meals:[ 
        {mealType:"Breakfast", name:"Hard boiled Sandwich", img: "/images/hard boiled.jpg" },
        { mealType: "Lunch", name:"Phulkas with Palak Paneer", img: "/images/palak paneer.jpg"},
        { mealType: "Dinner", name: "Spaghetti with Meat balls", img: "/images/meat balls.jpg" }] },
      { day: "Friday", meals:[ 
        {mealType:"Breakfast", name:"Scrambled eggs", img: "/images/scrambled eggs.jpg" },
        { mealType: "Lunch", name:"Chicken biriyani", img: "/images/chicken biriyani.jpg"},
        { mealType: "Dinner", name: "Chapatti with Palak Paneer", img: "/images/palak.jpg" }] },
      { day: "Saturday", meals:[ 
        {mealType:"Breakfast", name:"Quinoa Dosa", img: "/images/quinoa.jpg" },
        { mealType: "Lunch", name:"Chicken stir fry with brocolli", img: "/images/chicken stir fry.jpg"},
        { mealType: "Dinner", name: "Stuffed Multigrain paratha ", img: "/images/stuffed.jpg" }] },
      { day: "Sunday", meals:[ 
        {mealType:"Breakfast", name:"Strawberry and Banana Smoothie", img: "/images/strawberry.jpg" },
        { mealType: "Lunch", name:"Ragi Roti with sabzi", img: "/images/ragi roti.jpg"},
        { mealType: "Dinner", name: "Veg Pulav with buttermilk", img: "/images/veg pulav.jpg" }] },
    ],
    week2: [
      { day: "Monday", meals:[ 
        {mealType:"Breakfast", name:"Egg Omlette", img: "/images/omelette.jpg" },
        { mealType: "Lunch", name:"Rice with tomato Rasam", img: "/images/tomato rasam.jpg"},
        { mealType: "Dinner", name: "Grilled Chicken with Veggies", img: "/images/grilled chicken.jpg" }] },
      { day: "tuesday", meals:[ 
        {mealType:"Breakfast", name:"Egg Bhurji", img: "/images/egg bhurji.jpg" },
        { mealType: "Lunch", name:"Rajma Chawal", img: "/images/rajma.jpg"},
        { mealType: "Dinner", name: "Chappati with Green peas curry", img: "/images/green peas.jpg" }] },
      { day: "Wednesday", meals:[ 
        {mealType:"Breakfast", name:"Hard boiled Sandwich", img: "/images/hard boiled.jpg" },
        { mealType: "Lunch", name:"Millet Roti with sabzi", img: "/images/millet.jpg"},
        { mealType: "Dinner", name: "Roti with fish curry", img: "/images/fish curry.jpg" }] },
      { day: "Thursday", meals:[ 
        {mealType:"Breakfast", name:"Idly with sambhar", img: "/images/idly.jpg" },
        { mealType: "Lunch", name:"Jowar Roti with sabzi", img: "/images/jowar roti.jpg"},
        { mealType: "Dinner", name: "Rice with dal", img: "/images/rice with dal.jpg" }] },
      { day: "Friday", meals:[ 
        {mealType:"Breakfast", name:"Upma", img: "/images/upma.jpg" },
        { mealType: "Lunch", name:"Phulkas with kadai vegetable", img: "/images/phulkas_kv.jpg"},
        { mealType: "Dinner", name: "Rice with dal thadka", img: "/images/dal fry.jpg" }] },
      { day: "Saturday", meals:[ 
        {mealType:"Breakfast", name:"Quinoa Dosa", img: "/images/quinoa.jpg" },
        { mealType: "Lunch", name:"Chicken stir fry with brocolli", img: "/images/chicken stir fry.jpg"},
        { mealType: "Dinner", name: "Rice with moong dal ", img: "/images/moong.jpg" }] },
      { day: "Sunday", meals:[ 
        {mealType:"Breakfast", name:"Sabudana Khichdi", img: "/images/sabudana.jpg" },
        { mealType: "Lunch", name:"Ragi Roti with sabzi", img: "/images/ragi roti.jpg"},
        { mealType: "Dinner", name: "Roti with fish curry", img: "/images/fish curry.jpg" }] },
    ],
    week3: [
      { day: "Monday", meals:[ 
        {mealType:"Breakfast", name:"High Protein Smoothie", img: "/images/high p.jpg" },
        { mealType: "Lunch", name:"Chapatti with chicken curry", img: "/images/chicken curry.jpg"},
        { mealType: "Dinner", name: "Tuna Sandwich", img: "/images/tuna sand.jpg" }] },
      { day: "Tuesday", meals:[ 
        {mealType:"Breakfast", name:"Banana Milkshake", img: "/images/banana.jpg" },
        { mealType: "Lunch", name:"Phulkas with fish curry", img: "/images/fish curry.jpg"},
        { mealType: "Dinner", name: "Rice with Sambhar", img: "/images/sambhar.jpg" }] },
      { day: "Wednesday", meals:[ 
        {mealType:"Breakfast", name:"Masala Dosa with chutney", img: "/images/masala dosa.jpg" },
        { mealType: "Lunch", name:"Rice with dal thadka", img: "/images/dal fry.jpg"},
        { mealType: "Dinner", name: "Chicken breast", img: "/images/chicken breast.jpg" }] },
      { day: "Thursday", meals:[ 
        {mealType:"Breakfast", name:"Hard boiled Sandwich", img: "/images/hard boiled.jpg" },
        { mealType: "Lunch", name:"Phulkas with Palak Paneer", img: "/images/palak paneer.jpg"},
        { mealType: "Dinner", name: "Spaghetti with Meat balls", img: "/images/meat balls.jpg" }] },
      { day: "Friday", meals:[ 
        {mealType:"Breakfast", name:"Scrambled eggs", img: "/images/scrambled eggs.jpg" },
        { mealType: "Lunch", name:"Chicken biriyani", img: "/images/chicken biriyani.jpg"},
        { mealType: "Dinner", name: "Chapatti with Palak Paneer", img: "/images/palak.jpg" }] },
      { day: "Saturday", meals:[ 
        {mealType:"Breakfast", name:"Quinoa Dosa", img: "/images/quinoa.jpg" },
        { mealType: "Lunch", name:"Chicken stir fry with brocolli", img: "/images/chicken stir fry.jpg"},
        { mealType: "Dinner", name: "Stuffed Multigrain paratha ", img: "/images/stuffed.jpg" }] },
      { day: "Sunday", meals:[ 
        {mealType:"Breakfast", name:"Strawberry and Banana Smoothie", img: "/images/strawberry.jpg" },
        { mealType: "Lunch", name:"Ragi Roti with sabzi", img: "/images/ragi roti.jpg"},
        { mealType: "Dinner", name: "Veg Pulav with buttermilk", img: "/images/veg pulav.jpg" }] },
    ],
    week4: [
      { day: "Monday", meals:[ 
        {mealType:"Breakfast", name:"Egg Omlette", img: "/images/omelette.jpg" },
        { mealType: "Lunch", name:"Rice with tomato Rasam", img: "/images/tomato rasam.jpg"},
        { mealType: "Dinner", name: "Grilled Chicken with Veggies", img: "/images/grilled chicken.jpg" }] },
      { day: "tuesday", meals:[ 
        {mealType:"Breakfast", name:"Egg Bhurji", img: "/images/egg bhurji.jpg" },
        { mealType: "Lunch", name:"Rajma Chawal", img: "/images/rajma.jpg"},
        { mealType: "Dinner", name: "Chappati with Green peas curry", img: "/images/green peas.jpg" }] },
      { day: "Wednesday", meals:[ 
        {mealType:"Breakfast", name:"Hard boiled Sandwich", img: "/images/hard boiled.jpg" },
        { mealType: "Lunch", name:"Millet Roti with sabzi", img: "/images/millet.jpg"},
        { mealType: "Dinner", name: "Roti with fish curry", img: "/images/fish curry.jpg" }] },
      { day: "Thursday", meals:[ 
        {mealType:"Breakfast", name:"Idly with sambhar", img: "/images/idly.jpg" },
        { mealType: "Lunch", name:"Jowar Roti with sabzi", img: "/images/jowar roti.jpg"},
        { mealType: "Dinner", name: "Rice with dal", img: "/images/rice with dal.jpg" }] },
      { day: "Friday", meals:[ 
        {mealType:"Breakfast", name:"Upma", img: "/images/upma.jpg" },
        { mealType: "Lunch", name:"Phulkas with kadai vegetable", img: "/images/phulkas_kv.jpg"},
        { mealType: "Dinner", name: "Rice with dal thadka", img: "/images/dal fry.jpg" }] },
      { day: "Saturday", meals:[ 
        {mealType:"Breakfast", name:"Quinoa Dosa", img: "/images/quinoa.jpg" },
        { mealType: "Lunch", name:"Chicken stir fry with brocolli", img: "/images/chicken stir fry.jpg"},
        { mealType: "Dinner", name: "Rice with moong dal ", img: "/images/moong.jpg" }] },
      { day: "Sunday", meals:[ 
        {mealType:"Breakfast", name:"Sabudana Khichdi", img: "/images/sabudana.jpg" },
        { mealType: "Lunch", name:"Ragi Roti with sabzi", img: "/images/ragi roti.jpg"},
        { mealType: "Dinner", name: "Roti with fish curry", img: "/images/fish curry.jpg" }] },
    ],
  },
};

function App() {
  const [selectedWeek, setSelectedWeek] = useState("week1");
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [plan, setPlan] = useState("weightLoss");

  const currentWeek = mealPlan[plan][selectedWeek];
  const dayMeals = currentWeek?.find((plan) => plan.day === selectedDay);

  const nextWeek = () => {
    const weekOrder = ["week1", "week2", "week3", "week4"];
    const currentIndex = weekOrder.indexOf(selectedWeek);
    const nextIndex = (currentIndex + 1) % weekOrder.length;
    setSelectedWeek(weekOrder[nextIndex]);
  };

  const selectDay = (day) => {
    setSelectedDay(day);
  };

  const togglePlan = () => {
    setPlan(plan === "weightLoss" ? "weightGain" : "weightLoss");
  };

  return (
    <div className="App">
      <MyApp />
      <header className="App-header">
        <h1>Diet Plan</h1>
        <div className="toggle-container">
          <span className={plan === "weightLoss" ? "active" : ""}>Weight Loss</span>
          <label className="switch">
            <input type="checkbox" onChange={togglePlan} checked={plan === "weightGain"} />
            <span className="slider"></span>
          </label>
          <span className={plan === "weightGain" ? "active" : ""}>Weight Gain</span>
        </div>
      </header>
      <div className="container">
        <div className="sidebar">
          <button onClick={nextWeek}>Next Week</button>
          <h3>Select a Day</h3>
          {currentWeek.map((plan, index) => (
            <div
              key={index}
              className={`sidebar-item ${plan.day === selectedDay ? "active" : ""}`}
              onClick={() => selectDay(plan.day)}
            >
              {plan.day}
            </div>
          ))}
        </div>
        <div className="main-content">
          <h2>{selectedWeek.replace("week", "Week ")}</h2>
          {dayMeals?.meals.map((meal, index) => (
            <Meal key={index} meal={meal} />
          ))}
        </div>
        
      </div>
    </div>
  );
}

function MyApp() {
  const [menu,setMenu]= useState("")
  return (
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
  );
}

function Meal({ meal }) {
  return (
    <div className="meal">
      <h3>{meal.mealType}</h3>
      <p>{meal.name}</p>
      <img src={meal.img} alt={meal.name} />
    </div>
  );
}

export default App;
