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
  _isMounted = false;
  auth = null;

  async componentDidMount() {
    this._isMounted = true;
    this.setState({ loading: true });

    const response = await this.getTopics();

    if (this._isMounted) {
      this.setState({
        loading: false,
        topics: response
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getTopics = async () => {
    if (this._isMounted) {
      this.setState({ loading: true });

      this.auth = JSON.parse(
        await localStorage.getItem("@EspressoPosts:loginInfo")
      );

      if (this.auth != null) {
        const userEmail = this.auth[0].email;
        const userToken = this.auth[0].authentication_token;

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
      }
    }
  };

  render() {
    const { topics } = this.state;
    if (this.auth != null) {
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
    } else {
      return <Fragment />;
    }
  }
}
