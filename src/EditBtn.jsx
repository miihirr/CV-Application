import React from "react";
const EditButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1 right-5 p-3 bg-white hover:bg-blue-50 rounded-full 
      shadow-md hover:shadow-lg transition-all duration-200 text-blue-600 hover:text-blue-800
      cursor-pointer"
    aria-label="Edit information"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  </button>
);

export default EditButton;
