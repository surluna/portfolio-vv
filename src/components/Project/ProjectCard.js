import React from "react";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <img
        src={imgUrl}
        alt={title}
        className="rounded-t-lg w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <div className="mt-4 flex justify-between">
          <a
            href={gitUrl}
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={previewUrl}
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
