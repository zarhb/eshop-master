import React from 'react'
import styles from './EmptyShoppingCart.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { FaAngleLeft } from "react-icons/fa";


const EmptyShoppingCart = () => {
  return (
     <div className={`${styles.outerContainer}`}>
        <div className={`${styles.rightContainer}`}>
         <div className={`${styles.emptyCartContainer}`}>
            <Image src="/images/emptyCart.svg" width={200} height={200}/>
         </div>
         <div><p className={`${styles.emptyText}`}>سبد خرید شما خالی است!</p></div>
         <div><p className={`${styles.extraText}`}>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p></div>
        </div>
        <aside className={`${styles.leftContainer}`}>
           <div className={`${styles.accountContainer}`}>
             <Link href="/users/login" className={`${styles.accountLink}`}>
              <div className={`${styles.accountIconContainer}`}> 
              <div className={`${styles.boxArrow}`}> <BsBoxArrowInLeft className={`${styles.boxArrowIcon}`}></BsBoxArrowInLeft></div>
              <p className={`${styles.boxArrowText}`}>ورورد به حساب کاربری</p>
              <div className={`${styles.angleLeft}`}><FaAngleLeft className={`${styles.angleLeftIcon}`}/></div>
              </div>
              <div className={`${styles.box}`}>برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید وارد شوید.</div>
             </Link>
           </div>
        </aside>
    </div>
    
  )
}

export default EmptyShoppingCart