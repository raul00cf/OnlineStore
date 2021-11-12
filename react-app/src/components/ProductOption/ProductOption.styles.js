import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  background-color: #e2e2e2;
  border-radius: 20px;
  box-shadow: 5px 5px 10px black;
  margin: 20px auto;
  padding: 10px;
`;

export const Content = styled.div`

  display: flex;

  img {
    float: left;
    border-radius: 18px;
    width: 250px;
    height: 250px;
    margin-right: 10px;
  }

  .info {
    padding: 20px;
    width: 100%;
  }

  .nome {
    padding: 5px;
    margin-bottom: 20px;

    p {
      margin: auto;
    }

    input { 
      margin-left: 38px;
      width: 500px;
    }
  }

  .price_storage {
    padding: 5px;
    margin-bottom: 20px;

    p {
      margin: auto;
    }

    #price {
      margin-left: 40px;
      margin-right: 20px;
      width: 200px;
    }

    #storage {
      margin-left: 20px;
    }

    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  }

  .description {
    display: flex;
    padding: 5px;

    textarea {
      width: 380px;
      margin-left: 10px;
      resize: none;
    }
  }

  #button_area {
    margin-left: 18px;
  }

  button {
    margin-top: 15px;
    margin-bottom: 5px;
    font-display: middle;
    background-color:rgb(112, 19, 6);
    width: 100px;
    height: 50px;
    color: white;
    font-size: larger;
    display: block;
  }

  #salvo {
    text-align: center;
  }
`;
