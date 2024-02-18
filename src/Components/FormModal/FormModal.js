import React, { useState } from 'react';
import './FormModal.css';

const FormModal = ({ isOpen, onClose, Letrehoz }) => {
  const [cetliNeve, setCetliNeve] = useState('');
  const [leiras, setLeiras] = useState('');

  if (!isOpen) {
    return null;
  }



  const handleSubmit = (e) => {
    Letrehoz({name:cetliNeve, leiras:leiras, azon:0,folyamatban:true});
    onClose(); 
    setLeiras('')
    setCetliNeve('')
  };

  return (
    <div className="FormModal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <form>
          <label htmlFor="CetliNeve">Cetlineve:</label>
          <input
            type="text"
            id="CetliNeve"
            name="CetliNeve"
            value={cetliNeve}
            onChange={(e) => setCetliNeve(e.target.value)}
          />
          <br />
          <label htmlFor="Leiras">Leiras:</label>
          <br />
          <textarea
            id="Leiras"
            name="Leiras"
            rows="4"
            cols="50"
            value={leiras}
            onChange={(e) => setLeiras(e.target.value)}
          ></textarea>
          <br />
          <button type="button" onClick={handleSubmit}>Létrehoz</button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
