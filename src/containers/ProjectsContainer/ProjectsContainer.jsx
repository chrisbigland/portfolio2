import React from "react";
import Project from "../../components/Project";
import styles from "./ProjectsContainer.module.scss";
import "../../abstracts/globalStyles.scss";
import devSymbol from "../../images/dev-symbol.svg";
import eyeSymbol from "../../images/eye-symbol.svg";
import projects from "../../data/projectsData";

const ProjectsContainer = () => {
  // const getProjectJsx = (project) => {

  //    return <Project project={project} projectTitle={project.title}/>
  // };

  // const mappedProjects = projects.map((project) => {
  //   console.log("mapping each individual project, here's its title - "  + project.title)
  //   getProjectJsx(project)
  //   // <div className={styles.prooooject}>
  //   //    <Project project={project} projectTitle={project.title}/>
  //   //   </div>
  // })

  // console.log(mappedProjects)

  // console.log(projects)

  return (
    <>
      <div>
        <div>
          {/* {projects.map((person) => {
          getProjectJsx(person)}
          )}
        {mappedProjects} */}
          {/* <Project /> */}
        </div>
        <section className={styles.sectionTwo}>
          <div className={styles.Projects_titleCase} id="projects">
            <h2 className={styles.Projects_title}>My Projects</h2>
          </div>

          <div className={styles.Projects}>
            {/* map projects inside this div? each one can return a project component - put the relevant data inside*/}
            <div className={styles.Projects_project}>
              {/* <span className={styles.Projects_projectBox}><img className={styles.Projects_projImg} src={require("../../images/Brewdog-API.png")} alt="Punk API Project Screenshot" ></img></span> */}
              <span className={styles.Projects_projTool}>REACT, API</span>
              <span className={styles.Projects_projSectTitle}>PUNK API</span>
              <p className={styles.projects_projText}>
                I used the punk API to display and filter beers according to
                different criteria. I applied knowledge on dynamically fetching
                API data as well as the useEffect React hook to manage
                side-effects.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="https://github.com/chrisbigland/punk-api-ticket-tracker">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="#">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              {/* <span className={styles.Projects_projectBox}><img className={styles.Projects_projImg} src={require("../../images/pairs-game-pic.png")} alt="Pairs Game Project Screenshot" ></img></span> */}
              <span className={styles.Projects_projTool}>JAVASCRIPT</span>
              <span className={styles.Projects_projSectTitle}>
                Portuguese Pairs Game
              </span>
              <p className={styles.projects_projText}>
                A fun yet educational class-based take on the classic pairs card
                game that I developed alongside studying Portuguese myself.
                Includes audio for pronunciation and example sentences for
                context.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="https://github.com/chrisbigland/js-game">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="https://chrisbigland.github.io/js-game/">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}>
                <img
                  className={styles.Projects_projImg}
                  src={require("../../images/morse-code-translator.png")}
                  alt="Morse Code Translator Project Screenshot"
                ></img>
              </span>
              <span className={styles.Projects_projTool}>REACT</span>
              <span className={styles.Projects_projSectTitle}>
                Morse Code Translator
              </span>
              <p className={styles.projects_projText}>
                Translates between regular English and Morse Code with buttons
                to mimic the telegraph sound. In future I intend to incorporate
                functionality to be able to listen to the combined morse code.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="https://github.com/chrisbigland/morse-code-translator">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="https://chrisbigland.github.io/morse-code-translator/">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              {/* <span className={styles.Projects_projectBox}><img className={styles.Projects_projImg} src={require("../../images/alien-invaders-img.png")} alt="Hostile Aliens Project Screenshot" ></img></span> */}
              <span className={styles.Projects_projTool}>REACT, OOP, TDD</span>
              <span className={styles.Projects_projSectTitle}>
                Hostile Aliens!
              </span>
              <p className={styles.projects_projText}>
                I adopted an object-oriented programming and TDD approach to
                create a basic alien invaders style 'game'. I focused on writing
                pure functions to keep them testable. The next step will be to
                add alien 'fire' functionality so the player can lose points.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="https://github.com/chrisbigland/alien-invaders-game">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="#">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}>
                <img
                  className={styles.Projects_projImg}
                  src={require("../../images/cat-facts-pic.png")}
                  alt="Cat Facts Challenge Screenshot"
                ></img>
              </span>
              <span className={styles.Projects_projTool}>REACT, API</span>
              <span className={styles.Projects_projSectTitle}>
                Cat Facts API Challenge
              </span>
              <p className={styles.projects_projText}>
                A challenge I completed to apply recent learning on interacting
                with APIs in React and using asynchronous functions to handle
                promises. The cat fact API data is displayed on the page or
                individually at random each time a user clicks.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="https://github.com/chrisbigland/cat-facts">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="#">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}>
                <img
                  className={styles.Projects_projImg}
                  src={require("../../images/ticket-tracker.png")}
                  alt="Ticket Tracker Challenge Screenshot"
                ></img>
              </span>
              <span className={styles.Projects_projTool}>React</span>
              <span className={styles.Projects_projSectTitle}>
                Ticket Tracker Challenge
              </span>
              <p className={styles.projects_projText}>
                A simple tracker for keeping tally of how many tickets have been
                achieved. I used state to manage a top 3 performers feature,
                which dynamically renders as the scores change.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="https://github.com/chrisbigland/ticket-tracker">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="#">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}>
                <img
                  className={styles.Projects_projImg}
                  src={require("../../images/calculator.png")}
                  alt="Calculator Project Screenshot"
                ></img>
              </span>
              <span className={styles.Projects_projTool}>JAVASCRIPT</span>
              <span className={styles.Projects_projSectTitle}>Calculator</span>
              <p className={styles.projects_projText}>
                My first JavaScript project built utilising a variety of
                different functions and manipulating the DOM to perform and
                display basic calculations.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="https://github.com/chrisbigland/calculator">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="https://chrisbigland.github.io/calculator/">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsContainer;
