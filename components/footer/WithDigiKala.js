import React from 'react'
import styles from './WithDigiKala.module.scss'
import Link from 'next/link'


const WithDigiKala = () => {
  return (
    <div>
     <p className={`${styles.title}`}>با دیجی کالا</p>
     <Link href="#" className={`${styles.items}`}>اتاق خبر دیجی کالا</Link>
     <Link href="#" className={`${styles.items}`}>فروش در دیجی کالا</Link>
     <Link href="#" className={`${styles.items}`}>فرصت های شغلی</Link>
     <Link href="#" className={`${styles.items}`}>گزارش تخلف در دیجی کالا</Link>
     <Link href="#" className={`${styles.items}`}>تماس با دیجی کالا</Link>
     <Link href="#" className={`${styles.items}`}>درباره دیجی کالا</Link>
    </div>
  )
}

export default WithDigiKala