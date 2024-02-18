import CetliGenerator from "../CetliGenerator/CetliGenerator";
import Oszlop from "../Oszlop/Oszlop";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";
import "./Tabla.css";
import SidePanel from "../Cettlipanel/sidepanel";

function Tabla() {
  const tablaOszlopai = ["Feladatok", "Folyamatban", "Kész"];
  const [visible, setvisible] = useState(false);
  const [sideDate, setsideDate] = useState({name:"név",leiras:"ez itt egy feladat leiras"})

  const [osszestecli, setosszestecli] = useState([]);

  const cetlihelyvaltoztatas = (ujazon, elemszam) => {
    setosszestecli((currentCetlik) => {
      const ujCetlik = currentCetlik.map((cetli, index) =>
        index === elemszam
          ? {
              ...cetli,
              azon: ujazon,
              folyamatban: ujazon + 1 !== tablaOszlopai.length,
            }
          : cetli
      );
      return ujCetlik;
    });
  };

  const hozzad = (cetlidata) => {
    const ujOsszesCetli = [
      ...osszestecli,
      { ...cetlidata, elemszam: osszestecli.length, folyamatban: true },
    ];
    setosszestecli(ujOsszesCetli);
  };

  const kesz = (elemszam,msg) => {
    console.log(elemszam);
    alert(osszestecli[elemszam].name + msg);
    setosszestecli(osszestecli.filter((item) => item.elemszam !== elemszam));
  };
  const show = (enter) => {
   
   setvisible(enter);
    
  };
  const sideDateset=(date)=>{
    console.log(date);
    setsideDate({name:date.name, leiras:date.leiras})
    
  }
 

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="Tabla">
        {tablaOszlopai.map((oszlop, index) => {
          return (
            <Oszlop
              key={index}
              name={oszlop}
              index={index}
              tabla={osszestecli}
              move={cetlihelyvaltoztatas}
              kesz={kesz}
              show={show}
              sideDateset={sideDateset}
            >
              {index === 0 ? (
                <CetliGenerator tabla={osszestecli} hozzad={hozzad} />
              ) : null}
            </Oszlop>
          );
        })}
        {visible && (
        <SidePanel name={sideDate.name+":"} leiras={sideDate.leiras}/>
      )}
        
      </div>
      
    </DndProvider>
  );
}

export default Tabla;
