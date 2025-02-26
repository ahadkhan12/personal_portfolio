import React from 'react';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div id='home' className='home-container'>
      <div className="space w-[100%] h-[5vh]"></div>

      <div className='mt-20 w-[90%] md:w-[82%] font-semibold grid grid-cols-1 md:grid-cols-2 mx-auto gap-8'>
        {/* Intro Section */}
        <div className="intro py-5 order-2 md:order-1">
          <h1 className='text-lg font-bold'>Hi, I am</h1>
          <h1 className='name text-2xl text-[#fd6f01] font-bold'>Abdul Ahad</h1>
          <div className='skill text-4xl md:text-7xl font-bold'>
            <h1>Application</h1>
            <h1 className='inline-block md:ml-[38%]'>Developer</h1>
          </div>
          <p className="description mt-5 text-sm md:text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorum est autem quidem, rem harum saepe consectetur odio assumenda id in odit, magnam quas omnis.
          </p>
          {/* <Button
            variant="text"
            style={{
              color: 'white',
              backgroundColor: "rgb(253, 111, 1)",
              fontWeight: "lighter",
              margin: '15px 0 0 0',
              padding: "5px 35px",
            }}
          >
            Hire me
          </Button> */}
        </div>

        {/* Image Section */}

      </div>
    </div>
  );
};

export default Home;