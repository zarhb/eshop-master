import React from 'react'
import styles from './Login.module.css'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Image from 'next/image'
import loginSignupErrorMessage from '@/components/messageComponents/loginSignupErrorMessage'




const Login = () => {

    const validationSchema = Yup.object({
        username: Yup.string().required('شماره موبایل خود را وارد نمایید'),
        password: Yup.string().required("رمز عبور را وارد نمایید")
    })

    const formFields = {
        username: '',
        password: ''
    }

    const submitHandler = (values) => {
        console.log(values)
    }


    return (
        <div className={`${styles.outerContainer}`}>
            <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={validationSchema} validateOnChange={false} validateOnBlur={false}>
                <Form>
                    <div className={`${styles.fieldsContainer}`}>
                        <Image src="/images/logo.svg" width={150} height={150} />
                        <Field className={`${styles.field}`} type="text" name="username" placeholder="شماره موبایل" />
                        <ErrorMessage name="username" component={loginSignupErrorMessage} />
                        <Field className={`${styles.field}`} type="password" name="password" placeholder="رمز عبور" />
                        <ErrorMessage name="password" component={loginSignupErrorMessage} />
                        <button type='submit' className={`${styles.loginButton}  ${styles.filed}`}>ورود</button>
                    </div>
                </Form>
            </Formik>
        </div>

    )
}

export default Login