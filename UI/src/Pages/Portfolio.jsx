import { motion } from "framer-motion";
import "./Page.css";

const Portfolio = () => {
  const teamMembers = [
    {
      name: "Osama Altaf Ahmed",
      role: "Chief Executive Officer",
      role2:"C-E-O",
      path: "https://osama-altaf.netlify.app/",
      color: "#ff4b5c",
      image: "/images/usama.jpeg",
    },
    {
      name: "Abdul Majid Khokhar",
      role: "Managing Director",
      role2:"M-D",
      path: "https://abdul-majid.netlify.app/",
      color: "#ffb400",
      image: "/images/banner.jpeg",
    },
    {
      name: "Ghazanffar Abbas",
      role: "Chief Technology Officer",
      role2:"C-T-O",
      path: "https://ghazanffar-abbass.netlify.app/",
      color: "#1cb5e0",
      image: "/images/ghazanffar.jpeg",
    },
  ];

  return (
    <>
      <a className="portfolio-container2">
        {teamMembers.map((member, index) => (
          <a
            href={member.path}
            style={{ textDecoration: "none" }}
            target={member.path}
          >
            <motion.div
              key={index}
              className="card-portfolio"
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <h2>{member.name}</h2>
             <div className="role" style={{display:"flex",gap:"5px",justifyContent:"center",alignItems:"center"}} >
              <p>{member.role2}</p>
             <p style={{fontSize:"12px",}} >({member.role})</p>
             </div>
            </motion.div>
          </a>
        ))}
      </a>
    </>
  );
};
export default Portfolio;
