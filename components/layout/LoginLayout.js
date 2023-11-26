import React from 'react'
import styles from './LoginLayout.module.scss'



const LoginLayout = ({children}) => {
  return (
    <div className={`${styles.mainContainer}`}>
     {children}
    </div>
  )
}

export default LoginLayout