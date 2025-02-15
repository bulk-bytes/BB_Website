import "./Services.css";
import React from "react";
import Process from "../components/process";
import Features from "../components/features";
import Services from "../components/Services";
import Platforms from "../components/Platforms";
import HeroSection from "../components/HeroSection";
import { custsoftfaqs, softHeroData } from "../utils/database";
import { softFeaturesData } from "../utils/database";
import { softProcessSteps } from "../utils/database";
import { softServicesData } from "../utils/database";
import FAQ from "../components/FAQ";
const CustomSoftwares = () => {
  return (
    <div className ="app-dev-page fade-in">
      <HeroSection {...softHeroData}/>
      <Services servicesData={softServicesData} title="Our Custom Softwares Development Services" />
      <Platforms
        title="PLATFORMS WE USE ARE:"
        platforms={["database-management", "nodejs", "docker", "application","wordpress","website"]}
      />
      <Features featuresData={softFeaturesData} title={'Our Custom Software Development features'}/>
      <Process processSteps={softProcessSteps} title={'Custom Softwares Development Service Process'} />
      <FAQ faqs={custsoftfaqs}/>
    </div>
  );
};

export default CustomSoftwares;
