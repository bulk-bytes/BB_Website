import React from "react";
import "./Services.css";
import Services from "../components/Services";
import Platforms from "./../components/Platforms";
import HeroSection from "./../components/HeroSection";
import Features from "../components/features";
import { webFeaturesData } from "../utils/database";
import Process from "../components/process";
import { webProcessSteps } from "../utils/database";
import { webHeroData } from "../utils/database";
import { webServicesData } from "../utils/database";
import FAQ from "../components/FAQ";
import { webfaqs } from './../utils/database';


// Main Web Development Component
const WebDevelopment = () => {
  return (
    <div className="web-dev-page fade-in">
      <HeroSection {...webHeroData}/>
      <Services servicesData={webServicesData} title="Our Custom Web Development Services" />
      <Platforms
        title="PLATFORMS WE USE ARE:"
        platforms={["database-management", "express", "library", "nodejs","php","wordpress"]}
      />
      <Features featuresData={webFeaturesData} title={"Custom Web Development Features"}/>
      <Process processSteps={webProcessSteps} title={'The Custom Web Development Process'}/>
      <FAQ faqs={webfaqs}/>
    </div>
  );
};

export default WebDevelopment;