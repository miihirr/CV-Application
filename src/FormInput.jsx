import React from "react";
const FormInput = ({ label, name, value, type = "text", onChange }) => {
  const formattedLabel = label.replace(/([A-Z])/g, " $1").toLowerCase();

  return (
    <div className="space-y-3">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={`Enter your ${formattedLabel}`}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};
export default FormInput;
