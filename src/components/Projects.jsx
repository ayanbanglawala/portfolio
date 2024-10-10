import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="container px-0 lg:px-[240px] mx-auto p-4" id="projects">
      <div className="flex justify-center">
        <h1 className="text-3xl lg:text-5xl nunito my-8 font-bold purple">
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <ProjectCard
          projectName="MyChat App"
          description="MyChat is a real-time chat application designed to facilitate seamless communication between users. With features like instant messaging, user authentication, and an intuitive interface, MyChat ensures a smooth user experience on both desktop and mobile devices. The app utilizes Socket.io for real-time updates, allowing users to send and receive messages instantly."
          techUsed="React, Node.js, Express, Socket.io, MongoDB"
          shadowColor="shadow-[#6A0DAD]" link="https://mychat-76e8.onrender.com/"
        />

        <ProjectCard
          projectName="Gmail Clone"
          description="This project replicates the core functionalities of Gmail, including email sending, receiving, and organization. It features a user-friendly interface and efficient email management."
          techUsed="React, Node.js, Express, MongoDB"
          shadowColor="shadow-[#4D8E46]"
        />

        <ProjectCard
          projectName="BMI Calculator"
          description="This project calculates Body Mass Index (BMI) based on user-inputted weight and height, providing health classifications like underweight or overweight."
          techUsed="ReactJs"
          shadowColor="shadow-[#00c9ee]"
        />
        <ProjectCard
          projectName="User Authentication"
          description="In my user authentication project using the MERN stack, I built a secure app with a Register Page for new users and a Login Page for existing users. After authentication, users are directed to a Home Page with personalized content."
          techUsed="MongoDB, Express, React, NodeJs"
          shadowColor="shadow-[#8A13FD]"
        />
        <ProjectCard
          projectName="Express News"
          description="I created a MERN stack project that allows users to view the latest news dynamically. The project fetches news data using an external API and displays it on the website. I implemented this using the fetch method and configured an API key to access the news. The site updates with real-time news, offering users the latest updates on various topics."
          techUsed="React Js, External API"
          shadowColor="shadow-[#E8C900]"
        />
      </div>
    </section>
  );
};

export default Projects;
