import React from 'react'
import styles from "./ModalFooter.module.scss"
import {AiOutlineInfoCircle} from "react-icons/ai"
import Link from 'next/link'

const ModalFooter = () => {
  return (
    <div className={`${styles.footerContainer}`}>
       <div className={`${styles.footer}`}>
         <div className={`${styles.footerDetails}`}>
          <Link style={{textDecoration:"none"}} href="/">
             <button  className={`${styles.button}`}>
               افزودن به سبد خرید 
              </button> 
              </Link>
             <div className={`${styles.priceDetails}`}>
               <p className={`${styles.text}`}>مجموع هزینه اشتراک</p>
               <div className={`${styles.price}`}>
                ۷۵،۰۰۰
                <div className={`${styles.priceSvg}`}>تومان</div>  
               </div>
             </div>  
         </div>
         <div className={`${styles.footerText}`}>
            <div className={`${styles.icon}`}><AiOutlineInfoCircle /></div>
         به مبالغ فوق ٪۹ بابت مالیات بر ارزش افزوده اضافه می‌شود.
         </div>
        </div>
</div>
  )
}

export default ModalFooter