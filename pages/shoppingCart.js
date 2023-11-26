import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './shoppingCart.module.scss'
import ShoppingCartItem from '@/components/shoppingCart/ShoppingCartItem';
import ShoppingCartNextTab from '@/components/shoppingCart/ShoppingCartNextTab';
import { useSelector } from 'react-redux';


const shoppingCart = () => {
 const shoppingCart = useSelector(state=>state.shoppingCart);

  return (
    <div className={`${styles.outerContainer}`}>
      <Tabs>
    <div>
     <TabList className={`${styles.topContainer}`}>
      <Tab  className={`${styles.tab1}`}> سبد خرید 
      <div className={`${styles.badge}`}>
      {/* {shoppingCart.totalQuantity} */}
      1
      </div>
      <div className={`${styles.tabBorderStyle}`}></div>
      </Tab>
      <Tab className={`${styles.tab2}`}>خرید بعدی
      <div className={`${styles.tabBorderStyle}`}></div>
      </Tab> 
    </TabList>
     </div>
   
<div className={`${styles.buttomContainer}`}> 
  <div className={`${styles.tab1Container}`}>
     <TabPanel >
     <ShoppingCartItem />
    </TabPanel>
  </div>
 <div  className={`${styles.tab2Container}`}>
  <TabPanel>
      <ShoppingCartNextTab />
    </TabPanel>
 </div>
</div>   
   </Tabs>
    </div>
  )
}

export default shoppingCart