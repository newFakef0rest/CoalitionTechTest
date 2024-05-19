import styles from "./Header.module.scss";
import Logo from "../../images/TestLogo.svg";
import Home from "../../images/header-home.svg";
import Patients from "../../images/header-patients.svg";
import Schedule from "../../images/header-schedule.svg";
import Message from "../../images/header-message.svg";
import Transactions from "../../images/header-transactions.svg";
import HeaderLog from "../../images/header-log-one.png";
import Settings from "../../images/header-settings.svg";
import More from "../../images/header-more.svg";
import { Desc } from "../Desc/Desc";
import { Menu, SquareMenu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [clicked, setClick] = useState(false);

  const handleClick = () => setClick(!clicked);
  return (
    <>
      <div
        className={`${styles.header__burger__items} ${
          clicked && styles.header__burger__items__active
        }`}
      >
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <img src={Home} alt="" />
              <a href="">Overview</a>
            </li>
            <li className={styles.header__active}>
              <img src={Patients} alt="" />
              <a href="">Patients</a>
            </li>
            <li>
              <img src={Schedule} alt="" />
              <a href="">Schedule</a>
            </li>
            <li>
              <img src={Message} alt="" />
              <a href="">Message</a>
            </li>
            <li>
              <img src={Transactions} alt="" />
              <a href="">Transactions</a>
            </li>
          </ul>
        </nav>
        <div className={styles.header__log}>
          <div className={styles.header__log__info}>
            <div className={styles.header__log__info_image}>
              <img src={HeaderLog} alt="ProfileLogo" />
            </div>
            <div className={styles.header__log__info_title}>
              <Desc name="Dr. Jose Simmons" job="General Practitioner" />
            </div>
          </div>
          <div className={styles.header__log__buttons}>
            <button>
              <img src={Settings} alt="" />
            </button>
            <button>
              <img src={More} alt="" />
            </button>
            <button>
              <X onClick={handleClick} />
            </button>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.header__items}>
          <div className="header__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div onClick={handleClick} className={styles.header__burger}>
            {clicked ? <SquareMenu /> : <Menu />}
          </div>
          <div className={styles.header__none}>
            <nav className={styles.header__nav}>
              <ul>
                <li>
                  <img src={Home} alt="" />
                  <a href="">Overview</a>
                </li>
                <li className={styles.header__active}>
                  <img src={Patients} alt="" />
                  <a href="">Patients</a>
                </li>
                <li>
                  <img src={Schedule} alt="" />
                  <a href="">Schedule</a>
                </li>
                <li>
                  <img src={Message} alt="" />
                  <a href="">Message</a>
                </li>
                <li>
                  <img src={Transactions} alt="" />
                  <a href="">Transactions</a>
                </li>
              </ul>
            </nav>
            <div className={styles.header__log}>
              <div className={styles.header__log__info}>
                <div className={styles.header__log__info_image}>
                  <img src={HeaderLog} alt="ProfileLogo" />
                </div>
                <div className={styles.header__log__info_title}>
                  <Desc name="Dr. Jose Simmons" job="General Practitioner" />
                </div>
              </div>
              <div className={styles.header__log__buttons}>
                <button>
                  <img src={Settings} alt="" />
                </button>
                <button>
                  <img src={More} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
