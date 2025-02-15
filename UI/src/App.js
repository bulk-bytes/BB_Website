import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar"; // Adjust to the correct path if necessary
import Home from "./Pages/Home";
import About from "./Pages/About";
import CustomSoftwares from "./Services/CustomSoftwares";
import WebDevelopment from "./Services/WebDevelopment";
import MobileAppDevelopment from "./Services/MobileDevelopment"; // Ensure file name matches
import AIDevelopment from "./Services/AiDevelopment";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./footer/Footer";
import ProfileCard from './components/ProfileCard/ProfileCard'
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/custom-softwares" element={<CustomSoftwares />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/ai-development" element={<AIDevelopment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team-members" element={<ProfileCard/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
