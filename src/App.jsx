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

