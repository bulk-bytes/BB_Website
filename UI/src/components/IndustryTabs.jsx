import React, { useState } from 'react';
import './Component.css'; // Make sure this file contains the improved CSS provided below

const TabContent = ({ title, content, link, image }) => (
  <div className="tab-content">
    <div className="tab-image">
      <img src={image} alt={title} />
    </div>
    <div className="tab-text">
      <h2 className="tab-title">{title}</h2>
      <p className="tab-description">{content}</p>
      <div className="read-more-btn">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  </div>
);

const IndustryTabs = () => {
  const tabData = [
    {
      title: "AI-Powered Hospital & Pharmacy Management System",
      content:
        "Healthcare providers and pharmacies face growing challenges such as rising operational costs, staff shortages, and data security concerns, all of which impact patient care and efficiency. Bulk Bytes offers an AI-powered Hospital & Pharmacy Management System designed to streamline hospital workflows, enhance patient record management, and automate scheduling, while also optimizing pharmacy inventory, prescription management, and medication tracking. Our intelligent solution reduces administrative burdens, strengthens data security, and improves overall patient experience, allowing healthcare professionals and pharmacists to focus on delivering high-quality care with efficiency and accuracy.",
      link: "/portfolio/ai-powered-hims/",
      image: "images/industrytabs/hims-img.jpeg",
    },
    {
      title: "Patient Diagnostic System – GP POD",
      content:
        "A US-based organization sought a solution to streamline patient management processes. Bulk Bytes delivered a custom AI-powered Patient Diagnostic System (GP POD) that significantly improved diagnostic accuracy, streamlined workflows, reduced operational costs, and enhanced patient satisfaction, all while empowering healthcare professionals with advanced tools. Our collaboration helped optimize healthcare delivery through resource management, leveraging AI to ensure a patient-centric approach that prioritizes care quality. By integrating this cutting-edge system, we contributed to a more efficient and effective healthcare environment, benefiting both providers and patients alike.",
      link: "/portfolio/patient-diagnostic-system/",
      image: "images/industrytabs/medical.jpg",
    },
    {
      title: "AI-Powered Law GPT",
      content:
        "Our esteemed UK-based client faced significant challenges with data overload and time-consuming tasks, particularly when it came to centralizing legal information in one place. Bulk Bytes partnered with them to deliver an AI-powered Law GPT solution, designed to alleviate the burdens on legal professionals by streamlining everyday tasks, ensuring compliance, and enabling early risk mitigation. LawGPT offers a cost-effective legal support solution, addressing our client’s challenges by providing a comprehensive platform that simplifies complex legal processes and enhances efficiency. This solution not only reduces operational costs but also empowers legal teams with the tools they need to focus on delivering high-quality services.",
      link: "/portfolio/ai-driven-law-gpt/",
      image: "images/industrytabs/ai.jpg",
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="industry-tabs-container">
      <h2 className="industry-tabs-heading">Our Client-Centric AI Solutions</h2>

      <div className="tabs-content">
        <div className="tab-buttons">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeTabIndex ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tab-display">
          <TabContent
            title={tabData[activeTabIndex].title}
            content={tabData[activeTabIndex].content}
            link={tabData[activeTabIndex].link}
            image={tabData[activeTabIndex].image}
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryTabs;
