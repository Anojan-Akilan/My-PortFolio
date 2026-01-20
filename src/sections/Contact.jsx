import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            icon: <FaEnvelope />,
            label: "Email",
            value: "anojanakilan@gmail.com",
            link: "mailto:anojanakilan@gmail.com",
        },
        {
            id: 2,
            icon: <FaPhone />,
            label: "Phone",
            value: "+94 773 719 287",
            link: "tel:+94773719287",
        },
        {
            id: 3,
            icon: <FaMapMarkerAlt />,
            label: "Location",
            value: "Vavuniya, Sri Lanka",
            link: "https://maps.google.com/?q=Vavuniyaka,Sri+Lanka",
        },
    ];

    return (
        <article className="contact">
            <div className="contact-container">
                <header className="contact-header">
                    <h2 className="contact-heading">Get In Touch</h2>
                    <p className="contact-subtext">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                </header>

                <div className="contact-grid">
                    {contactInfo.map((info) => (
                        <a
                            href={info.link}
                            key={info.id}
                            className="contact-card"
                            target={info.id === 3 ? "_blank" : undefined}
                            rel={info.id === 3 ? "noopener noreferrer" : undefined}
                        >
                            <div className="contact-icon">{info.icon}</div>
                            <div className="contact-info-text">
                                <span className="contact-label">{info.label}</span>
                                <p className="contact-value">{info.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Contact;
