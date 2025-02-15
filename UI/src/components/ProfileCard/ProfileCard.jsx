import React from "react";
import "./ProfileCard.css";
const teamMembers = [
  {
    name: "Osama Altaf Ahmed",
    role: "C-E-O",
    role2: "Chief Executive Officer",
    image: "/images/usama.jpeg",
    fb: "https://www.facebook.com/osama.buzdar.1",
    github: "https://github.com/osamabuzdar",
    linkedin: "https://www.linkedin.com/in/osama-buzdar-a3b921169/",
  },
  {
    name: "Abdul Majid Khokhar",
    role: "M-D",
    role2: "Managing Director",
    image: "/images/majidsb.jpeg",
    fb: "https://www.facebook.com/profile.php?id=100003996184333",
    github: " ",
    linkedin: "https://www.linkedin.com/in/abdul-majid-khokhar-ab7284194/",
  },
  {
    name: "Ghazanffar Abbas",
    role: "C-T-O",
    role2: "Chief Technology Officer",
    image: "/images/ghazanffar.jpeg",
    fb: "https://www.facebook.com/profile.php?id=100048451624222&_rdc=1&_rdr#",
    github: "https://github.com/ghazanfar780",
    linkedin: "https://www.linkedin.com/in/engr-ghazanfar-abbas-a27580179/",
  },
  {
    name: "Muhammad Nouman",
    role2: "Project Manager",
    role:"P-M",
    image: "/images/nouman.jpeg",
    tech: "Dotnet Developer",
  },
  {
    name: "Muhammad Sohail",
    role: "Senior Web Development",
    image: "/images/user1.jpg",
    tech: "Laravel",
  },
  {
    name: "Zia Mohay-U-Deen",
    role: "Web Developer",
    image: "/images/qureshi.jpg",
    tech: "MERN Stack",
  },
  {
    name: "Muhammad Fahad",
    role: "Web Developer",
    image: "/images/fahad.jpeg",
    tech: "MERN Stack",
  },
  {
    name: "Muhammad Ahmad",
    role: "Mobile App Developer",
    image: "/images/ahmad.jpeg",
    tech: "Flutter",
  },
  {
    name: "Mirza Usman",
    role: "Mobile App Developer",
    image: "/images/usman.jpeg",
    tech: "Flutter",
  },
  {
    name: "Farhan Ahmad",
    role: "Web Developer",
    image: "/images/farhan.jpeg",
    tech: "MERN Stack",
  },
];
const ProfileCard = () => {
  return (
    <div className="profile-cards-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="profile-card">
          <div className="profile-header">
            <div
              className="profile-image"
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
          </div>
          <div className="profile-body">
            <h2 className="profile-name">{member.name}</h2>
            <div className="role">
              <p className="profile-title">{member.role}</p>
             {member.role2 && <p className="profile-title2">({member.role2})</p>}
            </div>
            <p className="profile-tech">
              {member.tech ? `(${member.tech})` : " "}
            </p>
            <div className="profile-social">
              {member.fb && (
                <a
                  href={member.fb}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/facebook.png" alt="Facebook" />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/github.png" alt="Github" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/linkedin.png" alt="Linked In" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
