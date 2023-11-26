import React from 'react'
import styles from './SosialMedia.module.scss'
import SosialMediaIcons from './SosialMediaIcons'
import EmailBox from './EmailBox'

const SosialMedia = () => {
  return (
    <div>
    <div className={`${styles.sosialMediaContainer}`}>
        <h4 className={`${styles.title}`}>همراه ما باشید!</h4>
        <div className={`${styles.sosialMediaIcons}`}>
            <SosialMediaIcons />
        </div>
    </div>
    <div className={`${styles.emailContainer}`}>
    <h4 className={`${styles.title}`}>با ثبت ایمیل، از جدیدترین تخفیف ها با خبر شوید</h4>
    <div className={`${styles.emailBox}`}><EmailBox /></div>
    </div>
    </div>
  )
}

export default SosialMedia