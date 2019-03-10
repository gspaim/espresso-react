import styled from "styled-components";

export const FormLogin = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;

  .messageLoginError {
    color: white;
    font-size: 18px;
  }

  input {
    flex: 2;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? "2px solid #f00" : 0)};
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
    li {
      font-weight: bold;
      padding: 12px 20px;
      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
    }
  }
`;
