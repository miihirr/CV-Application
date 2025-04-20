import React from "react";
import { useState } from "react";
import EditForm from "./EditForm";
import EducationView from "./EducationView";
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
    const [formData, setFormData] = useState(initial);
    const [submittedData, setSubmittedData] = useState(initial);
    const [formVisible, setFormVisible] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmittedData(formData);
      setFormVisible(false);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };


  return (
    <div className="form1 font-roboto">
      {formVisible ? (
        <EditForm
          formData={formData}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onCancel={() => setFormVisible(false)}
        />
      ) : (
        <EducationView
          data={submittedData}
          onEdit={() => setFormVisible(true)}
        />
      )}
    </div>
  );
};

export default Education;


