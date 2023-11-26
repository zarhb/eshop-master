import React, { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import styles from './DigiPlus.module.scss'
import { iranSansWeb } from '../layout/Layout';
import DigiModal from '../modal/DigiModal';
import Image from 'next/image';



const DigiPlus = () => {

const[showDeletModal,setShowDeletModal] = useState(false);


  return (
    <div className={`${styles.outerContainer}`}>
     <div className={`${styles.rightContainer}`}>
       <div className={`${styles.rightItems}`}>
        <Image src={"/images/digiplus.svg"} width={93} height={24}/> 
        </div> 
        <div className={`${styles.rightItems}`}>
        <p className={`${styles.text}`}>خدمات ویژه با اشتراک دیجی‌پلاس</p>
        </div> 
       <div className={`${styles.rightItems}`}>
        <button className={`${styles.button}`} onClick={()=>setShowDeletModal(true)}>
            دریافت این خدمات ویژه 
            <div className={`${styles.leftIcon}`}>
                <FaAngleLeft />
            </div>  
        </button>
        <DigiModal show={showDeletModal} onHide={()=>setShowDeletModal(false)}/>  
        </div> 
       
     </div>

     <div className={`${styles.leftContainer}`}>
      <div className={`${styles.leftItemsContainer}`}>
         <ul className={`${styles.leftList}`} >
          <li className={`${styles.leftListText}`}>ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه اشتراک)</li>
          <li className={`${styles.leftListText}`}>مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای بهداشتی)</li>
          <li className={`${styles.leftListText}`}>امکان ارسال فوری بعضی از کالاها ( رایگان )</li>
         </ul>
      </div>
       <div className={`${styles.leftImage}`}>
        <Image src={"/images/digiplus-pattern.svg"} width={200} height={150}/>
      </div>

     </div>  
    </div>
  )
}

export default DigiPlus