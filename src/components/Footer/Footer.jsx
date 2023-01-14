import React from 'react'
import '../../abstracts/globalStyles.scss'
import styles from './Footer.module.scss'
import cVIcon from '../../images/cv-icon.svg'
import gitIcon from '../../images/github-icon.svg'
import linkedInIcon from '../../images/linkedin-icon.svg'

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <span className={styles.Footer_content}>christopherbigland@gmail.com</span>
        <span className={styles.Footer_content}>All Rights Reserved. 2022.</span>
        <div className={styles.Footer_icons}>
            <a className={styles.Footer_link} href="#"><img className={styles.Footer_contentIcon} src={cVIcon} alt="CV icon"></img></a>
            <a className={styles.Footer_link} href="#"><img className={styles.Footer_contentIcon} src={gitIcon} alt="GitHub icon"></img></a>
            <a className={styles.Footer_link} href="#"><img className={styles.Footer_contentIcon} src={linkedInIcon} alt="LinkedIn icon"></img></a>
        </div>
    </div>
  )
}

export default Footer
