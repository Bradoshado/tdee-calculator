"use client";

import React, { useState } from "react";

const TDEEForm = ({ calculateTDEE }) => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("1.2");

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTDEE({ age, gender, weight, height, activityLevel });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Gender:
        <select
          name=""
          id=""
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label htmlFor="">
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>
      <label htmlFor="">
        Weight(kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </label>
      <label htmlFor="">
        Height(cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </label>

      <label htmlFor="">
        Activity Level:
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          required
        >
          <option value="1.2">Sedentary</option>
          <option value="1.375">Light Activity</option>
          <option value="1.55">Moderate Activity</option>
          <option value="1.725">Very Active</option>
          <option value="1.9">Super Active</option>
        </select>
      </label>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default TDEEForm;
