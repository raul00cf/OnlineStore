import styled from "styled-components";

export const Wrapper = styled.div`
  height: 743px;
  width: 100%;
  background-color: #e2e2e2;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
`;

export const Content = styled.div`
  margin: 40px auto;
  width: 80%;
  border-radius: 40px;
  box-shadow: 10px 10px 5px gray;
  background-color: white;
  display: flex;
`;

export const Image = styled.div`

  img {
    width: 500px;
    height: 500px;
    border-radius: 20px;
    margin: 40px;
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
  
`;
