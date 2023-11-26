import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './emptyShoppingCart.module.scss'

import { useSelector } from 'react-redux';
import ShoppingCartNextTab from '@/components/shoppingCart/ShoppingCartNextTab';
import EmptyShoppingCart from '@/components/shoppingCart/EmptyShoppingCart';


const emptyShoppingCart = () => {
  return (
    <div className={`${styles.outerContainer}`}>
    <Tabs>
  <div>
   <TabList className={`${styles.topContainer}`}>
    <Tab  className={`${styles.tab1}`}> سبد خرید 
    {/* <div className={`${styles.badge}`}>
    1  </div> */}
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
   <EmptyShoppingCart />
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

export default emptyShoppingCart