import React, { Component } from "react";
import Modal from "./components/modal";
import { defaultMessage } from "./constants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      isPageLoad: true,
      userInput: "",
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(optionalInput) {
    this.setState({ modalOpen: !this.state.modalOpen });
    this.setState({ isPageLoad: false });
    this.setState({ userInput: optionalInput });
  }

  render() {
    return (
      <div>
        <div className="container">
          <button
            className={`button ${this.state.modalOpen ? "closed" : "open"}`}
            disabled={this.state.modalOpen}
            onClick={() => this.toggleModal("")}
          >
            Give us your feedback!
          </button>
          {this.state.userInput ? (
            <div>
              <h2 class="user-input">
                You typed &nbsp;{this.state.userInput}
                <p>{defaultMessage}</p>
              </h2>
            </div>
          ) : null}
        </div>
        <Modal
          toggleModal={this.toggleModal}
          submitUserInput={this.submitUserInput}
          modalOpen={this.state.modalOpen}
          isPageLoad={this.state.isPageLoad}
        />
      </div>
    );
  }
}

export default App;
