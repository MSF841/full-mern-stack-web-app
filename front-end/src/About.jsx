import { useEffect, useState } from 'react'
import './About.css'

const About = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(response => response.json())
      .then(data => {
        setAboutData(data)
      })
      .catch(error => {
        console.error('Error fetching About page:', error)
      })
  }, [])

  if (!aboutData) {
    return <p>Loading...</p>
  }

  return (
    <div className="about-page">
      <h1>{aboutData.title}</h1>

      <div className="about-content">
        <img
          src={aboutData.image}
          alt="Maurice playing guitar"
          className="about-image"
        />

        <div className="about-text">
          <p>{aboutData.intro}</p>
          <p>{aboutData.technology}</p>
          <p>{aboutData.hobbies}</p>
        </div>
      </div>
    </div>
  )
}

export default About