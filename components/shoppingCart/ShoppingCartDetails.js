import React from 'react'
import styles from './ShoppingCartDetails.module.scss'
import { AiOutlineMore } from "react-icons/ai";
import Image from 'next/image';
import ShoppingCartCounter from './ShoppingCartCounter';
import { useSelector } from 'react-redux';

const ShoppingCartDetails = ({product}) => {
const shoppingCartItems = useSelector((state)=>state.shoppingCart.items);

  return (
    <div className={`${styles.outerContainer}`}>
     <div className={`${styles.topContainer}`}>
     <p className={`${styles.cart}`}>سبد خرید شما</p>
     <button type='button' className={`${styles.button}`}>
      <AiOutlineMore className={`${styles.icon}`}/>
     </button>
     </div>
     {/* <div className={`${styles.product}`}><span className={`${styles.span}`}>۱ کالا</span></div> */}
     <div className={`${styles.detailsContainer}`}>
     <div className={`${styles.rightContainer}`}>
        <div className={`${styles.productContainer}`}>
          <Image src={product.indexImageUrl} width={150} height={150}/>
        </div>
         <div className={`${styles.counterContainer}`}>
            <ShoppingCartCounter
            // count={shoppingCartItems.find((item)=>item.id===product.id).count}
             productId={product.id}/>
         </div>
     </div>  
      <div className={`${styles.leftContainer}`}>
        <h3 className={`${styles.productName}`}>{product.name}</h3>
        <div className={`${styles.productPrice}`}>
       {
        product.priceWithDiscount === 0 
        ?`${product.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان `
         :`${product.priceWithDiscount
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان `
        }
        </div>
     </div>
     </div>
    </div>
  )
}

export default ShoppingCartDetails