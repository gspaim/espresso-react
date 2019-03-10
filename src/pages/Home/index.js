import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "./styles";

export default class Home extends Component {
  state = {
    loading: false
  };

  render() {
    const { loading } = this.state;
    return (
      <Form>
        <span className="title"> Tópicos </span>
      </Form>
    );
  }
}
