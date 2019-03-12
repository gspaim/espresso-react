import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Post = styled.div`
  width: 700px;
  min-height: 50px;
  max-height: 100px;
  background-color: #f2f3f7;
  border-radius: 3px;
  margin: 0 10px;
  display: flex;
  padding: 20px;

  div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;

    .message {
      font-size: 18px;
    }

    footer {
      text-align: end;

      small {
        font-size: 14px;
        color: #666;
      }
    }
  }
`;
