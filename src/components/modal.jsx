import React, { Component } from "react";
import Rating from "./rating";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userHasInputData: false,
      experience: undefined,
    };

    this.exitModal = this.exitModal.bind(this);
    this.setExperience = this.setExperience.bind(this);
    this.submitUserInput = this.submitUserInput.bind(this);
    this.onUserInputChanged = this.onUserInputChanged.bind(this);
  }

  componentDidUpdate() {
    let timer = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      let input = document.getElementById("userInput");
      input.focus();
    }, 2500);
  }

  exitModal() {
    let inputElement = document.getElementById("userInput");
    inputElement.value = "";
    this.setState({ userHasInputData: false });
    return this.props.toggleModal("");
  }

  setExperience(experience) {
    this.setState({ experience });
  }

  submitUserInput() {
    let inputElement = document.getElementById("userInput");
    let userInput = inputElement.value || "";
    inputElement.value = "";
    this.setState({ userHasInputData: false });
    return this.props.toggleModal(userInput);
  }

  onUserInputChanged() {
    let inputElement = document.getElementById("userInput");
    if (inputElement.value !== "") {
      this.setState({ userHasInputData: true });
    } else {
      this.setState({ userHasInputData: false });
    }
  }

  render() {
    return (
      <div>
        <div
          className={`modal ${this.props.modalOpen ? "open" : "closed"}`}
          style={{ display: this.props.isPageLoad ? "none" : "inline-block" }}
        >
          <div
            className={`exit-button ${this.props.modalOpen ? "" : "hidden"}`}
            onClick={this.exitModal}
          ></div>
          <Rating setRating={this.setExperience} />
          <div className={`input ${this.props.modalOpen ? "" : "hidden"}`}>
            <h1>How was your overall experience with us?</h1>
            <input
              autocomplete="off"
              id="userInput"
              type="text"
              data-lpignore="true"
              onChange={this.onUserInputChanged}
              placeholder="type here."
            ></input>
          </div>
          {this.state.userHasInputData ? (
            <div>
              <button className="button submit" onClick={this.submitUserInput}>
                <strong>Submit</strong>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Modal;
