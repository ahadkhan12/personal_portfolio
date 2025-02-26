import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu'; // Import the hamburger menu icon
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Define elements as objects with `element` and `to`
  const navElements = [
    { element: 'Home', to: 'home' },
    { element: 'About me', to: 'aboutMe' },
    { element: 'Services', to: 'services' },
    // { element: 'Projects', to: 'projects' },
    // { element: 'Testimonials', to: 'testimonials' },
    { element: 'Contact', to: 'contact' },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar bg-white z-1 flex mx-auto justify-between w-[84%] py-3 sticky top-0 mb-10 z-50'>
      {/* Logo Section */}
      <div className="logo w-[20%] flex items-center text-4xl">
{/*         <img className='p-4 w-[5.5rem]' src="Subtract.png" alt="logo" /> */}
        <span>
          <span className='font-semibold'>A</span>
          <span className='opacity-80'>had</span>
        </span>
      </div>

      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <div className="mobile-menu-icon md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Navigation Links (Visible on Desktop) */}
      <div className={`elements w-[75%]  py-2 items-center hidden md:flex ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className='flex py-2 items-center absolute right-0'>
          {navElements.map((item) => (
            <li className='p-2' key={item.to}>
              <Link to={item.to} smooth={true} duration={500}>
                <Button
                  variant="text"
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    padding: '5px 10px',
                    opacity: '0.8',
                    fontSize: '15px',
                  }}
                >
                  {item.element}
                </Button>
              </Link>
            </li>
          ))}
          <li className='p-2' id='cv'>
            <a href="/resume.pdf" download="Abdul Ahad_CV.pdf">
              <Button
                variant="text"
                style={{
                  color: 'white',
                  backgroundColor: 'rgb(253, 111, 1)',
                  fontWeight: 'lighter',
                }}
              >
                Download CV
              </Button>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Visible on Mobile) */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className='flex flex-col py-2'>
            {navElements.map((item) => (
              <li className='p-2' key={item.to}>
                <Link to={item.to} smooth={true} duration={500} onClick={toggleMenu}>
                  <Button
                    variant="text"
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      padding: '5px 10px',
                      opacity: '0.8',
                      fontSize: '15px',
                      width: '100%',
                      textAlign: 'left',
                    }}
                  >
                    {item.element}
                  </Button>
                </Link>
              </li>
            ))}
            <li className='p-2'>
              <a href="/resume.pdf" download="Abdul Ahad_CV.pdf">
                <Button
                  variant="text"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgb(253, 111, 1)',
                    fontWeight: 'lighter',
                    width: '100%',
                  }}
                >
                  Download CV
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
