import React, { useState } from 'react';
import { Menu as MenuIcon, X } from "lucide-react"; 
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
    id: 5,
    name: "RESUME",
    link: "/Resume",
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
          {/* Logo Section - Made responsive */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-8 w-8 sm:h-10 sm:w-10 mr-2" src={logo} alt="logo" /> {/* Responsive logo size */}
            {/* Name - Made responsive text size */}
            <span className="tracking-tight font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white whitespace-nowrap overflow-hidden text-ellipsis">
              Sunday Abiodun Elijah
            </span>
          </div>

          {/* Navigation Links (Desktop) */}
          {/* Removed ml-14 and space-x-12 for better control, using gap-8 */}
          <ul className="hidden lg:flex items-center gap-8"> {/* Adjusted spacing for desktop */}
            {menuItems.map((data) => (
              <li key={data.id}>
                <Link to={data.link} className="text-white font-bold text-lg hover:text-orange-500"> {/* Adjusted text size */}
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu (Mobile) */}
          {/* Adjusted to be flex on md screens and hidden on lg, as per original intent */}
          <div className="lg:hidden flex items-center"> {/* Removed md:flex-col justify-end, just flex */}
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X className="text-white h-6 w-6" /> : <MenuIcon className="text-white h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-x-0 top-[60px] z-20 bg-neutral-900 p-4 flex flex-col justify-start items-center lg:hidden"> {/* Adjusted top for nav height, p-4 for padding */}
            <ul className="w-full text-center"> {/* Ensure ul takes full width */}
              {menuItems.map((item) => (
                <li key={item.id} className="py-3 border-b border-neutral-700 last:border-b-0"> {/* Added border for separation */}
                  <Link
                    to={item.link}
                    className="block text-white hover:text-orange-500 text-lg font-medium" // Adjusted text size and weight
                    onClick={toggleNavbar} // Close drawer on link click
                  >
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
