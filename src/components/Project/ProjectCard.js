import React from "react";
import { CodeOutlined, EyeOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import "tailwindcss/tailwind.css";
import "../../styles/input.css";
import "../../styles/output.css";

const ProjectCard = ({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  isPrivate,
}) => {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
      <img src={imgUrl} alt={title} className="h-auto w-full object-cover" />
      <div className="overlay items-center h-auto justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        {isPrivate ? (
          <Tooltip title="Private Project">
            <div className="h-14 w-14 mr-2 border-2 relative rounded-full border-gray-600">
              <CodeOutlined
                className="text-gray-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-not-allowed"
                style={{ fontSize: "1.5rem" }}
              />
            </div>
          </Tooltip>
        ) : (
          <a
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeOutlined
              className="text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
              style={{ fontSize: "1.5rem" }}
            />
          </a>
        )}
        {isPrivate ? (
          <Tooltip title="Preview not available for private projects">
            <div className="h-14 w-14 border-2 relative rounded-full border-gray-600">
              <EyeOutlined
                className="text-gray-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-not-allowed"
                style={{ fontSize: "1.5rem" }}
              />
            </div>
          </Tooltip>
        ) : (
          <a
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EyeOutlined
              className="text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
              style={{ fontSize: "1.5rem" }}
            />
          </a>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
