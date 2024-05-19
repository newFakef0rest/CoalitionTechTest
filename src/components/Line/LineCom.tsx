import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import styles from "./LineCom.module.scss";

import ArrowUp from "../../images/ArrowUp.svg";
import ArrowDown from "../../images/ArrowDown.svg";

import { Title as TitleCom } from "../Title/Title";
import { observer } from "mobx-react-lite";
import { LineProps } from "../../type";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineCom = observer(({ month, setMonth, newArray }: LineProps) => {
  // Creating data for Line

  let diastolicText: string = "";
  let systolicText: string = "";

  let diastolicValue: number = 0;
  let systolicValue: number = 0;

  const labelsArray: string[] = [];
  const systolic: number[] = [];
  const diastolic: number[] = [];

  if (newArray) {
    if (newArray.length < month) {
      setMonth(6);
      // for (let i = 0; i < 6; i++) {
      //   labelsArray.push(
      //     `${newArray[i].month.slice(0, 3)} ${newArray[i].year}`
      //   );
      //   systolic.push(newArray[i]["blood_pressure"]["systolic"].value);
      //   diastolic.push(newArray[i]["blood_pressure"]["diastolic"].value);
      // }
    }
    for (let i = 0; i < month; i++) {
      labelsArray.push(`${newArray[i].month.slice(0, 3)} ${newArray[i].year}`);
      systolic.push(newArray[i]["blood_pressure"]["systolic"].value);
      diastolic.push(newArray[i]["blood_pressure"]["diastolic"].value);
    }

    diastolicText = newArray[0]["blood_pressure"]["diastolic"].levels;
    systolicText = newArray[0]["blood_pressure"]["systolic"].levels;
    diastolicValue = newArray[0]["blood_pressure"]["diastolic"].value;
    systolicValue = newArray[0]["blood_pressure"]["systolic"].value;
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(+e.target.value);
  };
  // Не меняется
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
      },
    },
  };

  const data = {
    labels: labelsArray.reverse(),
    datasets: [
      {
        label: "Systolic",
        data: systolic.reverse(),
        borderColor: "#C26EB4",
        tension: 0.4,
        backgroundColor: "#C26EB4",
        pointRadius: 7,
        pointHoverRadius: 7,
        pointBorderColor: "#F4F0FE",
      },
      {
        label: "Diastolic",
        data: diastolic.reverse(),
        borderColor: "#8C6FE6",
        tension: 0.4,
        backgroundColor: "#8C6FE6",
        pointRadius: 7,
        pointHoverRadius: 7,
        pointBorderColor: "#F4F0FE",
      },
    ],
  };
  return (
    <div className={styles.line}>
      <div className={styles.line__content}>
        <div className={styles.line__title}>
          <TitleCom text="Blood Pressure" fontSize="18px"></TitleCom>
          <select onChange={handleSelect}>
            <option value={6}>Last 6 months</option>
            {newArray.length >= 12 && (
              <option value={12}>Last 12 months</option>
            )}
            {newArray.length >= 18 && (
              <option value={18}>Last 18 months</option>
            )}
            {newArray.length >= 24 && (
              <option value={24}>Last 24 months</option>
            )}
          </select>
        </div>
        <div className={styles.line__box}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Line
              options={{
                ...options,
                maintainAspectRatio: false,
                responsive: true,
              }}
              width={"100%"}
              height={"400px"}
              data={data}
            ></Line>
          </div>
        </div>
      </div>
      <div className={styles.line__text}>
        <div className={styles.line__item}>
          <div className={styles.line__legend}>
            <span>Systolic</span>
          </div>
          <div className={styles.line__pulse}>
            <h4>{systolicValue}</h4>
          </div>
          <div className={styles.line__description}>
            <img src={ArrowUp} alt="" />
            <p>{systolicText}</p>
          </div>
        </div>
        <div className={styles.line__item}>
          <div
            className={`${styles.line__legend} ${styles.line__legend_second}`}
          >
            <span>Diastolic</span>
          </div>
          <div className={styles.line__pulse}>
            <h4>{diastolicValue}</h4>
          </div>
          <div className={styles.line__description}>
            <img src={ArrowDown} alt="" />
            <p>{diastolicText}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
