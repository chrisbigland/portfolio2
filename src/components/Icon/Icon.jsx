import React from 'react'
import styles from './Icon.module.scss'
import { DiJsBadge, DiCss3 } from "react-icons/di";


const Icon = (props) => {

  const { icon, name, iconContainerStyles, textStyle } = props;

  return (

      <div className={styles.iconContainerStyles}> 
      <div className={styles.icon}>
        {icon}
      </div>
        <span className={styles.textStyle}>{name}</span>
      </div>
  );
}

export default Icon
