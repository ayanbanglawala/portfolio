import React from "react";
import '../css/experience.css'; // Ensure your CSS file is imported

const ExperienceCard = (props) => {
  return (
    <div className={`experience-card mb-4 ${props.hoverColor}`}> {/* Apply the glassmorphism class here */}
      <h3 className="text-xl font-semibold text-purple-400">
        {props.position}
      </h3>
      <span className="text-sm text-gray-400">{props.status}</span>
      <p className="mt-3">{props.desc}</p>
    </div>
  );
};

export default ExperienceCard;
