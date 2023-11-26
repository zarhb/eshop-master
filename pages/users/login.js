import React from 'react'
import styles from './login.module.scss'
import GetPhoneNumber from '@/components/login/GetPhoneNumber'
import LoginLayout from '@/components/layout/LoginLayout'


const Login = () => {


  return ( 
    <div className={`${styles.mainContainer}`}>
      <GetPhoneNumber />
    </div>
  )
}

Login.getLayout = function getLayout(login) {
  return (
      <LoginLayout>{login}</LoginLayout>
  )
}

export default Login



