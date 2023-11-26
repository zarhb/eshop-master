import Card from "@/components/Card";
import { GET } from "@/repository/FetchApiRepository";
import React from "react";
import styles from "./categoryUrl.module.scss"

const CategoryUrl = ({data}) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {data.map((item) => {
        return <Card product={item}/>;
      })}
    </div>
  );
};



export default CategoryUrl;

export async function getServerSideProps(context) {
  // console.log(context.params);
  const request = await GET(`/products/${context.params.CategoryUrl}`);
  const data = await request.json();
  
  return {
    props: { data },
  };
}



