import { addItemToShoppingCart } from "@/redux/slices/shoppingCart/shoppingCartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "./AddToShoppingCartButton.module.scss";

const AddToShoppingCartButton = ({ product }) => {
 // const {id,name,price,priceWithDiscount,indexImageUrl} = product
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addItemToShoppingCart(product));
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <span onClick={clickHandler}> افزودن به سبد </span>
    </div>
  );
};

export default AddToShoppingCartButton;
