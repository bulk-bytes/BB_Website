import "./Services.css";
import React from "react";
import Process from "../components/process";
import Features from "../components/features";
import Services from "../components/Services";
import Platforms from "./../components/Platforms";
import HeroSection from "./../components/HeroSection";
import { aiHeroData } from "../utils/database";
import { aiFeaturesData } from "../utils/database";
import { aiProcessSteps } from "../utils/database";
import { aiServicesData } from "../utils/database";
import FAQ from "../components/FAQ";
import { aifaqs } from './../utils/database';

// Main AI Development Component
const AIDevelopment = () => {
  return (
    <div className ="ai-dev-page fade-in">
      <HeroSection {...aiHeroData}/>
      <Services servicesData={aiServicesData} title="AI Development Services" />
      <Platforms
        title="PLATFORMS WE USE ARE:"
        platforms={["chat-gpt", "tensor-flow-removebg-preview", "deepai-removebg-preview", "awsi-removebg-preview"]}
      />
      <Features featuresData={aiFeaturesData} title={"AI Model development features"}/>
      <Process processSteps={aiProcessSteps} title={'AI Model Development Service Process'} />
      <FAQ faqs={aifaqs}/>
    </div>
  );
};

export default AIDevelopment;
