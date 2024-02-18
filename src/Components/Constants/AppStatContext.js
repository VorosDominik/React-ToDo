import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [osszestecli, setosszestecli] = useState([]);
  const [visible, setVisible] = useState(false);
  const [sideDate, setSideDate] = useState({
    name: "név",
    leiras: "ez itt egy feladat leiras",
  });

  const cetlihelyvaltoztatas = (ujazon, elemszam) => {
    // Logika a cetli helyének változtatásához
  };

  const hozzad = (cetlidata) => {
    // Logika új cetli hozzáadásához
  };

  const kesz = (elemszam, msg) => {
    // Logika a "kész" állapot kezelésére
  };

  const show = (enter) => {
    setVisible(enter);
  };

  const sideDateset = (date) => {
    setSideDate({ name: date.name, leiras: date.leiras });
  };

  return (
    <AppStateContext.Provider
      value={{
        osszestecli,
        setosszestecli,
        visible,
        setVisible,
        sideDate,
        setSideDate,
        cetlihelyvaltoztatas,
        hozzad,
        kesz,
        show,
        sideDateset,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
