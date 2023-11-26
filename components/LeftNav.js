import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import styles from './LeftNav.module.scss'


const LeftNav = (onClick,disabled) => {
    return (
      <div className={`${styles.nextArrow}`}>
        <IoIosArrowForward
          className={`${styles.nextSvg}`}
          onClick={onClick}
          disabled={disabled}
        />
        </div>
      );
}

export default LeftNav