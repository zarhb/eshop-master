import React from 'react'
import Carusel from './Carusel'
import Card from './Card'
import styles from './IncredibleOffers.module.scss'
import Image from 'next/image'
import { FaAngleLeft } from "react-icons/fa6";
import Link from 'next/link'


const IncredibleOffers = (props) => {

 const data= props.data.map((item) => (
    <Card key={item.id} product = {item} />
  ))
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.caruselContainer}`}>
      <Carusel cardsCount={5} data={data}/>
      </div>
      <div className={`${styles.rightContainer}`}>
      <Link href="#" className={`${styles.link}`}>
       <Image src="/images/amazingTypo.png" width={80} height={80}/>
       <Image src="/images/box.png" width={80} height={80}/>
       <label className={`${styles.label}`}> <FaAngleLeft /> مشاهده همه </label>
       </Link>
      </div> 
    </div>
  )
}

export default IncredibleOffers