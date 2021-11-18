import styled from "styled-components";

export const Wrapper = styled.div`
  height: 743px;
  width: 100%;
  background-color: #e2e2e2;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;

  @media screen and (max-width: 1250px) {
    height: fit-content;
    min-height: 743px;
    min-width: 600px;
  }
`;

export const Content = styled.div`
  margin: 40px auto;
  width: 80%;
  border-radius: 40px;
  box-shadow: 10px 10px 5px gray;
  background-color: white;
  display: flex;

  @media screen and (max-width: 1250px) {
    display: block;
    width: 580px;
  }
`;

export const Image = styled.div`

  img {
    width: 580px;
    height: 580px;
    border-radius: 60px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  float: right;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: 40px;

  p {
    font-size: var(--fontSuperBig);
  }

  @media screen and (max-width: 1250px) {
    margin-top: 0px;
    margin-right: 0px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const Storage = styled.div`
  margin-bottom: 10px;

  p {
    font-size: var(--fontSmaller);
  }
`;

export const DescriptionContent = styled.div`
  display: flex;
`;

export const Description = styled.div`
  float: left;
  width: calc(100% - 200px);
  padding-right: 40px;
  p {
    font-size: var(--fontBig);
  }
`;

export const DescriptionBox = styled.div`
  width: 100%;
  text-align: justify;
  padding-top: 10px;

  p {
    font-size: var(--fontSmall);
  }
`;

export const ShoppingContent = styled.div`
  float: right;
  width: 200px;
`;

export const Price = styled.div`
  width: 100%;
  text-align: right;

  .price {
    font-size: var(--fontBig);
  }

  .partion-price {
    font-size: var(--fontSmall);
    margin-top: -4px;
  }
`;

export const Shopping = styled.div`
  margin-top: 100px;
  font-size: large;

  button {
    margin: 50px auto;
    font-display: middle;
    background-color:rgb(112, 19, 6);
    width: 200px;
    height: 70px;
    color: white;
    font-size: larger;
    display: block;
  }

  @media screen and (max-width: 1250px) {
    margin-top: 20px;

    button {
      margin: 20px auto;
      margin-bottom: 0px;
    }
  }
`;
