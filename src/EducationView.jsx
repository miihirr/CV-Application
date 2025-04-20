import React from "react";
import EditButton from "./EditBtn";

const EducationView = ({ data, onEdit }) => {
  return (
    <div className="infoView p-6">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        <EditButton onClick={onEdit} />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-800">{data.university || "Unknown University"}</h3>
        <p className="text-sm text-gray-600">Expected: {data.expected || "N/A"}</p>
      </div>

      {data.desc && (
        <p className="mt-4 text-gray-700 text-sm leading-relaxed">{data.desc}</p>
      )}
    </div>
  );
};

export default EducationView;
