import React from "react";
import ContactItem from "./ContactItem";
const ContactInfo = ({ data }) => (
    <div className="flex">
      <ContactItem
        icon="email"
        content={data.email}
        href={`mailto:${data.email}`}
      />
      <ContactItem icon="phone" content={data.phoneNo} />
      <ContactItem icon="address" content={data.address} />
    </div>
  );
export default ContactInfo;