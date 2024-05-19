import { useEffect } from "react";
import { Error } from "../Error/Error";
import { Patients } from "../Patients/Patients";
import styles from "./Main.module.scss";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import { Loader } from "../Loader/Loader";
import { Diagnosis } from "../Diagnosis/Diagnosis";
import { StoreContext } from "../../context/StoreContext";
import { RightSide } from "../RightSide/RightSide";
import { ActiveProvider } from "../../context/ActiveContext.tsx";

export const Main = observer(() => {
  useEffect(() => {
    store.getItems();
  }, []);

  if (store.items?.state === "pending") {
    return <Loader />;
  }

  if (store.items?.value && store.items.state === "fulfilled") {
    // Import the ActiveContextProvider component

    return (
      <main className={styles.main}>
        <StoreContext.Provider value={store.items?.value}>
          <ActiveProvider>
            {" "}
            {/* Add the imported ActiveContextProvider component */}
            <div className={styles.main__box}>
              <Patients />
              <Diagnosis />
            </div>
            <RightSide />
          </ActiveProvider>{" "}
          {/* Close the ActiveContextProvider component */}
        </StoreContext.Provider>
      </main>
    );
  }

  return <Error></Error>;
});
