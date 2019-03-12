import React from "react";
import PropTypes from "prop-types";
import { Container, Topic, StyledLink } from "./styles";
import moment from "moment";
import { Link } from "react-router-dom";

const TopicList = ({ topics }) => (
  <Container>
    {topics.map(topic => (
      <Topic key={topic.id}>
        <header>
          <StyledLink to={{ pathname: "/Posts", state: { topic: topic } }}>
            <strong>{topic.title}</strong>
          </StyledLink>
          <small>{topic.description}</small>
          <small className="endPosition">
            {moment(topic.created_at).fromNow()}
          </small>
        </header>
      </Topic>
    ))}
  </Container>
);

TopicList.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      created_at: PropTypes.string
    }).isRequired
  )
};

export default TopicList;
