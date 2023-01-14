import React from 'react'
import '../../abstracts/globalStyles.scss'

const Project = (props) => {
  const { project, projectTitle } = props;
  console.log("Project has been rendered!")

  return (
    <>
    <div>
      Project works!!!
      {/* {project}
      {projectTitle} */}
    </div>
    </>
  )
}

export default Project
