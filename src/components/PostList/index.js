import React from "react";
import PropTypes from "prop-types";
import { Container, Post } from "./styles";
import moment from "moment";

const PostList = ({ posts }) => (
  <Container>
    {posts.map(post => (
      <Post key={post.id}>
        <div>
          <span className="message">{post.message}</span>
          <footer>
            <small>{moment(post.created_at).fromNow()}</small>
          </footer>
        </div>
      </Post>
    ))}
  </Container>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
      created_at: PropTypes.string
    }).isRequired
  )
};

export default PostList;
