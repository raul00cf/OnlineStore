import styled from "styled-components";

export const Wrapper = styled.div`
  height: 743px;
  width: 100%;
  background-color: rgb(95, 95, 95);
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .left-arrow {
    position: relative;
    left: 20px;
    font-size: 3rem;
    color: black;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .right-arrow {
    position: relative;
    right: 20px;
    font-size: 3rem;
    color: black;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  @media screen and (max-width: 1250px) {
    height: fit-content;
    min-height: calc(600 / 100vw * 100vh);
    min-width: 600px;
  }
  
  @media screen and (max-width: 700px) {

    .left-arrow {
      left: 40px;
    }

    .right-arrow {
      right: 40px;
    }
  }
`;

export const Content = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background-color: #e2e2e2;
  border-radius: 20px;
  box-shadow: 10px 10px 20px black;
  cursor: pointer;

  @media screen and (max-width: 1250px) {
    display: block;
    width: 580px;
    height: fit-content;
  }
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

  @media screen and (max-width: 1250px) {
    height: fit-content;
    padding: 40px;

    img {
      width: 100%;
      height: auto;

    }
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
