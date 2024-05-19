// import { ItemsProps } from "../../type";
import { DHistory } from "../DHistory/DHistory";
import { List } from "../List/List";
import styles from "./Diagnosis.module.scss";

export const Diagnosis = () => {
  return (
    <div className={styles.diagnosis}>
      <DHistory />
      <List />
    </div>
  );
};
