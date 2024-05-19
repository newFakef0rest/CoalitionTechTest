import { Title } from "../Title/Title";
import styles from "./Patients.module.scss";
import Search from "../../images/search.svg";
import { PatientsCard } from "../PatientsCard/PatientsCard";
// import { ItemsProps } from "../../type";
import { useStore } from "../../hooks/useStore";
import { useActiveContext } from "../../context/ActiveContext";

export const Patients = () => {
  const { active, setActive } = useActiveContext();
  const items = useStore();
  return (
    <div className={styles.patients}>
      <div className={styles.patients__title}>
        <Title text="Patients" />
        <button>
          <img src={Search} alt="search" />
        </button>
      </div>
      <div className={styles.patients__items}>
        {items.map((item, idx) => (
          <PatientsCard
            key={item.name}
            setActive={setActive}
            idx={idx}
            item={item}
            active={active}
          />
        ))}
      </div>
    </div>
  );
};
