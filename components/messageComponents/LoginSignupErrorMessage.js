import React from 'react'
import styles from './LoginSignupErrorMessage.module.css'

const LoginSignupErrorMessage = (props) => {
  return (
    <div className={`${styles.outerContainer}`}>
        <p className={`${styles.message}`}>{props.children}</p>
    </div>
  )
}

export default LoginSignupErrorMessage