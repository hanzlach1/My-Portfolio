import { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false)

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981'
      case 'in-progress': return '#f59e0b'
      case 'planned': return '#3b82f6'
      default: return '#6b7280'
    }
  }

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'advanced': return '#ef4444'
      case 'intermediate': return '#f59e0b'
      case 'beginner': return '#10b981'
      default: return '#6b7280'
    }
  }

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-badges">
            <span 
              className="status-badge"
              style={{ backgroundColor: getStatusColor(project.status) }}
            >
              {project.status}
            </span>
            <span 
              className="complexity-badge"
              style={{ backgroundColor: getComplexityColor(project.complexity) }}
            >
              {project.complexity}
            </span>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        {showDetails && (
          <div className="project-details">
            <p className="project-long-description">{project.longDescription}</p>
            
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="project-actions">
          <button 
            className="btn-details"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Show Less' : 'View Details'}
          </button>
          
          <div className="project-links">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-link github"
            >
              GitHub
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-link live"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard