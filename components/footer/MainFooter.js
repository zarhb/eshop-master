import React from 'react'
import styles from "./MainFooter.module.scss"
import Image from 'next/image'
import UpBotton from './UpBotton'
import FooterItems from './FooterItems'
import FooterInformation from './FooterInformation'
import FooterApplications from './FooterApplications'


const MainFooter = () => {


  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.container}`}>
       <div className={`${styles.logoContainer}`}>
        <div className={`${styles.logo}`}>
         <Image src={"/images/logoFarsi.svg"} width={115} height={30}/>
        </div>
        <div>
          <UpBotton />
        </div>
       </div>
       <div className={`${styles.contactUs}`}>
       <p className={`${styles.footerPhonenumber}`}>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
         <div className={`${styles.space}`}> |</div>
         <p className={`${styles.text}`}>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
       </div>
       <div> <FooterItems /> </div>
       <div>
        <FooterInformation />
       </div>
       <div>
        <FooterApplications />
       </div>
       <div></div>
       <div></div>
      </div>
    </div>
  )
}

export default MainFooter