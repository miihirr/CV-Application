import React, { useState } from "react";

// Sample initial state with resume header details
const initialState = {
  name: "JOHN DOE",
  email: "johndoe@example.com",
  phoneNo: "+1 (234) 567-890",
  address: "123 Main St",
  link: "https://www.johndoe.com",
};

const PersonalInfo = () => {
  const [formData, setFormData] = useState(initialState);
  const [submittedData, setSubmittedData] = useState(initialState);
  const [formVisible, setFormVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setFormVisible(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = () => {
    setFormVisible(true);
  };

  return (
    <div className="personal-info-page">
      {formVisible ? (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Edit Personal Information</h2>
            <div className="formData1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="formData1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="formData1">
              <label htmlFor="phoneNo">Phone No</label>
              <input
                type="tel"
                name="phoneNo"
                placeholder="Enter your phone number"
                value={formData.phoneNo}
                onChange={handleChange}
              />
            </div>

            <div className="formData1">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="formData1">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                name="link"
                placeholder="Enter your link"
                value={formData.link}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-button">
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <div className="cv-header-container">
          <div className="cv-header">
            <div className="cv-name">{submittedData.name}</div>
            <div className="cv-contact">
              {submittedData.email} | {submittedData.phoneNo} | {submittedData.address}
            </div>
            <div className="cv-link">{submittedData.link}</div>
            <button className="floating-edit-button" onClick={handleEdit}>
            ✎
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
