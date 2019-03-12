import React, { Component, Fragment } from "react";
import Api from "../../services/Api";

import { Container, ContainerTitle } from "./styles";

import PostList from "../../components/PostList";

export default class Posts extends Component {
  state = {
    topic: 0,
    loading: false,
    postError: false,
    posts: []
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({
      loading: false,
      topic: this.props.location.state.topic,
      posts: await this.getPosts(this.props.location.state.topic.id)
    });

    console.log(this.state.posts);
  }

  getPosts = async topicId => {
    this.setState({ loading: true });

    const auth =
      JSON.parse(await localStorage.getItem("@EspressoPosts:loginInfo")) || [];

    const userEmail = auth[0].email;
    const userToken = auth[0].authentication_token;

    try {
      const { data: response } = await Api.get(`posts/?by_topic=${topicId}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-User-Email": userEmail,
          "X-User-Token": userToken
        }
      });
      return response;
    } catch (err) {
      this.setState({ postError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { topic, posts, loading, postError } = this.state;

    if (posts.length > 0) {
      return (
        <Fragment>
          <ContainerTitle>
            <span className="title"> {topic.title} </span>
          </ContainerTitle>
          <Container>
            <PostList posts={posts} />
          </Container>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Container>
            <ContainerTitle>
              <span className="title"> {topic.title} </span>
            </ContainerTitle>

            <span className="emptyTopic">
              Sem posts no momento, go first? :D
            </span>
          </Container>
        </Fragment>
      );
    }
  }
}
