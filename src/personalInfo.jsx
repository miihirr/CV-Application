import React, { useState } from "react";
import PersonalInfoView from "./PersonalInfoView.jsx";
import EditForm from "./EditForm.jsx";
const INITIAL_STATE = {
  name: "Mihir Patel",
  email: "mihirpatel@example.com",
  phoneNo: "+1 (234) 567-890",
  address: "123 Main St, Ontario",
  link: "https://www.linkedin.com/in/mihirpatelyorku/",
};

// Main Component
const PersonalInfo = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [submittedData, setSubmittedData] = useState(INITIAL_STATE);
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
        <PersonalInfoView
          data={submittedData}
          onEdit={() => setFormVisible(true)}
        />
      )}
    </div>
  );
};

export default PersonalInfo;


