import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  .title {
    height: 55px;
    padding: 0 20px;
    color: #c9e9e5;
    font-size: 24px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  padding-top: 20px;
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
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #56baae;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    &:hover {
      background: #52d89f;
    }
  }
`;
