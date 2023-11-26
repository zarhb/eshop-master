import React from 'react'
import styles from './FooterInformation.module.scss'
import WithDigiKala from './WithDigiKala'
import Services from './Services'
import PurchaseGuide from './PurchaseGuide'
import SosialMedia from './SosialMedia'


const FooterInformation = () => {
  return (
    <div className={`${styles.outerContainer}`}>
     <div className={`${styles.informationBox}`}>
        <WithDigiKala />
     </div>
     <div className={`${styles.informationBox}`}><Services /></div>
     <div className={`${styles.informationBox}`}><PurchaseGuide /></div>
     <div className={`${styles.informationBox}`}><SosialMedia /></div>
    </div>
  )
}

export default FooterInformation