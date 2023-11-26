import { useRouter } from "next/router";
import React, { useRef } from "react";
import styles from "./SearchProduct.module.scss";
import { FaSistrix } from "react-icons/fa6";

const SearchProduct = () => {
  const textForSearch = useRef();
  const router = useRouter("");

  const clickHandier = () => {
    router.push(`/products/search/${textForSearch.current.value}`);
  };

  return (
    <div className={`${styles.outerContainer}`}>

      <input
        className={`${styles.searchInput}`}
        type="text"
        ref={textForSearch}
        placeholder="جستجو"
        autoComplete="off"
      />
      <button
        className={`${styles.searchButton}`}
        type="button"
        onClick={clickHandier}
      >
      <FaSistrix className={`${styles.searchIcon}`}/>
      </button>
    </div>
  );
};

export default SearchProduct;
