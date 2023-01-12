import React from 'react'
import '../../abstracts/globalStyles.scss'

const Footer = () => {
  return (
    <div class="footer">
        <span class="footer__content">christopherbigland@gmail.com</span>
        <span class="footer__content">All Rights Reserved. 2022.</span>
        <div class="footer__icons">
            <a class="footer__link" href="#"><img class="footer__content-icon" src="./images/cv-icon.svg" alt="CV icon"></img></a>
            <a class="footer__link" href="#"><img class="footer__content-icon" src="./images/github-icon.svg" alt="GitHub icon"></img></a>
            <a class="footer__link" href="#"><img class="footer__content-icon" src="./images/linkedin-icon.svg" alt="LinkedIn icon"></img></a>
        </div>
    </div>
  )
}

export default Footer
