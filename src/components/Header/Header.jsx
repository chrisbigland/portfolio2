import React from "react";
import styles from "./Header.module.scss";
import "../../abstracts/globalStyles.scss";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.Header_content}>
        <h1 className={styles.Header_mainHeading}>
          <span
            className={`${styles.Header_mainHeading___name} ${styles.text}`}
          >
            Hi, I'm Chris!
          </span>
          <span className={styles.Header_subHeading}>
            A <span className="underline">Junior Software Developer</span> based
            in the UK.
          </span>
        </h1>
        <a href="#projects" className={`button ${styles.Header_workButton}`}>
          Take a look at my work
        </a>
        <h1><i class="fab fa-js"></i></h1>
      </div>
      <div className={styles.Header_myPhoto}>
        <img
          src={require("../../images/me.jpeg")}
          alt="photo of Chris Bigland"
          className={styles.Header_myPic}
        ></img>
        {/* <!-- <img class="header__img-circle" src="./images/circle.svg">     
        <img class="header__img-squig" src="./images/squiggle.svg"> --> */}
      </div>
    </section>
  );
};

export default Header;
