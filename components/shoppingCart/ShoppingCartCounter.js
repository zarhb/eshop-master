import React from "react";
import styles from "./ShoppingCartCounter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import {
  decreaseItemCount,
  increaseItemCount,
  removeItemFromShoppingCart,
} from "@/redux/slices/shoppingCart/shoppingCartSlice";


const ShoppingCartCounter = ({ productId ,count}) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const itemCount = shoppingCart.items.filter(
    (item) => item.id === productId
  )[0].count;

  // const plusHandler = () => {
  //   didpatch(increaseItemCount(productId));
  // };
  // const minusHandler = () => {
  //   itemCount === 1
  //     ? didpatch(decreaseItemCount(productId))
  //     : didpatch(removeItemFromShoppingCart(productId));
  // };
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.plusContainer}`}>
        <span onClick={() => dispatch(increaseItemCount(productId))}>+</span>
      </div>
      <div className={`${styles.count}`}>
        <span>{itemCount}</span>
      </div>
      <div className={`${styles.minusContainer}`}>
        {itemCount === 1 ? (
          <BsTrash 
            onClick={() => dispatch(removeItemFromShoppingCart(productId))}
          />
        ) : (
          <span onClick={() => dispatch(decreaseItemCount(productId))}>-</span>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartCounter;
