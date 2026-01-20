import "./About.css";
import Resume from "../assets/pdf/ProfessionalCV.pdf";
const About = () => {
    const aboutContent = {
        heading: "About Me",
        intro: `I am an aspiring QA Engineer who is genuinely interested in software testing and quality assurance. I enjoy writing clear test cases, executing test scenarios, and reporting bugs in a well-structured and understandable way. I am always eager to learn new testing tools and methodologies and aim to contribute to building stable, reliable, and user-friendly software products.`,
        ctaText: "Download CV",
        ctaLink: { Resume },
    };


    return (
        <article className="about">
            <div className="about-container">
                <header className="about-header">
                    <h2 className="about-heading">{aboutContent.heading}</h2>
                </header>

                <div className="about-content-centered">
                    <p className="about-intro-text">{aboutContent.intro}</p>
                    <p className="about-background-text">{aboutContent.background}</p>

                    <div className="about-buttons">
                        <a href={Resume} className="about-btn primary" download>
                            Download CV
                        </a>
                        <a href={Resume} className="about-btn secondary" target="_blank" rel="noopener noreferrer">
                            View CV
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );//ano portfolio
};

export default About;
