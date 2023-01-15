import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Routes from "./containers/Routes";

const App = () => {
  return (
    <>
      <Nav />
      <Routes />
      <Footer />
    </>
  );
};

export default App;

// to do - check scss to see if everything is nested as it could be.
// add in media screen queries to scss - leaving these till last
// make button reusable component.
// header - look at myphoto scss - check nesting in react.
// at end of project - try removing .module from the file names so I can use BEM naming conventions/nesting etc (also import 'styles')
// move techskills to a container?
// add a footer icon component
// map over project data to make it appear on page and reduce code. 
// could use the icon component for the icons in the footer. Just change the stylings using props :)
// ask coaches to take a look at CV 
// personalise name in top right hand corner
// fix cv download
