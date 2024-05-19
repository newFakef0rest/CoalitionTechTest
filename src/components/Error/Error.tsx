import styles from "./Error.module.scss";
import { X } from "lucide-react";

export const Error = () => {
  return (
    <div className={styles.error}>
      <X className={styles.error__icon} color="red" size={80} />
      <h2>Error</h2>
      <span>Try Again Later</span>
    </div>
  );
  //   Error Try Again
};
