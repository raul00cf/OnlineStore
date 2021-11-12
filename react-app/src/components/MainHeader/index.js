import React from 'react';

import { Wrapper, Content, LogoContainer, NavigationContainer } from './MainHeader.styles';

import logo from "../../images/masc1.png";
import signIn from "../../images/signin.svg";
import cart from "../../images/cart.svg";
import userIcon from "../../images/user.svg"

const MainHeader = ({ login, callbackUser, callbackReset, callbackSign, callbackLogout, callbackCart }) => (
  <Wrapper>
    <Content>
      <button onClick={callbackReset}>
        <LogoContainer src={logo} alt='Logo' />
      </button>
      <NavigationContainer>
        <button onClick={callbackUser}>
          <li>
            <img src={userIcon} alt="user" />
          </li>
        </button>
        <button onClick={() => {
            login ? (
              callbackLogout()
            ) : (
              callbackSign()
            )
          }}>
          <li>
            <img src={signIn} alt="sing-in" />
            <span>
              {login ? "Log out" : "Sign in"}
            </span>
          </li>
        </button>
        <button onClick={callbackCart}>
          <li>
            <img src={cart} alt="cart" />
            <span>
              0
            </span>
          </li>
        </button>
      </NavigationContainer>
    </Content>
  </Wrapper>
);

export default MainHeader;