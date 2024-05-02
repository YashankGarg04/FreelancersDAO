import React from "react";
import Button from "./Button";

const MultiXender = () => {
  const handleButtonClick = () => {
    window.location.href = "https://near.org/fdaomultixender.near/widget/MultiXender";
  };
  return (
    <div className="container">
      <h1 className="heading" style={{ fontSize: '3.0rem' }}> {/* Adjust the font size */}
      Multi<span className="red-x">X</span>ender
    </h1>
    <div className="flex justify-center">
  <div className="w-full max-w-screen-lg"> {/* Set maximum width to screen width on large screens */}
    <p className="text-white text-center text-lg lg:text-xl xl:text-2xl"> {/* Apply white font color, center align, and font size */}
      MultiXender, built on the Near Protocol, empowers users to transmit NEAR
      tokens to multiple recipients simultaneously through a single transaction,
      optimizing speed, security, and efficiency.
    </p>
  </div>
</div>



<div className="flex justify-center mt-4"> {/* Center align the button */}
      <Button onClick={handleButtonClick}>Click Here</Button>
    </div>
    </div>
  );
};

export default MultiXender;
