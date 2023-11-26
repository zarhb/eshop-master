import React from 'react'
import styles from './PurchaseGuide.module.scss'
import Link from 'next/link'

const PurchaseGuide = () => {
  return (
    <div>
     <p className={`${styles.title}`}> راهنمای خرید از دیجی کالا</p>
     <Link href="#" className={`${styles.items}`}> نحوه ثبت سفارش</Link>
     <Link href="#" className={`${styles.items}`}> رویه ارسال سفارش</Link>
     <Link href="#" className={`${styles.items}`}>  شیوه های پرداخت</Link>
    </div>
  )
}

export default PurchaseGuide