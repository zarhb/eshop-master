import Image from "next/image";
import React from "react";
import styles from "./SevenIcons.module.scss";
import Link from "next/link";

const SevenIcons = ({data}) => {
  return (
    <div className={`${styles.mainContainer}`}>
      {
      data.map((item) => {
        return (
          <Link className={`${styles.sevenIconsLink}`} key={item.id} href={`/products/category/${item.url}`}>
            <div className={`${styles.iconContainer}`}>
              <Image alt="seven icons" src={`/images/${item.iconName}`}  height={50} width={50} />
              <label className={`${styles.label}`}>{item.label}</label>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SevenIcons;
