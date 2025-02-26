import React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const AboutMe = () => {
  const labels = [{ "React": 75, "Tailwind": 90, "MUI": 77, "Express": 50 }];

  return (
    <div id='aboutMe' className='about-me-container'>
      <div className="space w-[100%] h-[5vh]"></div>
      <div className='home mt-20 w-[90%] md:w-[82%] font-semibold grid grid-cols-1 md:grid-cols-2 mx-auto gap-8'>
        {/* Image Section */}
        <div className="image h-[300px] md:h-auto">
          {/* Add your image here */}
          <img
            src="christopher-gower-m_HRfLhgABo-unsplash.jpg" // Replace with your image URL
            alt="About Me"
            className=" h-[80%] mt-10 rounded-lg object-cover"
          />
        </div>

        {/* Intro Section */}
        <div className="intro py-5">
          <h1 className='text-4xl md:text-5xl font-bold'>About Me</h1>
          <p className="description mt-5 text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorum est autem quidem, rem harum saepe consectetur odio assumenda id in odit, magnam quas omnis.
          </p>

          {/* Skill Sliders */}
          {labels.map((labelobj) =>
            Object.entries(labelobj).map(([key, value]) => (
              <div key={key} className="slider w-[100%] md:w-[80%] py-2 mx-1">
                <h1 className="label font-bold">{key}</h1>
                <Slider
                  defaultValue={value}
                  disabled
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  style={{ 
                    color: "rgb(253, 111, 1)",
                    zIndex: -1, // Ensure the Slider stays behind the navbar
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;