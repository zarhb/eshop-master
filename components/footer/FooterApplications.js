import React from 'react'
import styles from './FooterApplications.module.scss'
import Image from 'next/image'
import Link from 'next/link'



const FooterApplications = () => {
  return (
    <div className={`${styles.outerContainer}`} >
      <div className={`${styles.footerLogo}`}>
        <Image src="/images/footerlogo2.png" width={44} height={44}/>
        <div className={`${styles.download}`}> دانلود اپلیکیشن دیجی‌کالا</div>
      </div>
      <div className={`${styles.downloadAppsContainer}`}>
        <div className={`${styles.downloadApps}`}>
        <Link href="#" className={`${styles.appsLogo}`}>
          <Image src="/images/bazzarButton.svg" width={142} height={44} objectFit='contain'/>
        </Link>
        <Link href="#" className={`${styles.appsLogo}`}>
          <Image src="/images/myketButton.svg" width={142} height={44} objectFit='contain'/>
        </Link>
        <Link href="#" className={`${styles.appsLogo}`}>
          <Image src="/images/sibAppButton.svg" width={142} height={44} objectFit='contain'/>
        </Link>
        </div>
        {/* <Link></Link> */}
      </div>
    </div>
  )
}

export default FooterApplications