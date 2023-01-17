import React from 'react'
import styles from './Nav.module.scss'
import '../../abstracts/globalStyles.scss'

const Nav = () => {
  return (
  <nav className={styles.Navigation}>
      <div className={styles.Navigation_name}>Chris Bigland</div>
      <div className={styles.Navigation_buttons}>
          <a className={styles.Navigation_button} href="#">Home</a> 
          <a className={styles.Navigation_button} href="#about">About</a>
          <a className={styles.Navigation_button} href="#projects">Projects</a>
          <a href="#" className={`button ${styles.Navigation_button} ${styles.Navigation_button___git}`}>Get in Touch</a>
          {/* do we need the git modifier class?  */}
          {/* button a global style - move? */}
      </div>
  </nav>
  )
}

export default Nav
