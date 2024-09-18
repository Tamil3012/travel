import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from './../assets/image/logo1.png'
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <nav className="text-balck bg-main2 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 w-20">
                <img src={logo1} alt="" />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
                <NavLink exact to="/" className="hover:bg-main px-3 py-2 text-white rounded-md font-bold"> Home</NavLink>
                <NavLink exact to="/tours" className="hover:bg-main px-3 py-2 text-white rounded-md font-bold"> Our Tours</NavLink>
                <NavLink exact to="/review" className="hover:bg-main px-3 py-2 text-white rounded-md font-bold"> Reviews</NavLink>
                <NavLink exact to="/contact" className="hover:bg-main px-3 py-2 text-white rounded-md font-bold"> Contact Us</NavLink>            
            </div>
            {/* Hamburger Icon */}
            <div className="md:hidden">
                <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-main focus:outline-none"
                >
                {/* <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg> */}
                <BiMenuAltRight size={30}/>
                </button>
            </div>
            </div>
        </div>

        {/* Right-Side Sliding Menu */}
        <div
            className={`fixed top-50 right-0 w-52 h-full bg-main2 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
        >
            <div className="p-5">
            <div className="mt-8 space-y-4">

                <NavLink exact to="/" className="block px-3 font-bold py-2 rounded-md hover:bg-main"> Home</NavLink>
                <NavLink exact to="/tours" className="block font-bold px-3 py-2 rounded-md hover:bg-main"> Our Tours</NavLink>
                <NavLink exact to="/review" className="block font-bold px-3 py-2 rounded-md hover:bg-main"> Reviews</NavLink>
                <NavLink exact to="/contact" className="block font-bold px-3 py-2 rounded-md hover:bg-main"> Contact Us</NavLink>
                
            </div>
            </div>
        </div>
        </nav>
    </>
  );
};

export default Navbar;
