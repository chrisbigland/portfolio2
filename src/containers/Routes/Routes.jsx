import React from 'react'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe'
import TechSkills from '../../components/TechSkills'
import ProjectsContainer from '../ProjectsContainer'
import '../../abstracts/globalStyles.scss'

const Routes = () => {
  return (
    <div>
      <Header />
      <TechSkills />
      <ProjectsContainer />
      <AboutMe />
    </div>
  );
}

export default Routes
