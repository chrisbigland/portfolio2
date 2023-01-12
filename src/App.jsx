import styles from './App.module.scss';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Icon from './components/Icon';
import Nav from './components/Nav';
import Projects from './components/Projects';
import TechSkills from './components/TechSkills';
import ProjectsContainer from './containers/ProjectsContainer';
import Routes from './containers/Routes';

const App = () => {
  return (
    <>
    <AboutMe /> 
    <Footer />  
    <Header />  
    <Icon />
    <Nav />
    <Projects />  
    <TechSkills />
    <ProjectsContainer />
    <Routes />
   <p>App Works...</p>
    </>
   
  );
}

export default App;
