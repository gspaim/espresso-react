import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const Topic = styled.div`
  width: 300px;
  background-color: #d9dce9;
  border-radius: 3px;
  margin: 0 10px;
  display: flex;
  flex-direction: row;

  header {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: left;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:visited,
  &:link,
  &:active {
    color: #696aa8;
    text-decoration: none;
  }

  &:hover {
    color: #52d89f;
  }
`;
