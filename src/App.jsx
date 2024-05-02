import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GradientBackground from "./Components/GradientBackground";
import Navbar from "./Components/Navbar";
import ActivateWithActivator from "./Components/Activator";
import "./Components/App.css";
import Introduction from "./Sections/Header";
import Mission from "./Sections/ChartSection";
import Vision from "./Sections/MessagingSection";
import Founder from "./Sections/PricingSection";
import Footer from "./Components/Footer";
import MultiXender from "./Components/MultiXender";
import Circle from "./Components/Circle";


const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const Home = () => {
    return (
      <>
        <Navbar/>
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
          <GradientBackground style={{ width: "100%", height: "100%" }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <MultiXender />
            </div>
            <div>
              {/* Pass handleClick function to ActivateWithActivator component */}
              <ActivateWithActivator onClick={handleClick} />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="bg-gradient-to-r from-amber-500 to-pink-500">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const AboutPage = () => {
  const [showModel, setModal]=useState(false)

  return (
    <>
      <Navbar />
      <Introduction /> 
       <Mission />
      <Vision />
      <Circle/>
      <Founder />
      {/* <button onClick={()=>setModal(true)}className="bg-violet-500 px-4 py-2 rounded-lg text-lg">click</button>
      {showModel && <CardComponent/>} */}
      <Footer />
      
     </>
  );
};

export default App;