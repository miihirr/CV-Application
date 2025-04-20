import React from "react";
import EditButton from "./EditBtn";

const SkillsView = ({ data, onEdit }) => {
  return (
    <div className="infoView p-6">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-900">SKILLS</h2>
        <EditButton onClick={onEdit} />
      </div>

      <div className="space-y-2">
        <div className="mt-4 text-gray-700 text-sm leading-relaxed">
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
