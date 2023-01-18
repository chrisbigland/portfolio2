import React from 'react'
import '../../abstracts/globalStyles.scss'
import styles from './AboutMe.module.scss'
import workingImg from '../../images/squiggle.svg'

const AboutMe = () => {
  return (
    <>
      <div>
        <div className={styles.AboutMe} id="about">
          <div className={styles.AboutMe_content}>
            <span className={styles.AboutMe_title}>About Me</span>
            <br />
            <p className={styles.AboutMe_p}>
              My background throughout my career has consistently always had a
              languages element to it. Working abroad, teaching English, leading
              a foreign language customer support team and responding to
              customers in German and Spanish, I've always been fascinated by
              different methods of communication, and that is what initially
              piqued my interest with programming.
            </p>
            <br />
            <p className={styles.AboutMe_p}>
              I'm fairly fresh into the software development world, having
              recently undertaken taken the plunge into a new career by taking a
              front-end focused developer course at _nology in Bristol. The course has been the perfect
              opportunity to apply newly learnt concepts within the above
              projects, breaking down what at first seem like huge problems into
              manageable tasks.
            </p>
            <br />
            <p className={styles.AboutMe_p}>
              Outside of the working world I like to get out into nature and
              travel as much as I can, be it a short hike or an epic adventure
              somewhere. I play saxophone, am learning Brazilian Portuguese and
              have recently taken up longboarding and surfing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe
