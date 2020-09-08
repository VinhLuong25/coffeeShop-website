import React from "react";
import axios from "axios";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { name: "", email: "", comment: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment,
    };
    console.log(JSON.stringify(info));

    axios
      .post("http://localhost:4000/contact/add", info)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.response.request._response));

    this.setState({ name: "", email: "", comment: "" });
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="contact-container">
        <h1>contact us</h1>
        <p className="field">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
        </p>
        <p className="field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
        </p>
        <p className="field">
          <textarea
            name="comment"
            placeholder="Comment"
            rows="7"
            value={comment}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}
