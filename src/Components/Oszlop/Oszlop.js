// Oszlop.js

import { DTYPE } from "../Constants/type";
import "./Oszlop.css";
import { useDrop } from "react-dnd";
import React from "react";
import Cetli from "../Cetli/Cetli";

function Oszlop(props ) {
  // eslint-disable-next-line no-unused-vars
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DTYPE.Cetli,
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return;
      }
      props.move(props.index, item.elemszam);
      console.log(item, "megprobalt ide menni:" + props.index);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="Oszlop" ref={drop}>
      <h1>{props.name}</h1>
      {props.tabla.map((elem, index) =>
        elem.azon === props.index ? (
          <Cetli
            key={props.index + ":" + elem.elemszam}
            name={elem.name}
            azon={elem.azon}
            leiras={elem.leiras}
            elemszam={index}
            folyamatban={elem.folyamatban}
            kesz={props.kesz}
            show={props.show}
            sideDateset={props.sideDateset}
          />
        ) : null
      )}
      {props.children}
    </div>
  );
}

export default Oszlop;
