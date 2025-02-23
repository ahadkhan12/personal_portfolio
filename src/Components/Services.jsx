import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { FaReact } from "react-icons/fa";

const Services = () => {
  return (
    <div id='services'>
        <div  className="space w-[100%] h-[5vh]"></div>

    <div  className='w-[85%] mx-auto flex flex-col gap-y-5 mt-10'>
      <h1 className='font-semibold text-5xl flex justify-center'>Services</h1>
      <p className='flex  w-[50%] mx-auto my-5  text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam hic consequuntur delectus expedita aliquam ex, deleniti illum debitis mollitia fugit.</p>

      <div className="services grid grid-cols-3 gap-x-5">
      <Card className='py-5 bg-[]' style={{backgroundColor:"#f8f8f8"}} sx={{ minWidth: 275 }}>
        <CardContent>
        <FaReact className='size-16 ' style={{color:"rgb(253, 111, 1)"}}/>
        <h1 className=' font-semibold text-3xl my-5 '>(SPA) Development</h1>
        <p className=' font-semibold opacity-80'>Developed dynamic and performant Single Page Applications (SPAs) that provide a seamless user experience without full-page reloads.</p>
        </CardContent>
    </Card>
      <Card className='py-5' style={{backgroundColor:"#f8f8f8"}} sx={{ minWidth: 275 }}>
        <CardContent>
        <FaReact className='size-16 ' style={{color:"rgb(253, 111, 1)"}}/>
        <h1 className=' font-semibold text-3xl my-5 '>(SPA) Development</h1>
        <p className=' font-semibold opacity-80'>Developed dynamic and performant Single Page Applications (SPAs) that provide a seamless user experience without full-page reloads.</p>
        </CardContent>
    </Card>
      <Card className='py-5' style={{backgroundColor:"#f8f8f8"}} sx={{ minWidth: 275 }}>
        <CardContent>
        <FaReact className='size-16 ' style={{color:"rgb(253, 111, 1)"}}/>
        <h1 className=' font-semibold text-3xl my-5 '>(SPA) Development</h1>
        <p className=' font-semibold opacity-80'>Developed dynamic and performant Single Page Applications (SPAs) that provide a seamless user experience without full-page reloads.</p>
        </CardContent>
    </Card>
      
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
    </div>
  )
}

export default Services
