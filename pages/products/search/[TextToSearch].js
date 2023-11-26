import Card from "@/components/Card";
import { GET } from "@/repository/FetchApiRepository";
import React from "react";
import styles from "./TextToSearch.module.scss";

const TextToSearch = ({ searchResponse }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {searchResponse.map((item) => {
        return (
          <div className={`${styles.cardContainer}`}>
            <Card key={item.id} product={item} />
          </div>
        );
      })}
    </div>
  );
};

export default TextToSearch;

export async function getServerSideProps(context) {
  const searchRequest = await GET(
    `/products/search/${context.params.TextToSearch}`
  );
  const searchResponse = await searchRequest.json();

  if (searchResponse.length === 0)
    return {
      notFound: true,
    };
  else 
    return {
      props: { searchResponse },
    };
  
}
