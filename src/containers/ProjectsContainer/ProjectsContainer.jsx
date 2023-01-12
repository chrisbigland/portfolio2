import React from 'react'
import Project from '../../components/Project';
import '../../abstracts/globalStyles.scss'

const ProjectsContainer = () => {
  return (
<>
<div>
      <Project />
      <section class="section-2" >

      <div class="projects__title-case" id="projects">
      <h2 class="projects__title">My Projects</h2></div>


      <div class="projects" >

          <div class="projects__client-project projects__project">
              <span class="projects__project-box"></span>
              <span class="projects__proj-tool">REACT, API</span>
              <span class="projects__proj-sect-title">Cat Facts</span>
              <p class="projects__proj-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Assumenda, odio at perspiciatis, corrupti blanditiis tempore 
                  sint illum laudantium iusto neque molestias quis veniam labore facilis.</p>
               <div class="projects__cod-prev-icons">
                  <a href="#">code <img src="./images/dev-symbol.svg" alt="developer symbol"></img></a>
                  <a href="#">preview <img src="./images/eye-symbol.svg" alt="eye symbol"></img></a>
              </div>
          </div>
          
          <div class="projects__rest-api projects__project">
              <span class="projects__project-box"></span>
              <span class="projects__proj-tool">React</span>
              <span class="projects__proj-sect-title">Ticket Tracker</span>
              <p class="projects__proj-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Assumenda, odio at perspiciatis, corrupti blanditiis tempore 
                  sint illum laudantium iusto neque molestias quis veniam labore facilis.</p>
              <div class="projects__cod-prev-icons">
                  <a href="#">code <img src="./images/dev-symbol.svg" alt="developer symbol"></img></a>
                  <a href="#">preview <img src="./images/eye-symbol.svg" alt="eye symbol"></img></a>
              </div>
          </div>

          <div class="projects__punk-api projects__project">
              <span class="projects__project-box"></span>
              <span class="projects__proj-tool">JAVA</span>
              <span class="projects__proj-sect-title">PUNK API</span>
              <p class="projects__proj-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Assumenda, odio at perspiciatis, corrupti blanditiis tempore 
                  sint illum laudantium iusto neque molestias quis veniam labore facilis.</p>
              <div class="projects__cod-prev-icons">
                  <a href="#">code <img src="./images/dev-symbol.svg" alt="developer symbol"></img></a>
                  <a href="#">preview <img src="./images/eye-symbol.svg" alt="eye symbol"></img></a>
              </div>
          </div>

          <div class="projects__client-project-2 projects__project">
              <span class="projects__project-box"></span>
              <span class="projects__proj-tool">REACT</span>
              <span class="projects__proj-sect-title">Hostile Aliens</span>
              <p class="projects__proj-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Assumenda, odio at perspiciatis, corrupti blanditiis tempore 
                  sint illum laudantium iusto neque molestias quis veniam labore facilis.</p>
              <div class="projects__cod-prev-icons">
                  <a href="#">code <img src="./images/dev-symbol.svg" alt="developer symbol"></img></a>
                  <a href="#">preview <img src="./images/eye-symbol.svg" alt="eye symbol"></img></a>
              </div>
          </div>

          <div class="projects__rest-api-2 projects__project">
              <span class="projects__project-box"></span>
              <span class="projects__proj-tool">JAVA, SPRING BOOT</span>
              <span class="projects__proj-sect-title">Portuguese Pairs Game</span>
              <p class="projects__proj-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Assumenda, odio at perspiciatis, corrupti blanditiis tempore 
                  sint illum laudantium iusto neque molestias quis veniam labore facilis.</p>
              <div class="projects__cod-prev-icons">
                  <a href="#">code <img src="./images/dev-symbol.svg" alt="developer symbol"></img></a>
                  <a href="#">preview <img src="./images/eye-symbol.svg" alt="eye symbol"></img></a>
              </div>
          </div>

          <div class="projects__punk-api-2 projects__project">
              <span class="projects__project-box"></span>
              <span class="projects__proj-tool">REACT</span>
              <span class="projects__proj-sect-title">Morse Code Translator</span>
              <p class="projects__proj-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Assumenda, odio at perspiciatis, corrupti blanditiis tempore 
                  sint illum laudantium iusto neque molestias quis veniam labore facilis.</p>
              <div class="projects__cod-prev-icons">
                  <a href="#">code <img src="./images/dev-symbol.svg" alt="developer symbol"></img></a>
                  <a href="#">preview <img src="./images/eye-symbol.svg" alt="eye symbol"></img></a>
              </div>
          </div>

          <div class="projects__client-project projects__project">
              <span class="projects__project-box"></span>
              <span class="projects__proj-tool">JAVASCRIPT</span>
              <span class="projects__proj-sect-title">Calculator</span>
              <p class="projects__proj-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Assumenda, odio at perspiciatis, corrupti blanditiis tempore 
                  sint illum laudantium iusto neque molestias quis veniam labore facilis.</p>
               <div class="projects__cod-prev-icons">
                  <a href="#">code <img src="./images/dev-symbol.svg" alt="developer symbol"></img></a>
                  <a href="#">preview <img src="./images/eye-symbol.svg" alt="eye symbol"></img></a>
              </div>
          </div>
      </div>
  </section>
  </div>
</>
  )
}

export default ProjectsContainer
