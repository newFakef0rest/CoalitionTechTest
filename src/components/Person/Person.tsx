import { Loader } from "../Loader/Loader";
import { PCard } from "../PCard/PCard";
import styles from "./Person.module.scss";
import firstImage from "../../images/PCardFirst.svg";
import secondImage from "../../images/genderFemale.svg";
import thirdImage from "../../images/Phone.svg";
import fourthImage from "../../images/Insurance.svg";
import store from "../../store/store";
import { useActiveContext } from "../../context/ActiveContext";

export const Person = () => {
  const { active } = useActiveContext();
  const newItem = store.person(active);

  if (newItem) {
    return (
      <div className={styles.person}>
        <div className={styles.person__center}>
          <img src={newItem.profile_picture} alt="" />
          <h2>{newItem.name}</h2>
        </div>
        <div className="person__info">
          <PCard
            image={firstImage}
            title={"Date Of Birth"}
            value={newItem.date_of_birth}
            className={styles.person__margin}
          />
          <PCard
            image={secondImage}
            title={"Gender"}
            value={newItem.gender}
            className={styles.person__margin}
          />
          <PCard
            image={thirdImage}
            title={"Contact Info."}
            value={newItem.phone_number}
            className={styles.person__margin}
          />
          <PCard
            image={thirdImage}
            title={"Emergency Contacts"}
            value={newItem.emergency_contact}
            className={styles.person__margin}
          />
          <PCard
            image={fourthImage}
            title={"Insurance Provider"}
            value={newItem.insurance_type}
          />
        </div>
        <div className={styles.person__button_box}>
          <button>Show All Information</button>
        </div>
      </div>
    );
  }
  return <Loader></Loader>;
};
