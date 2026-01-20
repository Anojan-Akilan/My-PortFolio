import { FaCode, FaServer, FaLightbulb, FaRocket, FaPaintRoller, FaProjectDiagram, FaGit, FaGithub, FaBusinessTime, FaPaintBrush, FaReact, FaQuestion, FaJira } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
    const skillsData = [

        {
            icon: <FaJira/>,
            title: "QA Skills",
            description: "Manual testing, test case creation, defect tracking, and automation testing using Selenium with Core Java, ensuring high-quality software delivery,Tools: Jira, Excel, Selenium, Core Java"
        },
        {
            icon: <FaGithub/>,
            title: "Version Control",
            description: "Managing source code, test scripts, and collaboration efficiently using Git and GitHub.",
        },
        {
            icon: <FaReact />,
            title: "Front-End Development",
            description: "Building and testing user interfaces using React, HTML, CSS, and JavaScript to ensure seamless user experiences."
        },
        {
            icon: <FaServer />,
            title: "Back-End Development",
            description: "Developing and testing server-side applications and APIs using Java, Node.js, and databases like MongoDB and MySQL.",
        },

      
    ];

    return (
        <article className="skills">
            <div className="skills-container">
                <header className="skills-header">
                    <h2 className="skills-heading">My Skills</h2>
                </header>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-title">{skill.title}</h3>
                            <p className="skill-description">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Skills;
