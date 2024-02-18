import FormModal from "../FormModal/FormModal";
import PluszCetli from "../PluszCetli/PluszCetli";
import "./CetliGenerator.css";
import React, { useState } from "react";

function CetliGenerator(props) {

  const [isModalOpen, setisModalOpen] = useState(false);

  const openModal = () => setisModalOpen(true);
  const closeModal = () => setisModalOpen(false);

  const LetreHoz = () => {
    openModal();
  };

  const hozzad = (Cetlidate) => {
    props.hozzad(Cetlidate)
    console.log(Cetlidate)
  };

  return (
    <>
      <div className="CetliGenerator">
        <PluszCetli click={LetreHoz}></PluszCetli>
      </div>
      <FormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        Letrehoz={hozzad}
      ></FormModal>
    </>
  );
}

export default CetliGenerator;
