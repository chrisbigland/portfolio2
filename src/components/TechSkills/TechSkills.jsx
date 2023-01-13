import React from 'react'
import Icon from '../Icon';
import styles from './TechSkills.module.scss'
import '../../abstracts/globalStyles.scss'
import jsIcon from "../../images/js.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { "fab fa-js" } from '@fortawesome/free-solid-svg-icons'

const TechSkills = () => {

    // const element = <FontAwesomeIcon icon="fab fa-js" />


 
 


  return (
    <div>
<section className={styles.TechSkills}>

<i class="fa-brands fa-github-square"></i>
        <h2 className={styles.TechSkills_title}>Technical Skills</h2>

        <p className={styles.TechSkills_techText}>I acquired the below technical skills within the self-paced coding course at _nology, Bristol and am currently seeking opportunities to apply these within a role alongside developing my skill set further.</p>
    
        <div className={styles.TechSkills_icons}>
            <div className={styles.TechSkills_skillIcon}>
                <i className="fa-brands fa-github fa-4x"></i>
                <span className={styles.TechSkills_text}>GIT</span>
            </div>
            <div className={styles.TechSkills_skillIcon}>
                <i className="fa-brands fa-html5 fa-4x"></i>
                <span className={styles.TechSkills_text}>HTML5</span>
            </div>
            <div className={styles.TechSkills_skillIcon}>
                <i className="fa-brands fa-css3-alt fa-4x"></i>
                <span className={styles.TechSkills_text}>CSS3</span>
            </div>
            <div className={styles.TechSkills_skillIcon}>
                <i className="fa-brands fa-js fa-4x"></i>
                <img className={`${styles.jsIcon} faBrands`} src={jsIcon} alt="javascript icon"></img>
                <span className={styles.TechSkills_text}>JavaScript</span>
            </div>
            <div className={styles.TechSkills_skillIcon}>
                <i className="fa-brands fa-sass fa-4x"></i>
                <span className={styles.TechSkills_text}>SCSS</span>
                </div>
            <div className={styles.TechSkills_skillIcon}>
                <img src="./images/bem.svg" alt="bem icon"  />
                <span className={styles.TechSkills_text}>BEM</span>
            </div>
            <div className={styles.TechSkills_skillIcon}>
                <i className="fa-brands fa-react fa-4x"></i>
                <span className={styles.TechSkills_text}>React</span>
            </div>
            <div className={styles.TechSkills_skillIcon}>
                <i className="fab fa-brands fa-node-js fa-4x"></i>
            <span className={styles.TechSkills_text}>Node.js</span>
            </div>
        </div>
    </section>
      <Icon />
    </div>
  )
}

export default TechSkills
