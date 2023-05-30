import React, { useState } from "react";
import Modal from "react-modal";
import Image from "../assets/about_us.jpg";

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
      <button onClick={openModal}>About Us</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Popup"
        style={{ width: "500px" }}
      >
        <p>Kyanon</p>
        <h2>About Us</h2>
        <img src={Image} className={popupImageStyles} />
        <p>
          Kyanon Digital is a Vietnam-based tech powerhouse, providing
          world-class digital solutions using Agile processes.
        </p>
        <p>
          At Kyanon Digital, we create endless value for our clients by
          leveraging our expertise and recommending the most suitable solutions.
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
