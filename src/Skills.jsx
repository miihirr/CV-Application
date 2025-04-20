import React from "react";
import { useState } from "react";
import SkillsView from "./SkillsView";
import EditForm from "./EditForm";
const initial = {
  skills: [`Languages: Python, JavaScript, HTML/CSS, Java, C, bash & shell scripting, SQL, React`, `Developer Tools: Visual Studio, Eclipse, PyCharm, IntelliJ, Jupyter Notebook`,` Microsoft Tools: Word, Excel, PowerPoint`,`Package Manager: npm, Yarn`,`Module Bundler: Webpack`,`Platforms: Linux/Unix, Windows, macOS`,`Version Control: Git/GitHub`,`Soft Skills: Adaptable, Detail oriented, Communication, Teamwork, Strong work ethics`]
};

const Skills = () => {
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
        <SkillsView
          data={submittedData}
          onEdit={() => setFormVisible(true)}
        />
      )}
    </div>
  );
};

export default Skills;
