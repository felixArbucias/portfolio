import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className = "flex flex-shrink-0 items-center"></div>
            <div className = 'm-8 flex items-center justify-center gap-4 text-2xl'>
                <a href='https://www.linkedin.com/in/felixarbucias/'>
                <FaLinkedin />
                </a>
                <a href="https://github.com/felixArbucias">
                <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;