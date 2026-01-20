import "./Hero.css";
import heroImg from "../assets/images/as.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Anojan Akilan</h1>
                    <h2 className="hero-title">QA Engineer</h2>
                    <p className="hero-description">
                       QA Engineer with hands-on experience in manual testing, test case creation, and defect tracking using Jira. I also have basic experience with Selenium and am continuously improving my automation testing skills. I am passionate about delivering high-quality, reliable software and always eager to learn and grow in the QA field.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="hero-btn primary">View Projects</a>
                        <a href="#contact" className="hero-btn secondary">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image-wrapper">
                        <img src={heroImg} alt="Asviny Kunasingam" className="hero-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
