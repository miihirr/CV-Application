import React from "react";
const FormActions = ({ onCancel }) => (
  <div className="formAction">
    <button type="button" onClick={onCancel} className="cancel">
      Cancel
    </button>
    <button type="submit" className="submit">
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
export default FormActions;
