import React from 'react'
import styles from './UpBotton.module.scss'
import { FaAngleUp } from "react-icons/fa6";


const UpBotton = () => {
  return (
    <div>
     <button className={`${styles.upBotton}`}>
      <div className={`${styles.innerContainer}`}>
        <span className={`${styles.span}`}>بازگشت به بالا</span>
        <FaAngleUp className={`${styles.angleUp}`}/>
      </div>
     </button>
    </div>
  )
}

export default UpBotton