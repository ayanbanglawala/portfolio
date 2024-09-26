import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <div id='experience'>
    <div className="flex justify-center"><h1 className='text-3xl lg:text-5xl nunito my-8 font-bold '>Experience</h1></div>
    <div className="w-full min-h-screen flex items-center justify-center p-10">
      <div className="max-w-4xl w-full bg-[#04071D] border border-[#1E2034] shadow-[0_3px_15px_rgba(0,0,0,0.25)] rounded-lg p-6">
        <h2 className="text-3xl font-bold text-white mb-4">My Professional Experience</h2>
        <div className="text-gray-300">
          
          {/* MERN Stack Developer Experience */}
          <ExperienceCard 
            position="Web Developer at Ciencias" 
            status="July 2023 - Present" 
            desc="Currently working at Ciencias, leveraging my 1.4 years of experience as a PHP developer to transition into a MERN stack role. I've successfully created a user authentication system, integrating features like login, registration, and dynamic API handling."
             hoverColor="hover:shadow-expressYellow"  
          />
          
          {/* React Projects Experience */}
          <ExperienceCard 
            position="React Projects - Personal Projects" 
            status="Multiple Projects" 
            desc="Developed multiple React applications, focusing on creating dynamic and interactive components. Projects include a News App fetching live news data from external APIs, and a Portfolio website showcasing my skills and recent work."
             hoverColor="hover:shadow-reactBlue"
          />
          
          {/* MERN Stack Course */}
          <ExperienceCard 
            position="MERN Stack Course" 
            status="In Progress" 
            desc="Currently completing a comprehensive MERN stack course to enhance my skills in developing full-stack applications. The course covers MongoDB, Express.js, React, and Node.js, equipping me with the tools to create robust and dynamic web applications." 
             hoverColor="hover:shadow-bootPurple"
            />

          {/* Unity 3D and VR Learning Experience */}
          <ExperienceCard 
            position="Unity 3D and VR Learning" 
            status="Ongoing" 
            desc="Exploring Unity 3D for creating immersive VR experiences. Learning to implement animations, object manipulation, and smooth transitions, making interactions more engaging for users."
             hoverColor="hover:shadow-mongoGreen"
          />

          {/* AI Workshop at Be10X */}
          <ExperienceCard 
            position="AI Workshop at Be10X" 
            status="Completed" 
            desc="Completed a comprehensive AI workshop at Be10X, gaining hands-on experience in AI principles and practices. Utilized this knowledge to integrate AI elements into web applications."
             hoverColor="hover:shadow-expressYellow"
          />

          {/* BCA Graduate */}
          <ExperienceCard 
            position="BCA Graduate" 
            status="April 2024" 
            desc="Graduated from Asia Pacific College with a Bachelor's degree in Computer Applications. Equipped with a strong foundation in programming, web development, and software engineering." hoverColor="hover:shadow-reactBlue"
          />
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
