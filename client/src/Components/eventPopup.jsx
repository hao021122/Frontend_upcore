import React, { useState } from "react";
import Modal from "react-modal";
import Image from "../assets/event.jpg";

// Modal.setAppElement('#root'); // Uncomment this line if using React 17 or above

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const popupImageStyles = {
    width: "fit-content",
    height: "auto",
    marginBottom: "20px",
  };
  return (
    <div>
      <button onClick={openModal}>Event</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Popup"
        style={{ width: "500px" }}
      >
        <p>Kyanon</p>
        <h2>Latest Event</h2>
        <img src={Image} className={popupImageStyles} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
