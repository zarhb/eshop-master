import React, { useState } from 'react'
import styles from './SideShoppingCart.module.scss'
import { useSelector } from 'react-redux'
import Link from 'next/link';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import Image from 'next/image';


const SideShoppingCart = () => {
const shoppingCart = useSelector(state=>state.shoppingCart);

  return (
    <div className={`${styles.outerContainer}`}>
     <div className={`${styles.totalPrice}`}>
        <div className={`${styles.text}`}>
            قیمت کالاها  
         </div>
         <div className={`${styles.price}`}>{
         shoppingCart.totalPrice.toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
         }
          <span>تومان</span>
         </div>
        </div>
        <div className={`${styles.totalPrice}`}>
            <div className={`${styles.text}`}>
            جمع سبد خرید
         </div>
         <div className={`${styles.price}`}>
          {
         shoppingCart.totalPaid.toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
         }
          <span>تومان</span>
         </div>
        </div>
        <div className={`${styles.submitButton}`}>
          <Link href="#">
           <button className={`${styles.button}`} type='submit'>ثبت سفارش</button>
          </Link>   
        </div>
        <div className={`${styles.footerContainer}`}>
          <div className={`${styles.footer}`}>
           <div className={`${styles.right}`}>
            <Image src="/images/club-point.svg" width={16} height={16}/>
             <span>دیجی کلاب</span>
             <span className={`${styles.footerIcon}`}><AiOutlineInfoCircle /></span>
          </div>
          <div className={`${styles.left}`}>
          <span> ۱۵۰ </span>
          <span className={`${styles.span}`}> امتیاز</span>
          </div>
          </div>
         
        </div>
    </div>
  )
}

export default SideShoppingCart