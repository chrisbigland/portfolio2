import React from "react";
import Icon from "../Icon";
import styles from "./TechSkills.module.scss";
import "../../abstracts/globalStyles.scss";
import bEMIconPath from "../../images/bem.svg";
import {
  DiJsBadge,
  DiCss3,
  DiHtml5,
  DiGithubBadge,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";
import { SiSass } from "react-icons/si";

const TechSkills = () => {
  const gitIcon = <DiGithubBadge className={styles.TechSkills_skillIcon} />;
  const hTMLIcon = <DiHtml5 className={styles.TechSkills_skillIcon} />;
  const cSSIcon = <DiCss3 className={styles.TechSkills_skillIcon} />;
  const sCSSIcon = <SiSass className={styles.TechSkills_skillIcon} />;
  const jSIcon = <DiJsBadge className={styles.TechSkills_skillIcon} />; //inside icon wrap it in a div and style it as skillIcon
  const bEMIcon = (
    <img src={bEMIconPath} className={styles.TechSkills_skillIcon}></img>
  );
  const reactIcon = <DiReact className={styles.TechSkills_skillIcon} />;
  const nodeIcon = <DiNodejsSmall className={styles.TechSkills_skillIcon} />;

  const iconTextStyle = styles.TechSkills_iconText;

  return (
    <>
      <div>
        <section className={styles.TechSkills}>
          <i class="fa-brands fa-github-square"></i>
          <h2 className={styles.TechSkills_title}>Technical Skills</h2>

          <p className={styles.TechSkills_description}>
            I acquired the below technical skills within the self-paced coding
            course at _nology, Bristol and am currently seeking opportunities to
            apply these within a role alongside developing my skill set further.
          </p>

          <div className={styles.TechSkills_icons}>
            <Icon
              icon={gitIcon}
              name="GIT"
            />

            <Icon
              icon={hTMLIcon}
              name="HTML5"
            />

            <Icon
              icon={cSSIcon}
              name="CSS3"
            />

            <Icon
              icon={sCSSIcon}
              name="SCSS"
            />

            <Icon
              icon={jSIcon}
              name="JavaScript"
            />

            <Icon
              icon={bEMIcon}
              name="BEM"
            />

            <Icon
              icon={reactIcon}
              name="React"
            />

            <Icon
              icon={nodeIcon}
              name="Node.js"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default TechSkills;
