import React from "react";
import EditButton from "./EditBtn";

const WorkView = ({ data, onEdit }) => {
  return (
    <div className="infoView p-6">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-900">EXPERIENCE</h2>
        <EditButton onClick={onEdit} />
      </div>
      <h2 className="text-lg font-medium text-gray-800">{data.role}</h2>
      <div>{data.employer}</div>
      <div className="text-sm text-gray-600">{data.period}</div>
      <div className="space-y-2">
        <div className="mt-4 text-gray-700 text-sm leading-relaxed">
            <ul>
                {data.duties.map((duty,index)=>(
                    <li key={index}>{duty}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkView;
