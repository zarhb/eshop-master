import React from 'react'
import styles from './Services.module.scss'
import Link from 'next/link'


const Services = () => {
  return (
    <div>
     <p className={`${styles.title}`}>خدمات مشتریان</p>
     <Link href="#" className={`${styles.items}`}>پاسخ به پرسش های متداول</Link>
     <Link href="#" className={`${styles.items}`}> رویه های بازگرداندن کالا</Link>
     <Link href="#" className={`${styles.items}`}> شرایط استفاده</Link>
     <Link href="#" className={`${styles.items}`}>حریم خصوصی</Link>
     <Link href="#" className={`${styles.items}`}> گزارش باگ</Link>
    </div>
  )
}

export default Services