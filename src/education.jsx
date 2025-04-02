import React from "react";
import { useState } from "react";

const initial = {
    university: "York University | Lassonde School of Engineering",
    expected: "2026",
    desc:`Introduction to Python | Object Oriented Programming | Advance
        Object-Oriented Programming | Calculus | Linear Algebra | Physics |
        Economics | Discrete Mathematics | Software Tools | Elementary
        Probability | Fundamentals of Data Structures | Computer Organization |
        Theory of Computation`,
};

const Education = () => {
  return (
    <>
      <h1>Education</h1>
      <h2>{initial.university}</h2>
      <div>
      <span>B.Sc. Honors – Undergraduate Computer Science</span>
      <span>Expected {initial.expected}</span>
      </div>
      <p>
        {initial.desc}
      </p>
    </>
  );
};

export default Education;
