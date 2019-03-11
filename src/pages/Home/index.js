import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form, ContainerTitle } from "./styles";
import moment from "moment";
import TopicList from "../../components/TopicList";
import Api from "../../services/Api";
import { Container } from "../../components/TopicList/styles";

export default class Home extends Component {
  state = {
    topics: [],
    loading: false,
    topicError: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({
      loading: false,
      topics: await this.getTopics()
    });
  }

  getTopics = async () => {
    this.setState({ loading: true });

    const auth =
      JSON.parse(await localStorage.getItem("@EspressoPosts:loginInfo")) || [];

    const userEmail = auth[0].email;
    const userToken = auth[0].authentication_token;

    try {
      const { data: response } = await Api.get(`topics`, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-User-Email": userEmail,
          "X-User-Token": userToken
        }
      });
      return response;
    } catch (err) {
      this.setState({ topicError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, topics } = this.state;
    return (
      <Fragment>
        <ContainerTitle>
          <span className="title"> Tópicos </span>
        </ContainerTitle>
        <Container>
          <TopicList topics={topics} />
        </Container>
      </Fragment>
    );
  }
}
