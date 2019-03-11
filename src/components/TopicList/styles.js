import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const Topic = styled.div`
  width: 300px;
  background: #fff;
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
      color: gray;
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }
`;
