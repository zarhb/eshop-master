import Link from 'next/link'
import React from 'react'
import styles from './SosialMediaIcons.module.scss'
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

const SosialMediaIcons = () => {
  return (
    <div>
        <Link href="#" className={`${styles.icons}`}><BsInstagram /></Link>
        <Link href="#" className={`${styles.icons}`}><AiOutlineTwitter /></Link>
        <Link href="#" className={`${styles.icons}`}><AiFillLinkedin /></Link>
        <Link href="#" className={`${styles.icons}`}><FaTelegram /></Link>
    </div>
  )
}

export default SosialMediaIcons