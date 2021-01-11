import React, { useState, useEffect } from "react";
import Rating from "./Rating";

export default function Modal({
  modalOpen,
  isPageLoad,
  toggleModal,
  setExperience,
}) {
  const [userHasInputData, setUserHasInputData] = useState(false);

  useEffect(() => {
    let timer = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      let input = document.getElementById("userInput");
      input.focus();
    }, 2500);
  });

  const exitModal = (e) => {
    let inputElement = document.getElementById("userInput");
    inputElement.value = "";
    setUserHasInputData(false);
    return toggleModal(e.target, "");
  };

  const submitUserInput = (e) => {
    console.log(e.target);
    let inputElement = document.getElementById("userInput");
    let userInput = inputElement.value || "";
    inputElement.value = "";
    setUserHasInputData(false);
    return toggleModal(e.target, userInput);
  };

  const onUserInputChanged = () => {
    let inputElement = document.getElementById("userInput");
    if (inputElement.value !== "") {
      setUserHasInputData(true);
    } else {
      setUserHasInputData(false);
    }
  };

  return (
    <div>
      <div
        className={`modal ${modalOpen ? "open" : "closed"}`}
        style={{ display: isPageLoad ? "none" : "inline-block" }}
      >
        <div
          className={`exit-button ${modalOpen ? "" : "hidden"}`}
          onClick={exitModal}
        ></div>
        <div className={`input ${modalOpen ? "" : "hidden"}`}>
          <Rating setExperience={setExperience} />
          <h1>How was your overall experience with us?</h1>
          <input
            autoComplete="off"
            id="userInput"
            type="text"
            data-lpignore="true"
            onChange={onUserInputChanged}
            placeholder="type here."
          ></input>
        </div>
        {userHasInputData ? (
          <div>
            <button className="button submit" onClick={submitUserInput}>
              <strong>Submit</strong>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
