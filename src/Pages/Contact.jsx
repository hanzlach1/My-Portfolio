import { FaEnvelope, FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  const contacts = [
    { 
      name: "Email", 
      icon: <FaEnvelope />, 
      link: "mailto:chhanzla150@gmail.com", 
      color: "#D44638" 
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram />, 
      link: "https://www.instagram.com/hanzlachoudhary1", 
      color: "#E1306C" 
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin />, 
      link: "https://www.linkedin.com/in/hanzla-ch-a6182a274", 
      color: "#0A66C2" 
    },
    { 
      name: "Facebook", 
      icon: <FaFacebook />, 
      link: "https://www.facebook.com/share/1GXHsv6wuV/", 
      color: "#1877F2" 
    },
    { 
      name: "GitHub", 
      icon: <FaGithub />, 
      link: "https://github.com/yourusername", 
      color: "#333333" 
    }
  ];

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect & Create Something Amazing</h2>
            <p className="contact-description">
              I'm always excited to hear about new opportunities, collaborate on innovative projects, 
              or simply chat about technology and development. Whether you have a project in mind, 
              want to discuss potential collaborations, or just want to say hello, I'd love to hear from you!
            </p>
            
            <p className="contact-subtext">
              Feel free to reach out through any of the platforms below. I'm particularly interested in:
            </p>
            
            <ul className="contact-interests">
              <li>🚀 Full-stack web development projects</li>
              <li>💡 Innovative startup ideas and collaborations</li>
              <li>🔧 Technical consulting and problem-solving</li>
              <li>📚 Learning and knowledge sharing opportunities</li>
              <li>🌟 Open source contributions</li>
            </ul>

            <p className="contact-response">
              I typically respond within 24 hours and I'm always happy to help with your development needs 
              or discuss how we can work together to bring your ideas to life!
            </p>
          </div>

          <div className="contact-platforms">
            <h3>Connect With Me</h3>
            <p className="platforms-description">
              Choose your preferred platform to get in touch. I'm active on all these channels and 
              always excited to connect with fellow developers, entrepreneurs, and tech enthusiasts.
            </p>
            
            <div className="contacts-grid">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  style={{ '--accent-color': contact.color }}
                >
                  <div 
                    className="contact-icon"
                    style={{ backgroundColor: contact.color }}
                  >
                    {contact.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{contact.name}</h4>
                    <span className="contact-link">
                      {contact.link.replace('mailto:', '').replace('https://', '')}
                    </span>
                  </div>
                  <div className="contact-arrow">→</div>
                </a>
              ))}
            </div>

            <div className="contact-note">
              <p>
                💌 <strong>Quickest Response:</strong> Email or LinkedIn<br/>
                💬 <strong>Casual Chat:</strong> Instagram or Facebook<br/>
                🔧 <strong>Technical Discussions:</strong> GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact