import React from 'react';
import '../css/cardProject.css';

const ProjectCard = (props) => {
    return (
        <div className="w-full sm:w-1/2 lg:w-4/12 px-4 mb-4 mx-0 ">
            <div className={`w-full bgImage shadow-[0_2px_15px_rgba(0,0,0,0.15)] ${props.shadowColor} bg-[#04071D] border border-[#1E2034] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}></div>
                <h2 className="text-2xl font-bold mb-4 text-white relative z-10">{props.projectName}</h2>
                <p className="text-gray-400 relative z-10 mb-2">{props.description}</p>
                <p className="text-gray-300 relative z-10">Technologies Used: <span className="text-purple-400">{props.techUsed}</span></p>
            </div>
        </div>
    );
};

export default ProjectCard;
