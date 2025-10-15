import { useState, useEffect } from 'react'
import './SkillCard.css'

const SkillCard = ({ skill }) => {
  const [animatedProficiency, setAnimatedProficiency] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProficiency(skill.proficiency)
    }, 100)
    return () => clearTimeout(timer)
  }, [skill.proficiency])

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return '#10b981'
    if (proficiency >= 80) return '#3b82f6'
    if (proficiency >= 70) return '#f59e0b'
    return '#ef4444'
  }

  const getIconColor = (name) => {
    const colors = {
      'MongoDB': '#47A248',
      'Express.js': '#000000',
      'React': '#61DAFB',
      'Node.js': '#339933',
      'JavaScript': '#F7DF1E',
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'Redux': '#764ABC'
    }
    return colors[name] || '#667eea'
  }

  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-title-container">
          <div 
            className="skill-icon-container"
            style={{ color: getIconColor(skill.name) }}
          >
            {skill.icon}
          </div>
          <h3 className="skill-name">{skill.name}</h3>
        </div>
        <span className="skill-level">{skill.level}</span>
      </div>
      
      <p className="skill-description">{skill.description}</p>
      
      <div className="skill-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{
              width: `${animatedProficiency}%`,
              backgroundColor: getProficiencyColor(skill.proficiency)
            }}
          ></div>
        </div>
        <span className="progress-text">{animatedProficiency}%</span>
      </div>

      <div className="skill-projects">
        <strong>Projects:</strong>
        <div className="project-tags">
          {skill.projects.map((project, index) => (
            <span key={index} className="project-tag">{project}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard