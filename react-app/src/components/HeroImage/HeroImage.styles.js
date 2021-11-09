import styled from "styled-components";

export const Wrapper = styled.div`
  height: 743px;
  width: 100%;
  background-color: rgb(95, 95, 95);
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
`;

export const Content = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background-color: #e2e2e2;
  border-radius: 20px;

  cursor: pointer;
`;

export const Image = styled.div`
  height: calc(100% - 100px);
  padding-bottom: 40px;
  width: 100%;

  img {
    height: 100%;
    width: auto;
    display:block;
    margin:auto;
    border-radius: 20px;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: var(--fontSuperBig);
  text-align: center;
`;
