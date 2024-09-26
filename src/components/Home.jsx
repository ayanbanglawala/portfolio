import '../css/home.css';

const Home = () => {
    return (
        <>
            <div className="bgImg  h-[86vh] lg:h-[90vh]" id='home'>
                <div className='flex flex-col justify-center items-center mb-[190px]'>
                    <span className='nunito text-[13px] pt-10'>PORTFOLIO OF PROJECTS AND SKILLS</span>
                    <div className='mainContent flex flex-col justify-center items-center text-[45px] sm:text-[60px] '>
                        <span>Welcome to My </span>
                        <span className='purple font-bold'>Portfolio</span>
                    </div>

                    <span className='mainContent text-[40px] sm:text-[60px] text-center'>I am <span className='purple'>Ayan Banglawala</span></span>

                    <div className='footerInfo flex flex-col justify-center items-center text-center text-[20px] sm:text-[25px]'>
                        <span className='purple font-bold'>MERN stack Developer</span>
                        <span className=' text-center'>
                            dedicated to crafting innovative web applications and <br />delivering exceptional user experiences.
                        </span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home