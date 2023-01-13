import React from 'react'
import '../../abstracts/globalStyles.scss'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <span className={styles.Footer_content}>christopherbigland@gmail.com</span>
        <span className={styles.Footer_content}>All Rights Reserved. 2022.</span>
        <div className={styles.Footer_icons}>
            <a className={styles.Footer_link} href="#"><img className={styles.Footer_contentIcon} src="./images/cv-icon.svg" alt="CV icon"></img></a>
            <a className={styles.Footer_link} href="#"><img className={styles.Footer_contentIcon} src="./images/github-icon.svg" alt="GitHub icon"></img></a>
            <a className={styles.Footer_link} href="#"><img className={styles.Footer_contentIcon} src="./images/linkedin-icon.svg" alt="LinkedIn icon"></img></a>
        </div>
    </div>
  )
}

export default Footer
