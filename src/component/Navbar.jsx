import React, { useState } from 'react';
import { Menu as MenuIcon, X } from "lucide-react"; // Renamed Menu to MenuIcon
import { Link } from "react-router-dom";
import logo from "../assets/up.jpg";



const menuItems = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/about",
  },
  {
    id: 3,
    name: "WORK",
    link: "/work",
  },
  {
    id: 4,
    name: "CONTACT",
    link: "/contact",
  },
  {
    id: 5, // Changed to unique id
    name: "RESUME",
    link: "/Resume", // Changed to unique link to avoid conflict
  },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b bg-black border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="tracking-tight font-bold text-4xl text-white">Sunday Abiodun Elijah</span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {menuItems.map((data) => (
              <li key={data.id}>
                <Link to={data.link} className="text-white font-bold text-2xl hover:text-orange-500">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>

          

          {/* Hamburger Menu */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X className="text-white" /> : <MenuIcon className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {menuItems.map((item) => ( // Changed Menu to menuItems
                <li key={item.id} className="py-4">
                  <Link to={item.link} className="text-white hover:text-orange-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;