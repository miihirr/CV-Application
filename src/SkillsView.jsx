import React from "react";
import EditButton from "./editBtn";

const SkillsView = ({ data, onEdit }) => {
  return (
    <div className="infoView p-6">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-900">SKILLS</h2>
        <EditButton onClick={onEdit} />
      </div>

      <div className="space-y-2">
      <h3 className="mt-4 text-gray-700 text-sm leading-relaxed">{data.skills || "add skills here"}</h3>
      </div>

    
    </div>
  );
};

export default SkillsView;
