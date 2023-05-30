import React, { useState } from "react";
import Modal from "react-modal";

// Modal.setAppElement('#root'); // Uncomment this line if using React 17 or above

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>FAQ</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Popup">
        <p>Kyanon</p>
        <h2>FAQs</h2>
        <p>KINDLY TAKE NOTE</p>
        <p>
          Please do not use the same cryptocurrency's information to register
          for the booster group repeatedly; once found, the account ID will be
          frozen.
        </p>
        <p>WHEN IS THE SOFTWARE SURVEY TIME?</p>
        <p>
          Platform operation time is 1030-2330 daily; users may optimize the
          survey sets during the platform operation time
        </p>
        <p>HOW TO START YOUR SURVEY?</p>
        <p>
          After the account is funded, you can start surveying the applications,
          go to the "Starting" page, then click on the "Start" button, wait for
          the system to get the applications, and after the application
          submission pop-up, submit the application and complete survey the
          application. Complete the survey of 40 applications per day for the
          rebate
        </p>
        <p>The regular member rebate increased to 1% for each application. </p>
        <p>
          The survey awards are 3%. All applications cannot be canceled or
          replaced.
        </p>
        <p>PLATFORM RECRUITER MODE</p>
        <p>
          Users can become platform Recruiters by referring newcomers and
          getting additional dynamic rewards. The reward is 25% of the daily
          rebate for direct first-level users.
        </p>
        <p>(Note.: Will need to request with customer service)</p>
        <p>HOW TO WITHDRAW?</p>
        <p>
          Before making a withdrawal, please bind your withdrawal information on
          the platform. Make a withdrawal on the "Withdrawal" screen on the home
          page. Enter the amount to be withdrawn and the withdrawal password and
          click the "Withdraw" button to start. The specific arrival time is
          based on the cryptocurrency exchange's arrival time. Withdrawal time
          is from 1030 to 2330 SGT every day.
        </p>
        <p>
          (Note: Please contact our online customer support services for further
          clarification.)
        </p>
        <p>RECHARGE AND WITHDRAWAL</p>
        <p>The minimum amount of recharge is 10 Tether(USDT).</p>
        <p>The minimum amount of withdrawal is 70 Tether(USDT).</p>
        <p>ACCOUNT TERMINATIONS</p>
        <p>
          Most importantly, our company (we, us, our, Kyanon) has prepared a
          3-set survey for agents since they joined, but to avoid lost profits,
          agents must complete this 3-sets of survey set before they can
          opt-out, otherwise our company will at a loss due to your omission.
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
