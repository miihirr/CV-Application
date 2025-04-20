import React from "react";
import { useState } from "react";
import EditForm from "./EditForm";
import WorkView from "./WorkView";
const initial = {
    role: "Administrative Assistant",
    employer: "Aum Appraisal Services Inc, Markham, ON",
    period: "August 2022 – present",
    duties:[`Prepared, issued, and distributed detailed invoices, ensuring accuracy and adherence to client requirements`,` Managed payroll processes, including calculating hours, preparing paycheques, and ensuring timely
disbursements.`, `Maintained, organized, and updated company databases to ensure data accuracy, accessibility, and security.`, `Reconciled financial records, tracked expenses, and supported accounting functions to maintain budgetary
control.`,`Coordinated administrative tasks, including scheduling, correspondence, and document preparation.`],
};

const Work = () => {
    const [formData, setFormData] = useState(initial);
    const [submittedData, setSubmittedData] = useState(initial);
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
        <WorkView
          data={submittedData}
          onEdit={() => setFormVisible(true)}
        />
      )}
    </div>
  );
};

export default Work;


