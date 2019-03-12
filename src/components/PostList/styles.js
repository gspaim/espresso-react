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
  background-color: #f2f3f7;
  border-radius: 3px;
  display: flex;
  padding: 20px;
  margin-top: 10px;
  div {
    padding: 10px;
    align-items: left;
    width: 100%;
    word-wrap: break-word;

    .message {
      font-size: 16px;
    }

    footer {
      padding-top: 10px;
      text-align: end;

      small {
        font-size: 14px;
        color: #666;
        font-style: italic;
      }
    }
  }
`;
