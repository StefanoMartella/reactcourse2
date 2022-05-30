import React from "react";
import { Navigate } from "react-router-dom";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigateTo: null,
    };
  }

  render() {
    const { navigateTo } = this.state;

    if (navigateTo) {
      return <Navigate to={navigateTo} />;
    }

    return (
      <div>
        <h1>Contact page</h1>
        <button onClick={() => this.setState({ navigateTo: "/" })}>
          Vai alla home
        </button>
      </div>
    );
  }
}

export default ContactPage;
