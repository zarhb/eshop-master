import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./CaruselArrow.module.scss"

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${styles.nextArrow}`}>
    <IoIosArrowForward
      className={`${styles.nextSvg}`}
      onClick={onClick}
    />
    </div>
  );
}
export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${styles.prevArrow}`}>
    <IoIosArrowBack
      className={`${styles.nextSvg}`}
      onClick={onClick}
    />
    </div>
  );
}
