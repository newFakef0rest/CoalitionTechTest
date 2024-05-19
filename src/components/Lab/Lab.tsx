import { Title } from "../Title/Title";
import styles from "./Lab.module.scss";
import Download from "../../images/download.svg";
import store from "../../store/store";
import { useActiveContext } from "../../context/ActiveContext";

export const Lab = () => {
  const { active } = useActiveContext();
  const results = store.results(active);

  return (
    <div className={styles.lab}>
      <div className={styles.lab__title}>
        <Title text="Lab Results" />
      </div>
      <ul className={styles.lab__content}>
        {results &&
          results.map((result, idx) => (
            <li key={result} className={`${idx === 1 && styles.lab__active}`}>
              <span>{result}</span>
              <img src={Download} alt="" />
            </li>
          ))}
      </ul>
    </div>
  );
};
