import { Desc } from "../Desc/Desc";
import { TPatients } from "../../type";
import styles from "./PatientsCard.module.scss";
import ThreeDots from "../../images/threeDots.svg";

type PatientsProps = {
  item: TPatients;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  idx: number;
  active: number;
};

export const PatientsCard = ({
  item,
  setActive,
  idx,
  active,
}: PatientsProps) => {
  return (
    <div
      onClick={() => setActive(idx)}
      className={`${styles.patients} ${
        idx === active && `${styles.patients__active}`
      }`}
    >
      <div className={styles.patients__info}>
        <div className={styles.patients__image}>
          <img src={item.profile_picture} alt="" />
        </div>
        <div className={styles.patients__text}>
          <Desc name={item.name} job={`${item.gender}, ${item.age}`} />
        </div>
      </div>

      <div className="patients__more">
        <button>
          <img src={ThreeDots} alt="" />
        </button>
      </div>
    </div>
  );
};
