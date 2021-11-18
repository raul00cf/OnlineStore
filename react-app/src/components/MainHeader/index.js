import React from 'react';

import { Wrapper, Content, LogoContainer, NavigationContainer } from './MainHeader.styles';

import logo from "../../images/logo.png";
import signIn from "../../images/signin.svg";
import cart from "../../images/cart.svg";
import userIcon from "../../images/user.svg"

const MainHeader = ({ login, callbackUser, callbackReset, callbackSign, callbackLogout, callbackCart, cartNumber }) => (
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
            <p>
              <img src={signIn} alt="sing-in" />
              <span>
                {login ? "Log out" : "Sign in"}
              </span>
            </p>
          </li>
        </button>
        <button onClick={callbackCart}>
          <li>
            <p>
              <img src={cart} alt="cart" />
              <span>
                {cartNumber}
              </span>
            </p>
          </li>
        </button>
      </NavigationContainer>
    </Content>
  </Wrapper>
);

export default MainHeader;