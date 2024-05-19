import styles from "./DCard.module.scss";

type CardProps = {
  image: string;
  imageText: string;
  degree: string;
  state: string;
  color: string;
  degreeImage?: string;
};

export const DCard = ({
  image,
  imageText,
  degree,
  state,
  color,
  degreeImage,
}: CardProps) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.description}>
      <div className={styles.description__image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.description__text}>
        <p>{imageText}</p>
        <h3>{degree}</h3>
      </div>
      <div className={styles.description__state}>
        {degreeImage && <img src={degreeImage} alt=""></img>}
        <span>{state}</span>
      </div>
    </div>
  );
};
