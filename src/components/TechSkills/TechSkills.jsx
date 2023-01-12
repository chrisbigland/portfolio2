import React from 'react'
import Icon from '../Icon';
import '../../abstracts/globalStyles.scss'

const TechSkills = () => {
  return (
    <div>

<section class="tech-skills">
        <h2 class="tech-skills__title">Technical Skills</h2>
        
        <p class="tech-skills__tech-text">I acquired the below technical skills within the self-paced coding course at _nology, Bristol and am currently seeking opportunities to apply these within a role alongside developing my skill set further.</p>
    
        <div class="tech-skills__icons">
            <div class="tech-skills__skill-icon">
                <i class="fa-brands fa-github fa-4x"></i>
                <span class="tech-skills__text">GIT</span>
            </div>
            <div class="tech-skills__skill-icon">
                <i class="fa-brands fa-html5 fa-4x"></i>
                <span class="tech-skills__text">HTML5</span>
            </div>
            <div class="tech-skills__skill-icon">
                <i class="fa-brands fa-css3-alt fa-4x"></i>
                <span class="tech-skills__text">CSS3</span>
            </div>
            <div class="tech-skills__skill-icon">
                <i class="fa-brands fa-js fa-4x"></i>
                <span class="tech-skills__text">JavaScript</span>
            </div>
            <div class="tech-skills__skill-icon">
                <i class="fa-brands fa-sass fa-4x"></i>
                <span class="tech-skills__text">SCSS</span>
                </div>
            <div class="tech-skills__skill-icon">
                <img src="./images/bem.svg" alt="bem icon"  />
                <span class="tech-skills__text">BEM</span>
            </div>
            <div class="tech-skills__skill-icon">
                <i class="fa-brands fa-react fa-4x"></i>
                <span class="tech-skills__text">React</span>
            </div>
            {/* <!-- <div class="tech-skills__skill-icon">
            <i class="fa-brands fa-java fa-4x"></i>
            <span class="tech-skills__text">Java</span>
            </div> --> */}
            <div class="tech-skills__skill-icon">
                <i class="fab fa-brands fa-node-js fa-4x"></i>
            <span class="tech-skills__text">Node.js</span>
            </div>
        </div>
    </section>
      <Icon />
    </div>
  )
}

export default TechSkills
