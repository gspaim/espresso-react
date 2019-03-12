import React, { Component, Fragment } from "react";
import Api from "../../services/Api";

import { Container, ContainerTitle, Box } from "./styles";

import PostList from "../../components/PostList";

export default class Posts extends Component {
  state = {
    topic: "",
    loading: false,
    postError: false,
    posts: [],
    newMessage: ""
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

  handlePost = async e => {
    e.preventDefault();

    if (this.state.newMessage == "") {
      this.setState({
        postError: true
      });
    } else {
      this.setState({ loading: true });

      const auth =
        JSON.parse(await localStorage.getItem("@EspressoPosts:loginInfo")) ||
        [];

      const userEmail = auth[0].email;
      const userToken = auth[0].authentication_token;

      var postData = {
        post: {
          topic_id: this.state.topic.id,
          message: this.state.newMessage,
          imgUrl: ""
        }
      };

      console.log(postData);

      let axiosConfig = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "X-User-Email": userEmail,
          "X-User-Token": userToken
        }
      };

      try {
        const { data: response } = await Api.post(
          `posts`,
          postData,
          axiosConfig
        );

        this.setState({
          postError: false,
          posts: await this.getPosts(this.state.topic.id)
        });
      } catch (err) {
        console.log(err);
        this.setState({
          postError: true
        });
      } finally {
        this.setState({ loading: false, newMessage: "" });
      }
    }
  };

  render() {
    const { topic, posts, loading, postError, newMessage } = this.state;

    if (posts.length > 0) {
      return (
        <Fragment>
          <ContainerTitle>
            <span className="title"> {topic.title} </span>
          </ContainerTitle>
          <Container>
            <PostList posts={posts} />
            <Box withError={postError} onSubmit={this.handlePost}>
              <ul>
                <li>
                  <textarea
                    type="text"
                    placeholder="Nova Mensagem"
                    value={newMessage}
                    onChange={e =>
                      this.setState({ newMessage: e.target.value })
                    }
                  />
                </li>

                <li>
                  <button type="submit">
                    {loading ? (
                      <i className="fa fa-spinner fa-pulse" />
                    ) : (
                      "Postar"
                    )}
                  </button>
                </li>
              </ul>
            </Box>
          </Container>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <ContainerTitle>
            <span className="title"> {topic.title} </span>
          </ContainerTitle>

          <Container>
            <span className="emptyTopic">
              Sem posts no momento, go first? :D
            </span>
            <Box withError={postError} onSubmit={this.handlePost}>
              <ul>
                <li>
                  <textarea
                    type="text"
                    placeholder="Nova Mensagem"
                    value={newMessage}
                    onChange={e =>
                      this.setState({ newMessage: e.target.value })
                    }
                  />
                </li>

                <li>
                  <button type="submit">
                    {loading ? (
                      <i className="fa fa-spinner fa-pulse" />
                    ) : (
                      "Postar"
                    )}
                  </button>
                </li>
              </ul>
            </Box>
          </Container>
        </Fragment>
      );
    }
  }
}
