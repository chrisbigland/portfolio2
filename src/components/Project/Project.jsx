import React from "react";
import "../../abstracts/globalStyles.scss";
import devSymbol from "../../images/dev-symbol.svg";
import eyeSymbol from "../../images/eye-symbol.svg";
import styles from "./Project.module.scss";

const Project = (props) => {
  const { title, skills, description, image, altImage, codeLink, previewLink } =
    props;

  return (
    <>
      <span className={styles.Projects_projectBox}>
        <img className={styles.Projects_projImg} src={image} alt={altImage} />
      </span>
      <span className={styles.Projects_projTool}>{skills}</span>
      <span className={styles.Projects_projSectTitle}>{title}</span>
      <p className={styles.Projects_projText}>{description}</p>
      <div className={styles.Projects_codPrevIcons}>
        <a className={styles.devSymbStyles} href={codeLink}>
          code&nbsp;<img src={devSymbol} alt="developer symbol"></img>
        </a>
        <a href={previewLink}>
          preview&nbsp;<img src={eyeSymbol} alt="eye symbol"></img>
        </a>
      </div>
    </>
  );
};

export default Project;
