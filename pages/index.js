import styles from "@/styles/Home.module.css";
import { GET } from "@/repository/FetchApiRepository";
import Slider from "@/components/Slider";
import Context from "@/context/Context";
import SevenIcons from "@/components/SevenIcons";
import IncredibleOffers from "@/components/IncredibleOffers";



export default function Home(props) {
 // console.log(props.sevenIconsData);

  return (
    <Context.Provider value={{ mainSliderImages: props.mainSliderResponse }}>
     <div className={styles.container}>
        <Slider />
        <SevenIcons data={props.sevenIconsData}/>
        <IncredibleOffers data={props.carouselResponse}/>
      </div>
     </Context.Provider> 
  );
}

export async function getStaticProps(context) {
  const mainSliderRequest = await GET("/public/mainSlider");
  const mainSliderResponse = await mainSliderRequest.json();
  
  const sevenIconsResponse = await GET("/SevenIcons");
  const sevenIconsData = await sevenIconsResponse.json(); 
    
  const carouselRequest = await GET("/products/incredibleOffers");
  const carouselResponse = await carouselRequest.json(); 
    

  return {
    props: { mainSliderResponse ,sevenIconsData , carouselResponse},
    revalidate: 5000,
  };
}
