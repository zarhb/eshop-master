import React from 'react'
import styles from './EmailBox.module.scss'
import { Field, Form, Formik } from 'formik'


const EmailBox = () => {
  return (
    <Formik>
        <Form className={`${styles.form}`}>
          <div className={`${styles.emailBox}`}>
            <Field className={`${styles.emailInput}`} type="email" name="email" placeholder="ایمیل شما"/>
          </div>
          <button type='submit' className={`${styles.submitButton}`} >ثبت</button>
        </Form>
    </Formik>
  )
}

export default EmailBox