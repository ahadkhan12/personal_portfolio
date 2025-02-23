import React from 'react'
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <div id='home'>
    <div  className="space w-[100%] h-[5vh]"></div>
        
    <div className=' mt-20 w-[82%] font-semibold  grid grid-cols-2 mx-auto'>
      <div className="intro  py-5">
        <h1 className=' text-lg font-bold ' >Hi I am </h1>
        <h1 className='name text-2xl text-[#fd6f01] font-bold '>Abdul Ahad</h1>
        <h1 className='skill text-7xl font-bold w-[90%] '>
            <h1>Frontend</h1>
            <h1 className='inline bg- ml-[38%] '>Developer</h1>
        </h1>
        <p className="description mt-5 text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorum est autem quidem, rem harum saepe consectetur odio assumenda id in odit, magnam quas omnis.
        </p>
        <Button variant="text" style={{color:'w  hite',backgroundColor:"rgb(253, 111, 1)",fontWeight:"lighter", margin:'15px 0 0 0', padding:"5px 35px"}}>Hire me</Button>
      </div>
      <div className="image bg-red-"></div>
    </div>
    </div>
  )
}

export default Home
