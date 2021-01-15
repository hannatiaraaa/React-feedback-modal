/*
    Copyright (C) 2021 Hanna Tiara Andarlia
*/
import React, { useState } from "react";
import Modal from "./components/Modal";
import { defaultMessage } from "./constants";
import "./App.css";

export default function App({ submitUserInput, match }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPageLoad, setIsPageLoad] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [experience, setExperience] = useState(undefined);

  const toggleModal = (e, optionalInput) => {
    setModalOpen(e.target);
    setIsPageLoad(false);
    setUserInput(optionalInput);
  };

  return (
    <div>
      <div className="container">
        <button
          className={`button ${modalOpen ? "closed" : "open"}`}
          disabled={(modalOpen, submitUserInput)}
          onClick={toggleModal}
        >
          Give us your feedback!
        </button>
        {userInput ? (
          <div>
            <h2 className="user-input">
              Your review is "<strong>{userInput}</strong>"
              <p>{defaultMessage}</p>
            </h2>
          </div>
        ) : null}
      </div>
      <Modal
        toggleModal={toggleModal}
        submitUserInput={submitUserInput}
        modalOpen={modalOpen}
        isPageLoad={isPageLoad}
        experience={experience}
        setExperience={setExperience}
      />
    </div>
  );
}
