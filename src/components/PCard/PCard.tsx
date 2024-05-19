import styles from "./PCard.module.scss";
import { CardProps } from "../../type";

export const PCard = ({ className, image, title, value }: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.card__image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.card__content}>
        <span>{title}</span>
        <p>{value}</p>
      </div>
    </div>
  );
};
