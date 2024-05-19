import { DCard } from "../DCard/DCard";
import { LineCom } from "../Line/LineCom";
import { Title } from "../Title/Title";
import styles from "./DHistory.module.scss";
import Lungs from "../../images/lungs.svg";
import Temper from "../../images/temperature.svg";
import Heart from "../../images/HeartBPM.svg";
import ArrowDown from "../../images/ArrowDown.svg";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import { useActiveContext } from "../../context/ActiveContext";

export const DHistory = observer(() => {
  const { active } = useActiveContext();
  const [month, setMonth] = useState<number>(6);
  const newArray = store.history(active);
  return (
    <div className={styles.history}>
      <div className={styles.history__title}>
        <Title text="Diagnosis History" />
      </div>
      <div className={styles.history__content}>
        {newArray && (
          <LineCom month={month} setMonth={setMonth} newArray={newArray} />
        )}
      </div>
      {newArray && (
        <div className={styles.history__items}>
          <DCard
            image={Lungs}
            imageText="Respiratory Rate"
            degree={`${newArray[0]["respiratory_rate"].value} bpm`}
            state={`${newArray[0]["respiratory_rate"].levels}`}
            color="#E0F3FA"
          />
          <DCard
            image={Temper}
            imageText="Temperature"
            degree={`${newArray[0]["temperature"].value} °F`}
            state={`${newArray[0]["temperature"].levels}`}
            color="#FFE6E9"
          />
          <DCard
            image={Heart}
            imageText="Heart Rate"
            degree={`${newArray[0]["heart_rate"].value} bpm`}
            state={`${newArray[0]["heart_rate"].levels}`}
            color="#FFE6F1"
            degreeImage={ArrowDown}
          />
        </div>
      )}
    </div>
  );
});
