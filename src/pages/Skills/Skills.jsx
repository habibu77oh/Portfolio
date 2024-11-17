import React from 'react'
import './skills.css'
import Frontend from'./frontend'


function Skills() {
  return (
    <div className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My technical level</span>
        <div className="skills__container container grid">
            <Frontend/>
        </div>
    </div>
  )
}

export default Skills