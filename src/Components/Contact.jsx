import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
   
<div id='contact'>
<div  className="space w-[100%] h-[5vh]"></div>
<div  className='w-[85%] mx-auto flex flex-col gap-y-5 mt-10'>
<h1 className='font-semibold text-5xl flex justify-center'>Lets Connect</h1>
<p className='flex  w-[50%] mx-auto my-5  text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam hic consequuntur delectus expedita aliquam ex, deleniti illum debitis mollitia fugit.</p>

<div className="services grid grid-cols-1 gap-x-5">
    {/* <div className="image"></div> */}
<form className='flex flex-col gap-3 w-[70%] mx-auto items-center'  action="">
<TextField
  className="w-[60%]"
  id="outlined-basic"
  label="name"
  variant="outlined"
  sx={{
      "& .MuiOutlinedInput-root": {
          
      "&.Mui-focused fieldset": {
        borderColor: "rgb(253, 111, 1)", // Outline color when focused
    },
    },
    
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(253, 111, 1)", // Label color when focused
    },
  }}
/>


<TextField
  className="w-[60%] "
  //   style={{ height: "70px" }}
  //   inputProps={{ style: { height: "60px", padding: '0px 14px' } }} // Adjust padding as needed
  id="outlined-basic"
  label="email"
  variant="outlined"
  sx={{
    "& .MuiOutlinedInput-root": {
        
        "&.Mui-focused fieldset": {
            borderColor: "rgb(253, 111, 1)", // Outline color when focused
      },
    },
    
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(253, 111, 1)", // Label color when focused
    },
}}
/>
<TextField
  className="w-[60%] "
  //   style={{ height: "70px" }}
  //   inputProps={{ style: { height: "60px", padding: '0px 14px' } }} // Adjust padding as needed
  id="outlined-basic"
  label="phone"
  variant="outlined"
  sx={{
    "& .MuiOutlinedInput-root": {
        
        "&.Mui-focused fieldset": {
        borderColor: "rgb(253, 111, 1)", // Outline color when focused
      },
    },
    
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(253, 111, 1)", // Label color when focused
    },
  }}
/>
<TextField
  className="w-[60%] "
//   style={{ height: "70px" }}
//   inputProps={{ style: { height: "60px", padding: '0px 14px' } }} // Adjust padding as needed
  id="outlined-basic"
  label="message"
  variant="outlined"
  multiline
  rows={2}
  sx={{
      "& .MuiOutlinedInput-root": {
          
          "&.Mui-focused fieldset": {
              borderColor: "rgb(253, 111, 1)", // Outline color when focused
            },
        },
        
        "& .MuiInputLabel-root.Mui-focused": {
            color: "rgb(253, 111, 1)", // Label color when focused
        },
    }}
/>

<Button  variant="text" style={{color:'white',backgroundColor:"rgb(253, 111, 1)",fontWeight:"lighter",width:"200px", borderRadius:"100px" }}>Submit</Button>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
    
</form>

</div>

</div>
    </div>
  )
}

export default Contact
