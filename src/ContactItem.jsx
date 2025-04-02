import React from "react";
import EmailIcon from "./icons/EmailIcon";
import PhoneIcon from "./icons/PhoneIcon";
import AddressIcon from "./icons/AddressIcon";
const ContactItem = ({ icon, content, href }) => {
    const icons = {
      email: <EmailIcon />,
      phone: <PhoneIcon />,
      address: <AddressIcon />,
    };
  
    const Wrapper = ({ children }) =>
      href ? (
        <a
          href={href}
          className="flexA group"
        >
          {children}
        </a>
      ) : (
        <div className="flexDiv">
          {children}
        </div>
      );
  
    return (
      <Wrapper>
        {icons[icon]}
        {content}
      </Wrapper>
    );
  };
export default ContactItem;