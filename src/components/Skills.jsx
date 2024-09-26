import ReactLogo from '../assets/React.png';
import NodeLogo from  '../assets/nodeLogo.png';
import Mongo from '../assets/Mongo.png';
import Express from '../assets/express.png';
import Card from './Card';
import Tailwind from  '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import php from '../assets/php.png';
import unity from '../assets/unity.png';

const Skills = () => {
    return (
        <div className="container px-0 lg:px-[240px] mx-auto p-4 ">
            <div className="flex justify-center"><h1 className='text-3xl lg:text-5xl nunito my-8 font-bold '>SKILLS</h1></div>
            <div className="flex flex-wrap -mx-4 justify-center">
                
                <Card imgName={Mongo} shadowColor ='shadow-[#4D8E46]' text="MongoDB"/>
                <Card imgName={Express} shadowColor ='shadow-[#E8C900]' text="Express Js"/>
                <Card imgName={ReactLogo} shadowColor ='shadow-[#00c9ee]'text="React Js"/>
                <Card imgName={NodeLogo} shadowColor ='shadow-[#529F41]'  text="Node Js"/>
                <Card imgName={Tailwind} shadowColor ='shadow-[#00c9ee]'  text="Tailwind CSS"/>
                <Card imgName={Bootstrap} shadowColor ='shadow-[#8A13FD]'  text="Bootsrap"/>
                <Card imgName={php} shadowColor ='shadow-[#364580]' padding="p-0" text="PHP"/>
                <Card imgName={unity} shadowColor ='shadow-[#fff]' text="Unity 3D"/>

            </div>

        </div>
    )
}

export default Skills