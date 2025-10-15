import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaRocket, FaUserTie, FaLaptopCode } from "react-icons/fa";
import './Home.css'

// Apni image import karein
import profileImage from '../assets/profile.jpg'; // Ya .png agar woh format hai

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentRole, setCurrentRole] = useState(0)
  
  const fullText = "MERN Stack Developer"
  const roles = ["Web Developer", "Problem Solver", "UI/UX Enthusiast", "Tech Innovator"]

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: <FaCode />, number: "20+", label: "Projects Completed" },
    { icon: <FaLaptopCode />, number: "1+", label: "Years Experience" },
    { icon: <FaUserTie />, number: "3+", label: "Happy Clients" },
    { icon: <FaRocket />, number: "99%", label: "Success Rate" }
  ]

  return (
    <div className="home">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-circle circle-4"></div>
      </div>

      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Hanzla Choudhary</span>
              </h1>
              
              <h2 className="hero-subtitle">
                I'm a <span className="typewriter">{displayText}<span className="cursor">|</span></span>
              </h2>

              <div className="role-rotator">
                <span className="role-text">{roles[currentRole]}</span>
              </div>

              <p className="hero-description">
                Passionate about creating digital experiences that are not only visually appealing 
                but also highly functional and user-friendly. I specialize in modern web technologies 
                and love turning complex problems into simple, beautiful designs.
              </p>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  <FaRocket className="btn-icon" />
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <FaUserTie className="btn-icon" />
                  Hire Me
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-card card-1">
                <FaCode className="card-icon" />
                <span>Clean Code</span>
              </div>
              <div className="floating-card card-2">
                <FaLaptopCode className="card-icon" />
                <span>Responsive Design</span>
              </div>
              <div className="floating-card card-3">
                <FaRocket className="card-icon" />
                <span>Fast Performance</span>
              </div>
              
              <div className="main-avatar">
                <div className="avatar-glow"></div>
                <div className="avatar-content">
                  <div className="avatar-image">
                    {/* Emoji ki jagah apni image use karein */}
                    <img 
                      src={profileImage} 
                      alt="Hanzla Choudhary" 
                      className="profile-pic"
                    />
                  </div>
                  <div className="avatar-status">
                    <div className="status-dot"></div>
                    <span>Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3 className="links-title">Quick Navigation</h3>
          <div className="links-grid">
            <Link to="/skills" className="quick-link">
              <FaCode className="link-icon" />
              <span>Technical Skills</span>
            </Link>
            <Link to="/projects" className="quick-link">
              <FaLaptopCode className="link-icon" />
              <span>My Projects</span>
            </Link>
            <Link to="/contact" className="quick-link">
              <FaUserTie className="link-icon" />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home