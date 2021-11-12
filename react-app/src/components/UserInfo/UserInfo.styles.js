import styled from "styled-components";

export const Content = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 130px;
  line-height: 2;
  float: left;
`;

export const Right = styled.div`
  line-height: 2;

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  #dia {
    margin-right: 10px;
  }

  #ano {
    margin-left: 10px;
  }

  #endereco {
    width: 300px;
  }

  #ddd {
    width: 30px;
    margin-right: 10px;
  }

  #tel {
    width: 100px;
  }

  #pass {
    width: 140px;
  }

  button {
    margin: 20px 20px;
    margin-bottom: 10px;
    font-display: middle;
    background-color:rgb(112, 19, 6);
    width: 120px;
    height: 50px;
    color: white;
    font-size: larger;
    display: block;
  }
`;
