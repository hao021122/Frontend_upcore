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

  return (
    <div>
      <button onClick={openModal}>Conditions</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Popup">
        <p>Kyanon</p>
        <h2>Rules Conditions</h2>
        <p>INTRODUCTION TO COOPERATION </p>
        <p>
          1. The following is an agreement (“T&C” or “Terms and Conditions”)
          between Kyanon Limited which is an entity incorporated by the laws of
          Singapore (“Kyanon”) and you (“you” or “your”).ㅤ
        </p>
        <p>
          These Terms and Conditions relate to, as applicable, the use of
          www.Kyanon.com, www.Kyanon.com, and/or such other Kyanon website as
          designed by Kyanon(the “KyanonSite”) and the applicable Kyanon
          products and software (e.g., Kyanon software), including all content
          provided by Kyanon through such software and the Kyanon Site (the
          “KyanonSoftware”).
        </p>
        <p>
          By accepting the Terms of Service or by accessing the Kyanon Site, you
          acknowledge that you agree to be bound by these Terms of Service and
          the Privacy Policy, which is incorporated herein by reference.
        </p>
        <p>
          If you are entering into these Terms of Service on behalf of a
          company, business or other entity, you represent that you have the
          authority to bind such entity, its employees, officers, directors,
          contractors, agents, parental entities, subsidiaries and its
          affiliates to these Terms of Service.
        </p>
        <p>
          In the event of the foregoing, the terms “you” or “your” shall also
          refer to such entity, its employees, officers, directors, contractors,
          agents, parental entities, subsidiaries and its affiliates, as
          applicable. You acknowledge that these Terms of Service are a contract
          between you and Kyanon, even though it is electronic and is not
          physically signed by you and Kyanon, and it governs your use of the
          Kyanon Service. If you do not agree to these Terms of Service or do
          not have the authority to agree to these Terms of Service (e.g., by
          not being an authorized representative of a company or not being of
          legal age), you should not use the Kyanon Service.
        </p>
        <p>
          1.1. Kyanon has an obligation to its users, employees and developer to
          protect the confidentiality, integrity and availability of information
          assets.
        </p>
        <p>
          1.2. To ensure business continuity and minimize disruptions to
          business functions by preventing and minimizing the impact of security
          incidents.
        </p>
        <p>
          1.3. Facilitate business improvement through the adoption of secure
          business practices and business management.ㅤ
        </p>
        <p>
          1.4. Ensure that all information controls are implemented at the right
          time and the right cost to a high standard of repeatability and
          consistency for the benefit of our users and stakeholders.
        </p>
        <p>
          1.5. Both the platform and the users are required to keep this
          platform confidential.
        </p>
        <p>TERMS AND CONDITIONS</p>
        <p>2.1. Protection of personal survey of users</p>
        <p>
          2.1.1 Protection of survey is the basic principle of personal
          protection of the Platform. The Platform survey will not be used in
          the manner prescribed by law. For the survey related to the view
          angle, the original personal survey is used. Pare Creative uses
          professional encrypted storage and transmission channels for survey
          protection to ensure the personal safety of users.
        </p>
        <p>
          2.1.2 To use this platform, users need to provide the necessary
          information, such as cell phone number for account registration
          service or user identification function use; the recording function
          requires your authorization to use. If there are national regulations
          or special rules, you must provide true identity information. If the
          information you provide is incomplete or incorrect, or if the
          information you mention is insufficient, the use of the services of
          the Platform will be restricted during use.
        </p>
        <p>
          2.1.3 Under normal circumstances, you may view and modify the
          submitted information at any time, but due to security and
          identification considerations (such as account retrieval services),
          you may not be able to provide the final registration information and
          other information for verification at the time of registration.
        </p>
        <p>
          2.1.4 Kyanon will employ various security technologies and procedures,
          as well as sound management systems, to protect your personal
          information from any use or unauthorized use. The new Kyanon account
          will have the same final registered cell phone number as the "existing
          Kyanon account"
        </p>
        <p>
          2.1.5 Kyanon will not disclose your information to companies,
          individual organizations and individuals outside of Kyanon without
          your consent, except as required by law.
        </p>
        <p>
          2.1.6 Persons under the age of sixteen shall be protected by survey
          regulations, and persons under the age of eighteen shall obtain
          written information from their parents or law enforcement officers
          before using the Platform.
        </p>
        <p>User Responsibilities</p>
        <p>
          2.2.1 Users are required to complete all applications before applying
          for withdrawal.
        </p>
        <p>
          2.2.2 The user cannot request a withdrawal during the process of
          improving the application. ㅤ
        </p>
        <p>2.2.3 Users cannot cancel, skip or undo the application.</p>
        <p>
          2.2.4 Kyanon reserves the right to take legal action against any
          person/thing that causes any type of damage to the company.
        </p>
        <p>
          2.2.5 Users will get 0-4 Survey Awards in 1 set of apps and all are
          randomized by the system
        </p>
        <p>2.1 AGENTS RESPONSIBILITY </p>
        <p>
          In accordance with our policy between our company (we, us, our,
          Kyanon) and partnership authority (Developers), we reserve the right
          to control the time taken by the agent to complete the apps set up to
          a maximum of 2 hours. In addition, early termination for the products
          is NOT allowed, as it will disrupt LTV collection. Most importantly,
          our company (we, us, our, Kyanon) has prepared a 3-set app for agents
          since they joined, but to avoid lost profits, agents must complete
          these 3-sets of survey set before they can opt out, otherwise our
          company will be at a loss due to your omission.
        </p>
        <p>
          This Information Security Policy sets out Kyanon direction and
          commitment to information security to protect its information assets
          and those provided to Kyanon by partner organizations/third parties.
        </p>
        <p>
          We will develop and maintain an effective documented ISMS in
          accordance with the requirements of ISO IC 27001:2013 to ensure that
          we have a documented method of control to protect Kyanon, its users,
          and stakeholders.
        </p>
        <p>
          Kyanon uses commercially reasonable efforts to protect its systems.
          However, Kyanon cannot ensure the security of any information you
          transmit to Kyanon, and you do so at your own risk, and you should not
          use unsecured Internet access or other unprotected networks to submit
          information through Kyanon Services. If Kyanon learns of a breach or
          violation of security systems, then the Company will notify you by way
          of a customer service notice so that you can take appropriate
          protective measures (for example, if a security breach occurs, Kyanon
          may post a message or alert about it on the Kyanon website or through
          the Kyanon Customer Service).
        </p>
        <p>3.1 It is our policy to ensure that.</p>
        <p>3.1.1. Information will be protected against unauthorized access.</p>
        <p>3.1.2. The confidentiality of information will be guaranteed.</p>
        <p>3.1.3. The integrity of the information will be maintained.</p>
        <p>
          3.1.4. All breaches of information security, whether actual or
          suspected, will be reported to and investigated by information
          security officials.
        </p>
        <p>3.2 Policy applies to</p>
        <p>
          3.2.1. All information owned by Kyanon and provided to Kyanon by users
          and stakeholders.
        </p>
        <p>
          3.2.2. All information in any form - paper, electronic, audio, CD,
          tape film.
        </p>
        <p>
          3.2.3. All systems, applications and infrastructure used to process
          information.
        </p>
        <p>
          3.2.4. All Kyanon employees, officers, directors, contractors, agents,
          parental entities, subsidiaries and affiliates
        </p>
        <p>
          3.2.5. Third parties that have access to Kyanon information assets.
        </p>
        <p>
          3.2.6. All buildings used by Kyanon that house Information Assets, or
          where employees have access to Information
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
