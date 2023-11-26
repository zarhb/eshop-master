import React, { useContext } from "react";
import styles from "./Slider.module.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ReactImageGallery from "react-image-gallery";
import Context from "@/context/Context";
import { NextArrow, PrevArrow } from "./CaruselArrow";
import LeftNav from "./LeftNav";

const Slider = () => {
  const { mainSliderImages } = useContext(Context);

  const renderLeftNavn= (onClick, disabled)=> {
   return <NextArrow onClick={onClick} disabled={disabled} />
  }
  
  return (
    <div className={`${styles.mainContainer}`}>
      <ReactImageGallery
        items={mainSliderImages}
        key={mainSliderImages.id}
        autoPlay={true}
        showFullscreenButton={false}
        showPlayButton={false}
        slideInterval={3000}
        isRTL={true}
        lazyLoad={true}
        showThumbnails={false}
        showNav={false}
        renderLeftNav={<LeftNav />}
         renderRightNav={(onClick, disabled)=> {
          return <PrevArrow onClick={onClick} disabled={disabled} />
         }}
      />
    </div>
  );
};

export default Slider;
