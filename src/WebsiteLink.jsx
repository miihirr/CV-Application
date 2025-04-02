import React from "react";
import LinkIcon from "./icons/LinkIcon";
const WebsiteLink = ({ link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="websiteLink group"
    >
      <LinkIcon />
      <span className="linkIcon">
        {link.replace(/^https?:\/\//, "")}
      </span>
    </a>
  );
export default WebsiteLink;  