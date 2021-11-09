import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const SignIn = styled.div`
  float: left;
  width: 50%;
  padding-left: 80px;

  p {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  input {
    width: 220px;
  }

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 100px;
    font-display: middle;
    background-color:rgb(112, 19, 6);
    width: 120px;
    height: 50px;
    color: white;
    font-size: larger;
    display: block;
  }
`;

export const Login = styled.div`
  float: right;
  border-left: 1px solid gray;
  width: 50%;
  padding-left: 80px;

  p {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  input {
    width: 220px;
  }

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 100px;
    font-display: middle;
    background-color:rgb(112, 19, 6);
    width: 120px;
    height: 50px;
    color: white;
    font-size: larger;
    display: block;
  }
`;
