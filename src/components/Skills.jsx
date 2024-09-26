import ReactLogo from '../images/React.png';
import NodeLogo from  '../images/nodeLogo.png';
import Mongo from '../images/Mongo.png';
import Express from '../images/expressjs.png';
import Card from './Card';
import Tailwind from  '../images/tailwind.png';
import Bootstrap from '../images/bootstrap.png';
import php from '../images/php.png';
import unity from '../images/unity.png';

const Skills = () => {
    return (
        <section className="container px-0 lg:px-[240px] mx-auto p-4 " id='skills'>
            <div className="flex justify-center"><h1 className='text-3xl lg:text-5xl nunito my-8 font-bold '>SKILLS</h1></div>
            <div className="flex flex-wrap -mx-4 justify-center">
                
                <Card imgName={Mongo} shadowColor ='shadow-[#4D8E46]' text="MongoDB"/>
                <Card imgName={Express} shadowColor ='shadow-[#E8C900]' text="Express Js"/>
                <Card imgName={ReactLogo} shadowColor ='shadow-[#00c9ee]'text="React Js"/>
                <Card imgName={NodeLogo} shadowColor ='shadow-[#529F41]'  text="Node Js"/>
                <Card imgName={Tailwind} shadowColor ='shadow-[#00c9ee]'  text="Tailwind"/>
                <Card imgName={Bootstrap} shadowColor ='shadow-[#8A13FD]'  text="Bootsrap"/>
                <Card imgName={php} shadowColor ='shadow-[#364580]' padding="p-0" text="PHP"/>
                <Card imgName={unity} shadowColor ='shadow-[#fff]' text="Unity 3D"/>

            </div>

        </section>
    )
}

export default Skills