import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send the email using EmailJS
    emailjs
      .sendForm(
        //service_dma1thj
        //template_7onwbem
        //5Kmj49fnHo7msWyJj
        "service_dma1thj", // Replace with your EmailJS service ID
        "template_7onwbem", // Replace with your EmailJS template ID
        form.current,
        "5Kmj49fnHo7msWyJj" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent successfully!"); // Notify the user
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again."); // Notify the user
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <div className="space w-[100%] h-[5vh]"></div>

      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col gap-y-5 mt-10">
        {/* Heading */}
        <h1 className="font-semibold text-3xl md:text-5xl text-center">
          Let's Connect
        </h1>

        {/* Description */}
        <p className="w-[90%] md:w-[50%] mx-auto my-5 text-center text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam hic
          consequuntur delectus expedita aliquam ex, deleniti illum debitis
          mollitia fugit.
        </p>

        {/* Form */}
        <form
          ref={form}
          className="flex flex-col gap-3 w-[100%] md:w-[70%] mx-auto items-center"
          onSubmit={sendEmail}
        >
          {/* Name Field */}
          <TextField
            className="w-[90%] md:w-[60%]"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name" // Add name attribute for EmailJS
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

          {/* Email Field */}
          <TextField
            className="w-[90%] md:w-[60%]"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email" // Add name attribute for EmailJS
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

          {/* Phone Field */}
          <TextField
            className="w-[90%] md:w-[60%]"
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name="phone" // Add name attribute for EmailJS
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

          {/* Message Field */}
          <TextField
            className="w-[90%] md:w-[60%]"
            id="outlined-basic"
            label="Message"
            variant="outlined"
            name="message" // Add name attribute for EmailJS
            multiline
            rows={4}
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

          {/* Submit Button */}
          <Button
            type="submit" // Add type="submit" to trigger the form submission
            variant="text"
            style={{
              color: "white",
              backgroundColor: "rgb(253, 111, 1)",
              fontWeight: "lighter",
              width: "200px",
              borderRadius: "100px",
              marginTop: "20px",
            }}
          >
            Submit
          </Button>

          {/* Spacing */}
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
  );
};

export default Contact;
//service_dma1thj
//template_7onwbem
//5Kmj49fnHo7msWyJj
