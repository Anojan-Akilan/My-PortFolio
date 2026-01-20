import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const personalInfo = {
        name: 'Anojan Akilan',
        role: 'QA Engineer',
    };

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Anojan-Akilan', icon: <FaGithub /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anojan-akilan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJcgmT3glR9ClepaEFAScXw%3D%3D', icon: <FaLinkedin /> },
        { name: 'Email', url: 'mailto:anojanakilan001@gmail.com', icon: <FaEnvelope /> },
    ];
    `x`
    return (
        <footer className="footer">x
            <div className="footer-container">
                {/* Column 1: Brand & About */}
                <div className="footer-column brand-column">
                    <div className="footer-brand">
                        <span className="footer-name">{personalInfo.name}</span>
                        <span className="footer-role">| {personalInfo.role}</span>
                    </div>
                    <p className="footer-about">
                        Passionate QA Engineer dedicated to delivering high-quality, reliable software solutions through rigorous testing and automation.
                    </p>
                    <div className="footer-social-icons">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                className="footer-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column links-column">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Copyright */}
                <p className="footer-copyright">
                    © {currentYear} Anojan Akilan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
