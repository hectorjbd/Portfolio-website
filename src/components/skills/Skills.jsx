import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Data from './Data'
import Civil from './Civil'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
       <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span> 

      <div className="skills__container container grid">
        <Civil />
        <Frontend />
        <Data />
      </div>
    </section>
  )
}

export default Skills