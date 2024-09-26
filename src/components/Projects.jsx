import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className="container px-0 lg:px-[240px] mx-auto p-4" id='projects'>
            <div className="flex justify-center">
                <h1 className='text-3xl lg:text-5xl nunito my-8 font-bold'>PROJECTS</h1>
            </div>
            <div className="flex flex-wrap justify-center">
                <ProjectCard projectName= "BMI Calculator" description="This project calculates Body Mass Index (BMI) based on user-inputted weight and height, providing health classifications like underweight or overweight." techUsed="ReactJs" shadowColor ='shadow-[#00c9ee]'/>
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
};

export default Projects;
