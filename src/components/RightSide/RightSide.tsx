import { Lab } from "../Lab/Lab";
import { Person } from "../Person/Person";
import styles from "./RightSide.module.scss";

export const RightSide = () => {
  return (
    <div className={styles.right}>
      <Person />
      <Lab />
    </div>
  );
};
