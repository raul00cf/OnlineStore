import React, { useState } from "react";

import Divider from "./components/Divider";
import HeroImage from "./components/HeroImage";
import MainHeader from './components/MainHeader';
import ProductHeader from './components/ProductHeader';
import SiginPanel from "./components/SigninPanel";
import Product from "./components/Product";

import imageText from './images/masc3.png';

const initialUser = {
  'nome': '',
  'sobrenome': '',
  'email': '',
  'password': ''
};

const initialProduct = {
  'nome': 'Máscada de Covid-19',
  'imagem': imageText,
  'price': 500,
  'storage': 10,
  'sold': 1,
  'description': 'descrição'
}

var users = [];

const Home = () => {
  const [ signingIn, setSigningIn ] = useState(false);
  const [ login, setLogin ] = useState(false);
  const [ user, setUser ] = useState(initialUser);
  const [ product, setProduct ] = useState(initialProduct);
  const [ showingProduct, setShowingProduct ] = useState(null);

  return (
    <>
      <MainHeader 
        login={login} 
        signingIn={signingIn}
        callbackReset={() => {
          setSigningIn(false);
        }}
        callbackSign={() => setSigningIn(true)} 
        callbackLogout={() => {
          setLogin(false);
          setUser(initialUser);
        }}
        callbackCart={() => {console.log(signingIn)}}
      />
      <ProductHeader />
      <Divider />
      {signingIn ? (
        <SiginPanel users={users} setUser={(us) => {
          if (!users.includes(us)) {
            users.push(us);
          }
          setUser(us);
          console.log(users);
        }} setLogin={setLogin} setSignin={setSigningIn} />
      ) : (showingProduct ? (
          <Product product={product} />
        ) : (
          <HeroImage product={product} callback={() => {setShowingProduct(true)}} />
        )
      )}
    </>
  )
}

export default Home;