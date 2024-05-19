import { observer } from "mobx-react-lite";
import { Title } from "../Title/Title";
import styles from "./List.module.scss";
import { TList } from "../../type";
// import { useStore } from "../../hooks/useStore";
import store from "../../store/store";
import { useActiveContext } from "../../context/ActiveContext";

export const List = observer(() => {
  const { active } = useActiveContext();
  const newArray = store.list(active);
  const revealDesc = (item: TList) => {
    const descriptions: JSX.Element[] = [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_key, value] of Object.entries(item)) {
      descriptions.push(<td key={value}>{value}</td>);
    }

    return descriptions;
  };

  return (
    <div className={styles.list}>
      <div className={styles.list__title}>
        <Title text="Diagnostic List" />
      </div>
      <div className={styles.list__content}>
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {newArray &&
              newArray.map((item, idx) => (
                <tr key={idx}>{revealDesc(item)}</tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
