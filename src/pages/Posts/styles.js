import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;

  .emptyTopic {
    padding: 50px;
    font-size: 18px;
    color: #fff;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const PostList = styled.div`
  width: 800px;
  min-height: 200px;
  border-radius: 3px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  background-color: #d9dce9;
`;

export const Post = styled.div`
  width: 700px;
  min-height: 50px;
  max-height: 100px;
  background-color: #f2f3f7;
`;
