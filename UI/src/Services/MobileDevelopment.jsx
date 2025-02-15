import "./Services.css";
import React from "react";
import Process from "../components/process";
import Features from "../components/features";
import Services from "../components/Services";
import Platforms from "./../components/Platforms";
import HeroSection from "./../components/HeroSection";
import { appHeroData } from "../utils/database";
import { appFeaturesData } from "../utils/database";
import { appProcessSteps } from "../utils/database";
import { appServicesData } from "../utils/database";
import FAQ from "../components/FAQ";
import { appfaqs } from './../utils/database';

export default function MobileDevelopment() {
  return (
    <div className ="app-dev-page fade-in">
      <HeroSection {...appHeroData}/>
      <Services servicesData={appServicesData} title="Our Mobile App Development Services" />
      <Platforms
        title="PLATFORMS WE USE ARE:"
        platforms={["android", "flutter", "library", "swift"]}
      />
      <Features featuresData={appFeaturesData} title={"Mobile App Development Features"}/>
      <Process processSteps={appProcessSteps} title={'Mobile App Development Service Process'} />
      <FAQ faqs={appfaqs}/>
    </div>
  );
}
