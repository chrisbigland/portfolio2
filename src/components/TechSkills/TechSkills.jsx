import React from 'react'
import Icon from '../Icon';
import styles from './TechSkills.module.scss'
import '../../abstracts/globalStyles.scss'
import bEMIconPath from "../../images/bem.svg"
import { DiJsBadge, DiCss3, DiHtml5, DiGithubBadge, DiSass, DiReact, DiNodejsSmall } from "react-icons/di";

const TechSkills = () => {

  const gitIcon = <DiGithubBadge className={styles.TechSkills_skillIcon} />;
  const hTMLIcon = <DiHtml5 className={styles.TechSkills_skillIcon} />;
  const cSSIcon = <DiCss3 className={styles.TechSkills_skillIcon} />;
  const sCSSIcon = <DiSass className={styles.TechSkills_skillIcon} />
  const jSIcon = <DiJsBadge className={styles.TechSkills_skillIcon} />; //inside icon wrap it in a div and style it as skillIcon
  const bEMIcon = <img src={bEMIconPath} className={styles.TechSkills_skillIcon}></img>
  const reactIcon = <DiReact className={styles.TechSkills_skillIcon} />
  const nodeIcon = <DiNodejsSmall className={styles.TechSkills_skillIcon} />

  const iconContainerStyles = styles.TechSkills_skillIconContainer;
  const iconTextStyle = styles.TechSkills_text;


  return (
<>
    
    <div>
<section className={styles.TechSkills}>

<i class="fa-brands fa-github-square"></i>
        <h2 className={styles.TechSkills_title}>Technical Skills</h2>

        <p className={styles.TechSkills_techText}>I acquired the below technical skills within the self-paced coding course at _nology, Bristol and am currently seeking opportunities to apply these within a role alongside developing my skill set further.</p>
    
        <div className={styles.TechSkills_icons}>

            
      
            <Icon icon={gitIcon} name="GIT" iconContainerStyles={iconContainerStyles} textStyle={iconTextStyle}/>
      
            <Icon icon={hTMLIcon} name="HTML5" iconContainerStyles={iconContainerStyles} textStyle={iconTextStyle}/>

            <Icon icon={cSSIcon} name="CSS3" iconContainerStyles={iconContainerStyles} textStyle={iconTextStyle} />


            <Icon icon={sCSSIcon} name="SCSS" iconContainerStyles={iconContainerStyles} textStyle={iconTextStyle}/>

            <Icon icon={jSIcon} name="JavaScript" iconContainerStyles={iconContainerStyles} textStyle={iconTextStyle}/>


            <Icon icon={bEMIcon} name="BEM" iconContainerStyles={iconContainerStyles} textStyle={iconTextStyle}/>


            <Icon icon={reactIcon} name="React" iconContainerStyles={iconContainerStyles} textStyle={iconTextStyle}/>


            <Icon icon={nodeIcon} name="Node.js" iconContainerStyles={iconContainerStyles} textStyle={iconTextStyle}/>

        </div>
    </section>
      
    </div>
</>
  )
}

export default TechSkills
