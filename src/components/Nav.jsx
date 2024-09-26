import '../css/nav.css';
import '../index.css';

const Nav = () => {
  return (
    <nav>
      <div className="nav-items text-[12px] px-[20px] py-[8px] lg:px-[40px] lg:text-[14px]">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
