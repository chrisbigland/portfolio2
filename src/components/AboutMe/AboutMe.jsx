import React from 'react'
import '../../abstracts/globalStyles.scss'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
  return (
    <>
    <div>
      <div className={styles.AboutMe} id="about">
        <div className={styles.AboutMe_content}>
            <span className={styles.AboutMe_title}>About Me</span>
      
            <p className={styles.AboutMe_p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet impedit minus 
                voluptatum? Repellat a perferendis animi accusantium nemo qui, ipsum minima sit et illum 
                ratione eius esse? Et cumque illum optio doloremque sit laudantium commodi? Tempora, 
                veritatis, voluptatibus quos blanditiis in eius praesentium totam velit ab dolorem quis. 
                Similique consequatur provident repellat numquam odio in animi nam voluptatem quae!
            </p>

            <p className={styles.AboutMe_p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet impedit minus 
                voluptatum? Repellat a perferendis animi accusantium nemo qui, ipsum minima sit et illum 
                ratione eius esse? Et cumque illum optio doloremque sit laudantium commodi? Tempora, 
                veritatis, voluptatibus quos blanditiis in eius praesentium totam velit ab dolorem quis. 
                Similique consequatur provident repellat numquam odio in animi nam voluptatem quae!
            </p>

            {/**check out where the cartoon image is */}
            </div>
        </div>
    </div>
  </>
  )
}

export default AboutMe
