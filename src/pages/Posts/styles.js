import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  padding-bottom: 300px;

  .emptyTopic {
    padding: 50px;
    font-size: 18px;
    color: #fff;
    min-width: 700px;
    text-align: center;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Box = styled.form`
  width: 700px;
  position: fixed;
  z-index: 1000;
  bottom: 1rem;
  border-radius: 3px;
  background-color: #d9dce9;
  display: flex;
  flex-direction: row;

  textarea {
    height: 80px;
    padding: 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? "2px solid #f00" : 0)};
    width: 100%;
    resize: none;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  button {
    width: 100%;
    height: 55px;
    padding: 0 20px;
    background: #56baae;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    &:hover {
      background: #52d89f;
      cursor: pointer;
    }
  }
  ul {
    list-style: none;
    width: 100%;
    li {
      font-weight: bold;
      padding: 12px 20px;
    }
  }
`;
