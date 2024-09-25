"use client";

import React, { useState } from "react";
import TDEEForm from "./TDEEForm";
import TDEEResult from "./TDEEResult";

const App = () => {
  const calculateTDEE = ({ age, gender, weight, height, activityLevel }) => {
    let bmr;

    if (gender === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }
    const tdee = bmr * activityLevel;

    return tdee;
  };

  const [tdee, setTDEE] = useState(null);

  const handleTDEECalculation = (inputData) => {
    const result = calculateTDEE(inputData);
    setTDEE(result);
  };

  return (
    <div>
      <h1>TDEE Calculator</h1>
      <TDEEForm calculateTDEE={handleTDEECalculation} />
      <TDEEResult tdee={tdee} />
    </div>
  );
};

export default App;
