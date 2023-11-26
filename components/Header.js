import React from "react";
import SearchProduct from "./SearchProduct";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import Menu from "./menubar/Menu";
import LoginLayout from "./layout/LoginLayout";


const Header = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.rightContainer}`}>
          <div className={`${styles.logoContainer}`}>
            <Link href={"/"}>
              <Image
                src="/images/logo.svg"
                width={115}
                height={30}
                alt="لوگو دیجی کالا"
              />
            </Link>
          </div>
          <div className={`${styles.searchBox}`}>
            <SearchProduct />
          </div>
        </div>
        <div className={`${styles.leftContainer}`}>
          <Link href="/users/login" className={`${styles.link}`}>
            <div className={`${styles.logInBox}`}>
              <div className={`${styles.logInBoxIcon}`}>
                <BsBoxArrowInLeft />
              </div>
              ورود | ثبت نام
            </div>
          </Link>
          <span className={`${styles.span}`}> </span>
    
            <Link href="/shoppingCart">
              <div className={`${styles.cartContainer}`}>
               <GrCart size="1.6em" className={`${styles.cartButtonIcon} `} />
                <div className={`${styles.shoppingCartBadge}`}>
                {shoppingCart.totalQuantity}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={`${styles.menuContainer}`}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
