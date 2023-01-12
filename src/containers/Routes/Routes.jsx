import React from 'react'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe'
import TechSkills from '../../components/TechSkills'
import ProjectsContainer from '../ProjectsContainer'

const Routes = () => {
  return (
    <div>
      <AboutMe />
      <Header />
      <TechSkills />
      <ProjectsContainer />
    </div>
  );
}

export default Routes
