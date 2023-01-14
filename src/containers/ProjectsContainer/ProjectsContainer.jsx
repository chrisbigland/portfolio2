import React from 'react'
import Project from '../../components/Project';
import styles from './ProjectsContainer.module.scss'
import '../../abstracts/globalStyles.scss'
import devSymbol from '../../images/dev-symbol.svg'
import eyeSymbol from '../../images/eye-symbol.svg'

const ProjectsContainer = () => {
  return (
    <>
      <div>
        <Project />
        <section className={styles.sectionTwo}>
          <div className={styles.Projects_titleCase} id="projects">
            <h2 className={styles.Projects_title}>My Projects</h2>
          </div>

          <div className={styles.Projects}> 
          {/* map projects inside this div? each one can return a project component - put the relevant data inside*/}
            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}></span>
              <span className={styles.Projects_projTool}>REACT, API</span>
              <span className={styles.Projects_projSectTitle}>PUNK API</span>
              <p className={styles.projects_projText}>
              Used the punk API to display and filter beers according to different criteria. I applied knowledge on dynamically fetching API data as well as the useEffect React hook to manage side-effects.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="#">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="#">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}></span>
              <span className={styles.Projects_projTool}>JAVASCRIPT</span>
              <span className={styles.Projects_projSectTitle}>
                Portuguese Pairs Game
              </span>
              <p className={styles.projects_projText}>
                A fun yet educational take on the classic pairs card game that I developed alongside studying Portuguese myself. Includes audio for pronunciation and example sentences for context. 
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="#">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="https://chrisbigland.github.io/js-game/">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}></span>
              <span className={styles.Projects_projTool}>REACT</span>
              <span className={styles.Projects_projSectTitle}>
                Morse Code Translator
              </span>
              <p className={styles.projects_projText}>
                Translates between regular English and Morse Code with buttons to mimic the telegraph sound. In future I intend to incorporate functionality to be able to listen to the combined morse code. 
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="#">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="https://chrisbigland.github.io/morse-code-translator/">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}></span>
              <span className={styles.Projects_projTool}>REACT</span>
              <span className={styles.Projects_projSectTitle}>
                Hostile Aliens
              </span>
              <p className={styles.projects_projText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, odio at perspiciatis, corrupti blanditiis tempore
                sint illum laudantium iusto neque molestias quis veniam labore
                facilis.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="#">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="#">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}></span>
              <span className={styles.Projects_projTool}>REACT, API</span>
              <span className={styles.Projects_projSectTitle}>Cat Facts</span>
              <p className={styles.projects_projText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, odio at perspiciatis, corrupti blanditiis tempore
                sint illum laudantium iusto neque molestias quis veniam labore
                facilis.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="#">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="#">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}></span>
              <span className={styles.Projects_projTool}>React</span>
              <span className={styles.Projects_projSectTitle}>
                Ticket Tracker
              </span>
              <p className={styles.projects_projText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, odio at perspiciatis, corrupti blanditiis tempore
                sint illum laudantium iusto neque molestias quis veniam labore
                facilis.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="#">
                  code <img src={devSymbol} alt="developer symbol"></img>
                </a>
                <a href="#">
                  preview <img src={eyeSymbol} alt="eye symbol"></img>
                </a>
              </div>
            </div>

            <div className={styles.Projects_project}>
              <span className={styles.Projects_projectBox}></span>
              <span className={styles.Projects_projTool}>JAVASCRIPT</span>
              <span className={styles.Projects_projSectTitle}>Calculator</span>
              <p className={styles.projects_projText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, odio at perspiciatis, corrupti blanditiis tempore
                sint illum laudantium iusto neque molestias quis veniam labore
                facilis.
              </p>
              <div className={styles.Projects_codPrevIcons}>
                <a href="#">
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
}

export default ProjectsContainer
