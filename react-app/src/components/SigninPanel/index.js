import React, { useState } from "react";

import { Wrapper, Content, SignIn, Login } from "./SigninPanel.styles";

const SiginPanel = ({ users, setUser, setLogin, setSignin, setAdmin }) => {

  const [ nome, setNome ] = useState("");
  const [ sobrenome, setSobrenome ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ password2, setPassword2 ] = useState("");

  const [ errorSignIn, setErrorSignIn ] = useState(null);

  const [ emailLogin, setEmailLogin ] = useState("");
  const [ passwordLogin, setPasswordLogin ] = useState("");

  const [ errorLogin, setErrorLogin ] = useState(null);

  const setInfo = () => {
    setUser({
      'nome': nome,
      'sobrenome': sobrenome,
      'email': email,
      'password': password,
      'sexo': '',
      'nascimento': '',
      'endereco': '',
      'ddd': '',
      'telefone': ''
    });

    setLogin(true);

    setSignin(false);
  }

  const createAccount = () => {
    if (nome !== "" && sobrenome !== "" && email !== "" && password !== "" && password2 !== "") {
      if (password === password2) {

        var ignore = false;

        users.forEach(user => {
          if (user['email'] === email) {
            ignore = true;
            return true;
          }
        });

        if (!ignore) {
          setInfo();
        }
        else {
          setErrorSignIn('Usuário já cadastrado!');
        }
      }
      else {
        setErrorSignIn('Confirmação de senha inválida!');
      }
    }
    else {
      setErrorSignIn('Dados inválidos!');
    }
  }

  const setUserLogin = (user) => {
    setUser(user);

    setLogin(true);

    setSignin(false);
  }

  const loginAccount = () => {
    if (emailLogin !== "" && passwordLogin !== "") {

      if (emailLogin === "admin" && passwordLogin === "admin") {
        setAdmin(true);
      }

      var emailFinded = false;
      var passwordRight = false;

      users.forEach(user => {
        if (user['email'] === emailLogin) {
          emailFinded = true;
          if (user['password'] === passwordLogin) {
            setUserLogin(user);
            passwordRight = true;
            return true;
          } 
        }
      });

      if (!emailFinded) {
        setErrorLogin('Email inválido!');
      }
      else {
        if (!passwordRight) {
          setErrorLogin('Senha incorreta!');
        }
      }
    }
    else {
      setErrorLogin('Dados inválidos!');
    }
  }

  return (
    <Wrapper>
      <Content>
        <SignIn>
          <h2>
            Novo Usuário
          </h2>

          <p>
            Nome:
          </p>
          <input 
            type='text' 
            placeholder='Nome'
            onChange={event => setNome(event.currentTarget.value)}
          />

          <p>
            Sobrenome:
          </p>
          <input 
            type='text' 
            placeholder='Sobrenome'
            onChange={event => setSobrenome(event.currentTarget.value)}
          />

          <p>
            Email:
          </p>
          <input 
            type="email" 
            placeholder='Email'
            onChange={event => setEmail(event.currentTarget.value)}
          />

          <p>
            Senha:
          </p>
          <input 
            type="password" 
            onChange={event => setPassword(event.currentTarget.value)}
          />

          <p>
            Confirmação senha:
          </p>
          <input 
            type="password" 
            onChange={event => setPassword2(event.currentTarget.value)}
          />

          <br />

          <button type="button" onClick={createAccount}>
            <span>
              CRIAR
            </span>
          </button>

          {errorSignIn && (
            <h2>
              {errorSignIn}
            </h2>
          )}
        </SignIn>
        <Login>
          <h2>
            Usuário Existente
          </h2>

          <p>
            Email:
          </p>
          <input 
            type="email" 
            placeholder='Email'
            onChange={event => setEmailLogin(event.currentTarget.value)}
          />

          <p>
            Senha:
          </p>
          <input 
            type="password" 
            onChange={event => setPasswordLogin(event.currentTarget.value)}
          />

          <br />

          <button type="button" onClick={loginAccount}>
            <span>
              ENTRAR
            </span>
          </button>

          {errorLogin && (
            <h2>
              {errorLogin}
            </h2>
          )}
        </Login>
      </Content>
    </Wrapper>
  )
}

export default SiginPanel;
