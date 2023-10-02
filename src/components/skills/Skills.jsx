import React from "react"
import "./skills.css"
import Backend from './Backend'
import Frontend from './Frontend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 data-aos="fade-up"
            data-aos-duration="3000" 
            className="section__title">Skills</h2>
        <span data-aos="fade-up"
              data-aos-duration="3000" 
              className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills