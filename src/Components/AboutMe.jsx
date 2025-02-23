import React from 'react'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const AboutMe = () => {
  const labels=[{"React":75,"Tailwind":90, "MUI":77 , "Express":50}]
  return (
    <div id='aboutMe' className=''>
    <div  className="space w-[100%] h-[5vh]"></div>
    <div  className='home mt-20 w-[82%] font-semibold  grid grid-cols-2 mx-auto'>
      <div className="image bg-red-"></div>
      <div className="intro  py-5">
        <h1 className=' text-5xl font-bold ' >About Me </h1>
        <p className="description mt-5 text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorum est autem quidem, rem harum saepe consectetur odio assumenda id in odit, magnam quas omnis.
        </p>
        {labels.map((labelobj)=>Object.entries(labelobj).map(([key,value])=>
      <div className="slider w-[80%] py-2 mx-1">
      <h1 className="label font-bold">{key}</h1>
      <Slider defaultValue={value} disabled aria-label="Default" valueLabelDisplay="auto" style={{color:"rgb(253, 111, 1)"}} />
      </div>
      ))}
        {/* <Button variant="text" style={{color:'white',backgroundColor:"rgb(253, 111, 1)",fontWeight:"lighter", margin:'15px 0 0 0', padding:"5px 35px"}}>Hire me</Button> */}
      </div>
      
    </div>
    </div>
  )
}

export default AboutMe
