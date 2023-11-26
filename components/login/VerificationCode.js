import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GetPhoneNumber from './GetPhoneNumber'
import styles from './VerificationCode.module.scss'
const VerificationCode = (props) => {
    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.logoContainer}`}>
                <Image className={`${styles.logoContainer}`} alt="فروشگاه اینترنتی من" src='/images/logo.svg' width={200} height={35} />
            </div>
            <h3 className={`${styles.title}`}>کد تایید را وارد کنید</h3>
            <h5 className={`${styles.text}`}>کد تایید برای  {props.phoneNumber} ارسال شد</h5>
            <input className={`${styles.verificationCode}`} type="text" />
            <h5 className={`${styles.attentionText}`}>لطفا کادر بالا را خالی نگذارید</h5>
            <div className={`${styles.loginButton}`}><span>تایید</span></div>
            <p className={`${styles.bottomAttention}`}>ورود شما به معنای پذیرش <Link className={`${styles.link}`}  href={'#'}>شرایط فروشگاه </Link>و<Link className={`${styles.link}`} href={'#'}>قوانین حریم خصوصی </Link>است</p>
        </div>
    )
}

export default VerificationCode