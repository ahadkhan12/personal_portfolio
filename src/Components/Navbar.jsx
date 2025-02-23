import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

const Navbar = () => {
  // Define elements as objects with `element` and `to`
  const navElements = [
    { element: 'Home', to: 'home' },
    { element: 'About me', to: 'aboutMe' },
    { element: 'Services', to: 'services' },
    { element: 'Projects', to: 'projects' },
    { element: 'Testimonials', to: 'testimonials' },
    { element: 'Contact', to: 'contact' },
  ];

  return (
    <div className='navbar flex mx-auto justify-between w-[84%] py-3 sticky top-0 mb-10 '>
      <div className="logo w-[20%] flex items-center text-4xl">
        <img className='p-4 w-[5.5rem]' src="src\assets\Subtract.png" alt="logo" />
        <span>
          <span className='font-semibold'>A</span>
          <span className='opacity-80'>had</span>
        </span>
      </div>
      <div className="elements w-[75%] py-2 flex items-center">
        <ul className='flex py-2 items-center relative right-0'>
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
          <li className='p-2'>
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
