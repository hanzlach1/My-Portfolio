import { useState, useEffect, useMemo } from 'react'
import SkillCard from '../components/SkillCard'
import './Skills.css'

// React Icons Import
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiRedux } from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [skills, setSkills] = useState([])

  // Advanced skill data with categories and proficiency levels
  const skillData = useMemo(() => [
    {
      id: 1,
      name: 'MongoDB',
      category: 'backend',
      proficiency: 90,
      description: 'NoSQL database design, aggregation pipelines, indexing, Mongoose ODM',
      projects: ['E-commerce', 'Social Media App', 'Real-time Chat'],
      level: 'Expert',
      icon: <SiMongodb className="skill-icon" />
    },
    {
      id: 2,
      name: 'Express.js',
      category: 'backend',
      proficiency: 75,
      description: 'RESTful APIs, middleware, authentication, error handling, routing',
      projects: ['API Development', 'Microservices', 'Backend Systems'],
      level: 'Intermediate',
      icon: <SiExpress className="skill-icon" />
    },
    {
      id: 3,
      name: 'React',
      category: 'frontend',
      proficiency: 95,
      description: 'Hooks, Context API, Redux, Performance Optimization, Component Lifecycle',
      projects: ['Dashboards', 'SPAs', 'Admin Panels'],
      level: 'Expert',
      icon: <FaReact className="skill-icon" />
    },
    {
      id: 4,
      name: 'Node.js',
      category: 'backend',
      proficiency: 78,
      description: 'Event-driven architecture, streams, clustering, file system operations',
      projects: ['Real-time Apps', 'APIs', 'CLI Tools'],
      level: 'Intermediate',
      icon: <FaNodeJs className="skill-icon" />
    },
    {
      id: 5,
      name: 'JavaScript',
      category: 'frontend',
      proficiency: 96,
      description: 'ES6+, Async/Await, Functional Programming, Design Patterns, DOM Manipulation',
      projects: ['All Projects', 'Interactive Web Apps'],
      level: 'Expert',
      icon: <SiJavascript className="skill-icon" />
    },
    {
      id: 6,
      name: 'HTML5',
      category: 'frontend',
      proficiency: 98,
      description: 'Semantic HTML, Web Accessibility, SEO Optimization, Cross-browser Compatibility',
      projects: ['All Web Projects', 'Landing Pages'],
      level: 'Expert',
      icon: <FaHtml5 className="skill-icon" />
    },
    {
      id: 7,
      name: 'CSS3',
      category: 'frontend',
      proficiency: 92,
      description: 'Flexbox, Grid, Animations, Responsive Design, CSS Variables, Preprocessors',
      projects: ['All Web Projects', 'UI Components'],
      level: 'Expert',
      icon: <FaCss3Alt className="skill-icon" />
    },
    {
      id: 8,
      name: 'Redux',
      category: 'frontend',
      proficiency: 85,
      description: 'State management, Redux Toolkit, middleware, async actions, predictable state',
      projects: ['Complex SPAs', 'E-commerce', 'Dashboards'],
      level: 'Advanced',
      icon: <SiRedux className="skill-icon" />
    }
  ], [])

  // Advanced filtering logic with memoization
  const filteredSkills = useMemo(() => {
    return activeCategory === 'all' 
      ? skillData 
      : skillData.filter(skill => skill.category === activeCategory)
  }, [activeCategory, skillData])

  // Calculate statistics - Advanced array methods
  const stats = useMemo(() => {
    const totalSkills = skillData.length
    const averageProficiency = Math.round(
      skillData.reduce((acc, skill) => acc + skill.proficiency, 0) / totalSkills
    )
    
    const expertSkills = skillData.filter(skill => skill.level === 'Expert').length
    const categoryCount = [...new Set(skillData.map(skill => skill.category))].length
    
    return { totalSkills, averageProficiency, expertSkills, categoryCount }
  }, [skillData])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(filteredSkills)
    }, 300)
    return () => clearTimeout(timer)
  }, [filteredSkills])

  // Advanced category management
  const categories = useMemo(() => [
    { id: 'all', name: 'All Skills', count: skillData.length },
    { id: 'frontend', name: 'Frontend', count: skillData.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: skillData.filter(s => s.category === 'backend').length }
  ], [skillData])

  return (
    <div className="skills">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        
        {/* Statistics Section */}
        <div className="skills-stats">
          <div className="stat-card">
            <h3>{stats.totalSkills}</h3>
            <p>Technologies</p>
          </div>
          <div className="stat-card">
            <h3>{stats.averageProficiency}%</h3>
            <p>Average Proficiency</p>
          </div>
          <div className="stat-card">
            <h3>{stats.expertSkills}</h3>
            <p>Expert Level</p>
          </div>
          <div className="stat-card">
            <h3>{stats.categoryCount}</h3>
            <p>Categories</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="skills-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Advanced JavaScript Logic Demo */}
        <div className="code-demo">
          <h3>Advanced JavaScript in Action</h3>
          <div className="demo-content">
            <p>Skills by Level: {JSON.stringify(
              skillData.reduce((acc, skill) => {
                acc[skill.level] = (acc[skill.level] || 0) + 1
                return acc
              }, {})
            )}</p>
            <p>Highest Proficiency: {
              skillData.reduce((max, skill) => 
                skill.proficiency > max.proficiency ? skill : max, 
                {proficiency: 0}
              ).name
            }</p>
            <p>Frontend vs Backend: {
              JSON.stringify({
                frontend: skillData.filter(s => s.category === 'frontend').length,
                backend: skillData.filter(s => s.category === 'backend').length
              })
            }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills