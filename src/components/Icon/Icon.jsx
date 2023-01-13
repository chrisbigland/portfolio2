import React from 'react'
import '../../abstracts/globalStyles.scss'
import { DiJsBadge, DiCss3 } from "react-icons/di";


const Icon = (props) => {

  const { icon, name, iconContainerStyles, textStyle } = props;

  return (
    <div>
      <div className={iconContainerStyles}> 
        {icon}
        <span className={textStyle}>{name}</span>
      </div>
    </div>
  );
}

export default Icon
