import React, { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {
  const [data, setData] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const birthdate = new Date(data);
    const today = new Date();

    let age1 = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdate.getDate())
    ) {
      age1--;
    }

    if (!isNaN(age1) && age1 >= 0) {
      setAge("You are " + age1 + " years old");
    } else {
      setAge("Invalid Input");
    }
  };

  return (
    <div className="agecalculator">
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        className="ageinput"
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder=""
      ></input>
      <br />
      <br />
      <div>
        <button onClick={calculateAge} className="agebtn">
          Calculate Age
        </button>
        {age && <h2>{age}</h2>}
      </div>
    </div>
  );
}

export default AgeCalculator;
