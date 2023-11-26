import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TopBanner.module.scss";
import { GET } from "@/repository/AxiosRepository";

const TopBanner = () => {
  const [topBannerData, setTopBannerData] = useState({});

  useEffect(() => {
    GET("/topBanner").then((response) => setTopBannerData(response.data));
  }, []);

  
  return (
    <div key={topBannerData.id} className={`${styles.mainContainer}`}>
      <Image fill className={`${styles.image}`} alt="top banner" src={topBannerData.imageUrl} />
    </div>
  );
};

export default TopBanner;
