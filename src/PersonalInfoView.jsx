import React from "react";
import EditButton from "./EditBtn";
import ContactInfo from "./ContactInfo";
import WebsiteLink from "./WebsiteLink";
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
export default PersonalInfoView;