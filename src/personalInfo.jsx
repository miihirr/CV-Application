import React, { useState } from "react";
import EditButton from "./editBtn.jsx";
import AddressIcon from "./icons/addressIcon.jsx";
import EmailIcon from "./icons/emailIcon.jsx";
import LinkIcon from "./icons/linkIcon.jsx";
import PhoneIcon from "./icons/phoneIcon.jsx";

const INITIAL_STATE = {
  name: "JOHN DOE",
  email: "johndoe@example.com",
  phoneNo: "+1 (234) 567-890",
  address: "123 Main St, New York, NY",
  link: "https://www.johndoe.com",
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

// Sub-components
const FormInput = ({ label, name, value, type = "text", onChange }) => {
  const formattedLabel = label.replace(/([A-Z])/g, " $1").toLowerCase();

  return (
    <div className="space-y-3">
      <label className="label">
        {label}
      </label>
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

const EditForm = ({ formData, onSubmit, onChange, onCancel }) => (
  <div className="editBtnDiv">
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="editFormBorder">
        <h2 className="editHeader font-playfair">
          <span className="editTitle">
            Edit Personal Information
          </span>
          <span className="editIcon">✎</span>
        </h2>
        <p className="desc">Update your professional details</p>
      </div>

      <div className="gridForm">
        {Object.entries(formData).map(([fieldName, value]) => (
          <FormInput
            key={fieldName}
            label={fieldName.replace(/([A-Z])/g, ' $1')}
            name={fieldName}
            value={value}
            type={fieldName === 'email' ? 'email' : 'text'}
            onChange={onChange}
          />
        ))}
      </div>

      <FormActions onCancel={onCancel} />
    </form>
  </div>
);


const FormActions = ({ onCancel }) => (
  <div className="formAction">
    <button
      type="button"
      onClick={onCancel}
      className="cancel"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="submit"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      Save Changes
    </button>
  </div>
);

const PersonalInfoView = ({ data, onEdit }) => (
  <div
    className="infoView hover:shadow-3xl"
  >
    <EditButton onClick={onEdit} />

    <div className="text-center space-y-6">
      <h1 className="nameH1 font-playfair">
        <span className="name">
          {data.name}
        </span>
      </h1>

      <ContactInfo data={data} />

      <WebsiteLink link={data.link} />
    </div>
  </div>
);

const ContactInfo = ({ data }) => (
  <div className="flex">
    <ContactItem
      icon="email"
      content={data.email}
      href={`mailto:${data.email}`}
    />
    <ContactItem icon="phone" content={data.phoneNo} />
    <ContactItem icon="address" content={data.address} />
  </div>
);

const ContactItem = ({ icon, content, href }) => {
  const icons = {
    email: <EmailIcon />,
    phone: <PhoneIcon />,
    address: <AddressIcon />,
  };

  const Wrapper = ({ children }) =>
    href ? (
      <a
        href={href}
        className="flexA group"
      >
        {children}
      </a>
    ) : (
      <div className="flexDiv">
        {children}
      </div>
    );

  return (
    <Wrapper>
      {icons[icon]}
      {content}
    </Wrapper>
  );
};

const WebsiteLink = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="websiteLink group"
  >
    <LinkIcon />
    <span className="linkIcon">
      {link.replace(/^https?:\/\//, "")}
    </span>
  </a>
);


export default PersonalInfo;


