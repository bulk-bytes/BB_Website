import React from "react";
import AboutSection from "../components/About";
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ImageSlider";
import IndustryCards from "../components/IndustryCards";
import IndustryTabs from "../components/IndustryTabs";
import BulkbyteMethodology from "../components/MethodologyStep";
import ReviewCarousel from "../components/review";
import Tabs from "../components/Tabs.jsx";
import { faqs } from "./../utils/database";

const Home = () => {

  return (
    <div className="Home fade-in">
      <HeroSection
        title={"Your Trusted AI Development Company"}
        description={
          "We build meaningful AI Healthcare Solutions to shape the future of your business"
        }
        path={"background3.mp4"}
      />
      <AboutSection />
      <Tabs />
      <IndustryCards />
      <IndustryTabs />
      <BulkbyteMethodology />
      <FAQ faqs={faqs} />
      <a
      
        href="https://web.whatsapp.com/send?phone=923146572538"
        target="blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "3px",
          zIndex: "10000",
          display: "flex",
          alignItems: "center",
        }}
        className="whatsapp-link"
      >
        <img
          src="/images/whatsapp.png"
          alt="whatsapp"
          style={{ width: "50px", borderRadius: "10px" }}
        />
      </a>
      <a
      
        href="https://play.google.com/store/apps/dev?id=6490640102791861699&hl=en"
        target="blank"
        style={{
          position: "fixed",
          bottom: "75px",
          right: "-20px",
          zIndex: "10000",
          display: "flex",
          alignItems: "center",
        }}
        className="whatsapp-link"
      >
        <img
          src="/images/playstore.svg"
          alt="whatsapp"
          style={{ width: "100px", borderRadius: "10px" }}
        />
      </a>
    </div>
  );
};

export default Home;