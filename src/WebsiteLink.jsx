import React from "react";
import LinkIcon from "./icons/LinkIcon";
const WebsiteLink = ({ link }) => {
  if (!link) return null;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="websiteLink group flex items-center gap-2 text-blue-600 hover:underline"
      aria-label={`Visit ${link}`}
    >
      <LinkIcon />
      <span className="linkIcon">{link.replace(/^https?:\/\//, "")}</span>
    </a>
  );
};
export default WebsiteLink;  