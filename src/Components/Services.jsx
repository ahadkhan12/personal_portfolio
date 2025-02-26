import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FaReact } from "react-icons/fa";

const Services = () => {
  return (
    <div id='services' className='services-container'>
      <div className="space w-[100%] h-[5vh]"></div>

      <div className='w-[90%] md:w-[85%] mx-auto flex flex-col gap-y-5 mt-10'>
        {/* Heading */}
        <h1 className='font-semibold text-3xl md:text-5xl text-center'>Services</h1>

        {/* Description */}
        <p className='w-[90%] md:w-[50%] mx-auto my-5 text-center text-sm md:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam hic consequuntur delectus expedita aliquam ex, deleniti illum debitis mollitia fugit.
        </p>

        {/* Services Grid */}
        <div className="services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Service Card 1 */}
          <Card className='py-5' style={{ backgroundColor: "#f8f8f8" }} sx={{ minWidth: 275 }}>
            <CardContent className='flex flex-col items-center text-center'>
              <FaReact className='size-16' style={{ color: "rgb(253, 111, 1)" }} />
              <h1 className='font-semibold text-2xl md:text-3xl my-5'>(SPA) Development</h1>
              <p className='font-semibold opacity-80 text-sm md:text-base'>
                Developed dynamic and performant Single Page Applications (SPAs) that provide a seamless user experience without full-page reloads.
              </p>
            </CardContent>
          </Card>

          {/* Service Card 2 */}
          <Card className='py-5' style={{ backgroundColor: "#f8f8f8" }} sx={{ minWidth: 275 }}>
            <CardContent className='flex flex-col items-center text-center'>
              <FaReact className='size-16' style={{ color: "rgb(253, 111, 1)" }} />
              <h1 className='font-semibold text-2xl md:text-3xl my-5'>(SPA) Development</h1>
              <p className='font-semibold opacity-80 text-sm md:text-base'>
                Developed dynamic and performant Single Page Applications (SPAs) that provide a seamless user experience without full-page reloads.
              </p>
            </CardContent>
          </Card>

          {/* Service Card 3 */}
          <Card className='py-5' style={{ backgroundColor: "#f8f8f8" }} sx={{ minWidth: 275 }}>
            <CardContent className='flex flex-col items-center text-center'>
              <FaReact className='size-16' style={{ color: "rgb(253, 111, 1)" }} />
              <h1 className='font-semibold text-2xl md:text-3xl my-5'>(SPA) Development</h1>
              <p className='font-semibold opacity-80 text-sm md:text-base'>
                Developed dynamic and performant Single Page Applications (SPAs) that provide a seamless user experience without full-page reloads.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Spacing */}
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Services;