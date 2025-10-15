import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])

  // Advanced Projects Data with Real Technologies
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with admin dashboard, payment integration, and inventory management.",
      longDescription: "A complete MERN stack e-commerce platform featuring user authentication, product management, shopping cart, order processing, payment gateway integration, and admin dashboard for inventory and order management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe", "Redux"],
      category: "fullstack",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://yourapp.herokuapp.com",
      features: [
        "User Authentication & Authorization",
        "Product Catalog & Search",
        "Shopping Cart & Wishlist",
        "Payment Integration (Stripe)",
        "Order Management",
        "Admin Dashboard",
        "Inventory Management",
        "Email Notifications"
      ],
      status: "completed",
      complexity: "advanced"
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "Real-time messaging app with Socket.io, JWT authentication, and multiple chat rooms.",
      longDescription: "A real-time chat application built with Socket.io for instant messaging, featuring JWT authentication, multiple chat rooms, file sharing, online status, and message history persistence.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT", "Express", "WebSockets"],
      category: "fullstack",
      githubUrl: "https://github.com/yourusername/chat-app",
      liveUrl: "https://chatapp.herokuapp.com",
      features: [
        "Real-time Messaging",
        "Multiple Chat Rooms",
        "JWT Authentication",
        "File & Image Sharing",
        "Online Status",
        "Message History",
        "Typing Indicators",
        "User Profiles"
      ],
      status: "completed",
      complexity: "advanced"
    },
    {
      id: 3,
      title: "Authentication System with NodeMailer",
      description: "Secure authentication system with email verification, password reset, and JWT tokens.",
      longDescription: "A comprehensive authentication system featuring email verification, password reset functionality, JWT token-based authentication, role-based access control, and secure session management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "NodeMailer", "Bcrypt", "React"],
      category: "backend",
      githubUrl: "https://github.com/yourusername/auth-system",
      liveUrl: "https://authsystem.herokuapp.com",
      features: [
        "Email Verification",
        "Password Reset",
        "JWT Authentication",
        "Role-based Access Control",
        "Session Management",
        "Security Headers",
        "Rate Limiting",
        "Social Login (OAuth)"
      ],
      status: "completed",
      complexity: "intermediate"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      longDescription: "A collaborative task management application with real-time updates, team collaboration features, project tracking, deadline management, and progress analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Express"],
      category: "fullstack",
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://taskapp.herokuapp.com",
      features: [
        "Real-time Collaboration",
        "Team Management",
        "Task Assignments",
        "Progress Tracking",
        "File Attachments",
        "Notifications",
        "Analytics Dashboard",
        "Calendar Integration"
      ],
      status: "in-progress",
      complexity: "advanced"
    }
  ]

  // Advanced filtering logic
  const categories = [
    { id: 'all', name: 'All Projects', count: projectsData.length },
    { id: 'fullstack', name: 'Full Stack', count: projectsData.filter(p => p.category === 'fullstack').length },
    { id: 'backend', name: 'Backend', count: projectsData.filter(p => p.category === 'backend').length },
    { id: 'frontend', name: 'Frontend', count: projectsData.filter(p => p.category === 'frontend').length }
  ]

  // Filter projects based on active filter
  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? projectsData 
      : projectsData.filter(project => project.category === activeFilter)
    
    setFilteredProjects(filtered)
  }, [activeFilter])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(projectsData)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Calculate project statistics
  const projectStats = {
    total: projectsData.length,
    completed: projectsData.filter(p => p.status === 'completed').length,
    inProgress: projectsData.filter(p => p.status === 'in-progress').length,
    advanced: projectsData.filter(p => p.complexity === 'advanced').length
  }

  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        
        {/* Project Statistics */}
        <div className="projects-stats">
          <div className="project-stat-card">
            <h3>{projectStats.total}</h3>
            <p>Total Projects</p>
          </div>
          <div className="project-stat-card">
            <h3>{projectStats.completed}</h3>
            <p>Completed</p>
          </div>
          <div className="project-stat-card">
            <h3>{projectStats.inProgress}</h3>
            <p>In Progress</p>
          </div>
          <div className="project-stat-card">
            <h3>{projectStats.advanced}</h3>
            <p>Advanced Level</p>
          </div>
        </div>

        {/* Project Filter */}
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`project-filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Technical Showcase Section */}
        <div className="technical-showcase">
          <h2>Technical Implementation Highlights</h2>
          <div className="tech-features">
            <div className="tech-feature">
              <h3>🔐 Authentication System</h3>
              <ul>
                <li>JWT-based authentication</li>
                <li>Role-based access control</li>
                <li>Secure password hashing with bcrypt</li>
                <li>Email verification with NodeMailer</li>
                <li>Password reset functionality</li>
              </ul>
            </div>
            <div className="tech-feature">
              <h3>💬 Real-time Chat</h3>
              <ul>
                <li>Socket.io for real-time communication</li>
                <li>Multiple chat rooms</li>
                <li>File and image sharing</li>
                <li>Online status indicators</li>
                <li>Message persistence</li>
              </ul>
            </div>
            <div className="tech-feature">
              <h3>🛒 E-commerce Features</h3>
              <ul>
                <li>Payment integration (Stripe)</li>
                <li>Inventory management</li>
                <li>Order processing system</li>
                <li>Admin dashboard</li>
                <li>Product search and filtering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects