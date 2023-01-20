import React from "react";
import Project from "../../components/Project";
import styles from "./ProjectsContainer.module.scss";
import "../../abstracts/globalStyles.scss";

import projects from "../../data/projectsData";

const ProjectsContainer = () => {
  const getProjectJsx = (project) => {
    return (
      
      <div className={styles.Projects_project}>
        <Project
          title={project.title}
          skills={project.skills}
          description={project.description}
          image={project.image}
          altImage={project.altImage}
          codeLink={project.codeLink}
          previewLink={project.previewLink}
        />
      </div>
    );
  };

  return (
    <>

      <section className={styles.sectionTwo}>
        <div className={styles.Projects_titleCase} id="projects">
          <h2 className={styles.Projects_title}>My Projects</h2>
        </div>
        <div className={styles.Projects}>
          {projects.map((person) => {
            return getProjectJsx(person);
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectsContainer;
