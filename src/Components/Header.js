// import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  // const [isMenuOpen, setisMenuOpen] = useState(false)
  return (
    <div>
      <header className="flex items-center justify-between text-white ">
        <div className="mt-4 ml-8">
          <img src="/images/logo2.jpg" alt="Company Logo"className="w-16" />
        </div>
        <nav>
          <ul className="hidden xl:flex items-center gap-10 font-semibold text-base mr-6 mt-4">
          <li className="p-3 hover:bg-sky-500 rounded-md cursor-pointer transition-all">
          <Link to="/">Home</Link></li>
            <li className="p-3 hover:bg-sky-500 rounded-md cursor-pointer transition-all">
              <Link to="/about">About</Link>
            </li>
            <li className="p-3 hover:bg-sky-500 rounded-md cursor-pointer transition-all">
              <Link to="services">Services</Link>
            </li>
            <li className="p-3 hover:bg-sky-500 rounded-md cursor-pointer transition-all">
              <Link to="portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <i className="bx bx-menu xl:hidden block text-3xl cursor-pointer mt-4 mr-6 " 
          ></i>
        {/*onClick={() => setisMenuOpen(!isMenuOpen)}*/}
        {/* <div className={`bsolute xl:hidden top-24 left-0 w-full bg-black flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} 
        
        style={{transition: "transform 0.3s ease, text-center"}}
        >
          <li className="list-none w-full text-center p-4 hover:bg-sky-500 transition-all cursor-pointer">Home</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-500 transition-all cursor-pointer">About</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-500 transition-all cursor-pointer">Services</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-500 transition-all cursor-pointer">Portfolio</li>
        </div> */}
      </header>
      </div>
  );
}

export default Header;
