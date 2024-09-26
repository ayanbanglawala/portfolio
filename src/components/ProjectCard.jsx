import React, { useState } from 'react';
import '../css/cardProject.css';

const ProjectCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Limit the description to 100 characters
  const charLimit = 100;
  const truncatedDescription = props.description.length > charLimit
    ? `${props.description.substring(0, charLimit)}...`
    : props.description;

  // Toggle function to switch between showing full or truncated description
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-4/12 px-4 mb-4 mx-0">
      <div className={`w-full bgImage shadow-[0_0px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_0px_rgba(0,0,0,0)] transition-all duration-300 cursor-pointer ${props.shadowColor} bg-[#04071D] border border-[#1E2034] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}></div>
        <h2 className="text-2xl font-bold mb-4 text-white relative z-10">{props.projectName}</h2>
        
        {/* Toggle between the full description and truncated one */}
        <p className="text-gray-400 relative z-10 mb-2">
          {isExpanded ? props.description : truncatedDescription}
          
          {/* Show '...' or 'Read less' based on the state */}
          {props.description.length > charLimit && (
            <span
              onClick={toggleDescription}
              className="text-purple-400 cursor-pointer ml-1"
            >
              {isExpanded ? ' Read less' : ' Read more'}
            </span>
          )}
        </p>

        <p className="text-gray-300 relative z-10">
          Technologies Used: <span className="text-purple-400">{props.techUsed}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
