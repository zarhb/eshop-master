import React from 'react'
import styles from './FooterItems.module.scss'
import Link from 'next/link'
import Image from 'next/image'


const FooterItems = () => {
  return (
    <div className={`${styles.outerContainer}`}>
     <Link className={`${styles.links}`} href="#">
        <div>
            <Image src={"/images/expressDelivery.svg"} width={56} height={56}/>
        </div>
        <p className={`${styles.text}`}>امکان تحویل اکسپرس</p>
     </Link>
     <Link className={`${styles.links}`} href="#">
        <div>
            <Image src={"/images/cashOnDelivery.svg"} width={56} height={56}/>
        </div>
        <p className={`${styles.text}`}>امکان پرداخت در محل</p>
     </Link>
     <Link className={`${styles.links}`} href="#">
        <div>
            <Image src={"/images/support.svg"} width={56} height={56}/>
        </div>
        <p className={`${styles.text}`}> ۷روز هفته، ۲۴ ساعته</p>
     </Link>
     <Link className={`${styles.links}`} href="#">
        <div>
            <Image src={"/images/daysReturn.svg"} width={56} height={56}/>
        </div>
        <p className={`${styles.text}`}> ۷روز ضمانت بازگشت</p>
     </Link>
     <Link className={`${styles.links}`} href="#">
        <div>
            <Image src={"/images/originalProducts.svg"} width={56} height={56}/>
        </div>
        <p className={`${styles.text}`}> ضمانت اصل بودن کالا</p>
     </Link>
     
    </div>
  )
}

export default FooterItems