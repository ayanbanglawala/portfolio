import '../css/home.css';
import '../index.css';
const Home = () => {
    return (
        <div className="bgImg justify-center items-center">
            <span className='nunito text-[13px]'>DYNAMIC DESIGN OF PORTFOLIO</span>
            <div className='mainContent flex flex-col justify-center items-center text-[50px] sm:text-[65px] '>
                <span>Welcome to My </span>
                <span className='purple font-bold'>Portfolio</span>
            </div>

            <span className='mainContent text-[40px] sm:text-[65px] '>My Name is _____</span>
            
            <div className='footerInfo flex flex-col justify-center items-center text-[20px] sm:text-[25px] '>
                <span>Hello, I am Ayan Banglawala, a </span>
                <span className='purple font-bold'>MERN stack Developer</span>
            </div>
        </div>
    )
}

export default Home