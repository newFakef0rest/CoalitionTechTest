import styles from "./Title.module.scss";

type TitleProps = {
  text: string;
  fontSize?: string;
};

export const Title = ({ text, fontSize }: TitleProps) => {
  return (
    <h2
      className={styles.title}
      style={{ fontSize: fontSize ? fontSize : "auto" }}
    >
      {text}
    </h2>
  );
};
