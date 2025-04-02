import React from "react";
import FormActions from "./FormActions";
import FormInput from "./FormInput";
const EditForm = ({ formData, onSubmit, onChange, onCancel }) => (
  <div className="editBtnDiv">
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="editFormBorder">
        <h2 className="editHeader font-playfair">
          <span className="editTitle">Edit Personal Information</span>
          <span className="editIcon">✎</span>
        </h2>
        <p className="desc">Update your professional details</p>
      </div>

      <div className="gridForm">
        {Object.entries(formData).map(([fieldName, value]) => (
          <FormInput
            key={fieldName}
            label={fieldName.replace(/([A-Z])/g, " $1")}
            name={fieldName}
            value={value}
            type={fieldName === "email" ? "email" : "text"}
            onChange={onChange}
          />
        ))}
      </div>

      <FormActions onCancel={onCancel} />
    </form>
  </div>
);
export default EditForm;
