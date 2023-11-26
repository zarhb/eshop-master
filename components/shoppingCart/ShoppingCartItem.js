import React from 'react'
import styles from './ShoppingCartItem.module.scss'
import DigiPlus from './DigiPlus'
import ShoppingCartDetails from './ShoppingCartDetails'
import { useSelector } from 'react-redux'
import SideShoppingCart from './SideShoppingCart'
import EmptyShoppingCart from './EmptyShoppingCart'


const ShoppingCartItem = () => {
  const shoppingCart = useSelector(state=>state.shoppingCart);

  {
    if(shoppingCart.totalPrice===0){
      return <EmptyShoppingCart /> 
    }
  }

  return (
      <div className={`${styles.outerContainer}`}>
        <div className={`${styles.rightContainer}`}>
         <div className={`${styles.digiPlus}`}>
          <DigiPlus />
         </div>
         <div className={`${styles.yourShoppingCart}`}>
             {
             shoppingCart.items.map((item)=>{
              return  <ShoppingCartDetails product={item}/>
            })
            }
         </div>
        </div>
        <div className={`${styles.leftContainer}`}>
           <div className={`${styles.shoppingCartContainer}`}>
             <SideShoppingCart />
           </div>
           <div className={`${styles.information}`}>
            <p className={`${styles.informationText}`}>
            هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند
            </p>
           </div>
           <div className={`${styles.introBox}`}>
             <p className={`${styles.digiPlus}`}> ارسال <span className={`${styles.free}`}>رایگان</span> سفارش‌ها برای اعضای دیجی‌پلاس </p>
             <p className={`${styles.text}`}>۳۹ هزارتومان هزینه ارسال به سراسر ایران برای کاربران غیر دیجی‌پلاس</p>
           </div>
        </div>
    </div>
  )
}

export default ShoppingCartItem