import React from 'react'
import styles from './Menu.module.scss'
import {BsBasket, BsList} from 'react-icons/bs'
import { AiOutlineFire } from 'react-icons/ai'
import {CiPercent} from 'react-icons/ci'
import {CgTag} from 'react-icons/cg'
import {TbGiftCard} from 'react-icons/tb'
import Link from 'next/link'
import {HiOutlineLocationMarker} from 'react-icons/hi'
const Menu = () => {


  return (
    <nav className={`${styles.menuContainer}`}>
      <div className={`${styles.mainContainer}`}>
       <div className={`${styles.rightMenu}`}>
        <div className={`${styles.categoryMenu}`}>
             <span className={`${styles.icon}`}> <BsList /> </span>
             <span className={`${styles.text}`}>دسته بندی کالاها</span>
        </div>
        <span className={`${styles.span}`}></span>
        <div className={`${styles.itemsMenu}`}>
         <div className={`${styles.items}`}>
            <Link href={"#"} className={`${styles.link}`}>
            <span className={`${styles.icons}`}><CiPercent /> </span>
            <span> شگفت انگیزها </span>
            </Link>
        </div>
        <div className={`${styles.items}`}>
        <Link className={`${styles.link}`} href={"#"}>
          <span className={`${styles.icons}`}> <BsBasket /> </span>
          <span> سوپر مارکت</span>
        </Link>
        </div>
        <div className={`${styles.items}`}>
        <Link className={`${styles.link}`} href={"#"}>
            <span className={`${styles.icons}`}><TbGiftCard /> </span>
            <span> کارت هدیه</span>
            </Link>
        </div>
        <div className={`${styles.items}`}>
        <Link className={`${styles.link}`} href={"#"}>
            <span className={`${styles.icons}`}><AiOutlineFire /> </span>
            <span> پرفروش ترین ها </span>
            </Link>
        </div>
        <div lassName={`${styles.items}`}>
        <Link className={`${styles.link}`} href={"#"}>
             <span className={`${styles.icons}`}><CgTag /> </span>
            <span> تخفیف ها و پیشنهادها </span>
         </Link>
        </div>
        </div>
        <span className={`${styles.span}`}></span>
        <div className={`${styles.endMenu}`} >
        <div lassName={`${styles.items}`}>
        <Link className={`${styles.link}`} href={"#"}>
            <span className={`${styles.end}`}>سوالی دارید؟</span>
         </Link>
        </div> 
        <div lassName={`${styles.items}`}>
          <Link className={`${styles.link}`} href={"#"}>
             <span className={`${styles.end}`}>در دیجی کالا بفروشید!</span>
           </Link>
           </div> 
        
          </div>
        </div>
         <div className={`${styles.leftMenu}`}>
           <div className={`${styles.items}`}>
          <span className={`${styles.icon}`}><HiOutlineLocationMarker /></span> 
          <span className={`${styles.town}`}> لطفا شهر خود را انتخاب کنید </span> 
          </div>
        </div>
        </div> 
    </nav>
  )
}

export default Menu