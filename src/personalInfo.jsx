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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8 w-screen font-roboto">
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
      <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={`Enter your ${formattedLabel}`}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 
          focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none
          placeholder-gray-400 text-gray-700 hover:border-gray-300"
      />
    </div>
  );
};

const EditForm = ({ formData, onSubmit, onChange, onCancel }) => (
  <div className="mx-auto w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10">
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-playfair font-bold text-gray-900">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Edit Personal Information
          </span>
          <span className="text-blue-500 ml-3">✎</span>
        </h2>
        <p className="mt-2 text-sm text-gray-500">Update your professional details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  <div className="flex justify-end space-x-4 border-t border-gray-100 pt-8">
    <button
      type="button"
      onClick={onCancel}
      className="px-8 py-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 
        hover:text-gray-800 transition-colors duration-200 font-medium cursor-pointer
        hover:border-gray-300"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 
        hover:to-indigo-700 text-white rounded-lg transform hover:scale-[1.02] 
        transition-all duration-200 font-semibold shadow-md cursor-pointer flex items-center"
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
    className="mx-auto w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-12 relative 
    transform hover:shadow-3xl transition-shadow duration-300"
  >
    <EditButton onClick={onEdit} />

    <div className="text-center space-y-6">
      <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-4">
        <span className="bg-gradient-to-r from-blue-800 to-gray-900 bg-clip-text text-transparent">
          {data.name}
        </span>
      </h1>

      <ContactInfo data={data} />

      <WebsiteLink link={data.link} />
    </div>
  </div>
);

const ContactInfo = ({ data }) => (
  <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-6">
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
        className="flex items-center hover:text-blue-600 transition-colors duration-200 group font-medium"
      >
        {children}
      </a>
    ) : (
      <div className="flex items-center text-gray-600 font-medium">
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
    className="inline-flex items-center text-blue-600 hover:text-blue-800 
      transition-colors duration-200 text-lg font-medium group"
  >
    <LinkIcon />
    <span className="border-b border-dotted border-blue-300 hover:border-blue-600">
      {link.replace(/^https?:\/\//, "")}
    </span>
  </a>
);


export default PersonalInfo;
