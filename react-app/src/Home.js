import React, { useState } from "react";

import Divider from "./components/Divider";
import HeroImage from "./components/HeroImage";
import MainHeader from './components/MainHeader';
import ProductHeader from './components/ProductHeader';
import SiginPanel from "./components/SigninPanel";
import Product from "./components/Product";
import UserPanel from "./components/UserPanel";

import Masc1 from './images/masc1.png';
import Masc2 from './images/masc2.png';
import Masc3 from './images/masc3.png';
import Masc4 from './images/masc4.jpg';
import Masc5 from './images/masc5.jpg';
import Masc6 from './images/masc6.jpg';

const initialUser = {
  'nome': '',
  'sobrenome': '',
  'email': '',
  'password': '',
  'sexo': '',
  'nascimento': '',
  'endereco': '',
  'ddd': '',
  'telefone': ''
};

const adminUser = {
  'nome': 'admin',
  'sobrenome': '',
  'email': 'admin',
  'password': 'admin',
  'sexo': '',
  'nascimento': '',
  'endereco': '',
  'ddd': '',
  'telefone': ''
}

const initialProducts = [{
  'nome': 'Máscada preta tecido',
  'imagem': Masc1,
  'price': 23.50,
  'storage': 15,
  'sold': 0,
  'description': 'Máscara preta de tecido contra o Covid-19'
},
{
  'nome': 'Máscada preta pano',
  'imagem': Masc2,
  'price': 15.75,
  'storage': 8,
  'sold': 1,
  'description': 'Máscara confortável de pano contra o Covid-19'
},
{
  'nome': 'Máscada preta tecido quadriculada',
  'imagem': Masc3,
  'price': 29.99,
  'storage': 25,
  'sold': 3,
  'description': 'Máscara importada de pano quadriculado preta'
},
{
  'nome': 'Máscada cirúrgica branca',
  'imagem': Masc4,
  'price': 15.75,
  'storage': 83,
  'sold': 17,
  'description': 'Máscara nacional cirurgica branca'
},
{
  'nome': 'Máscada cirúrgica azul',
  'imagem': Masc5,
  'price': 15.75,
  'storage': 76,
  'sold': 24,
  'description': 'Máscara nacional cirurgica azul'
},
{
  'nome': 'Máscada 3M branca',
  'imagem': Masc6,
  'price': 59.99,
  'storage': 14,
  'sold': 1,
  'description': 'Máscara importada 3M branca contra Covid-19'
}];

const initialProduct = 5;

var users = [adminUser];

const Home = () => {
  const [ signingIn, setSigningIn ] = useState(false);
  const [ login, setLogin ] = useState(false);
  const [ user, setUser ] = useState(initialUser);
  const [ products, setProducts ] = useState(initialProducts)
  const [ product, setProduct ] = useState(initialProduct);
  const [ showingProduct, setShowingProduct ] = useState(null);
  const [ admin, setAdmin ] = useState(false);
  const [ userPage, setUserPage ] = useState(false);

  return (
    <>
      <MainHeader 
        login={login} 
        callbackUser={() => {
          console.log(admin);
          if (login) {
            setUserPage(true);
          }
        }}
        callbackReset={() => {
          setSigningIn(false);
          setUserPage(false);
        }}
        callbackSign={() => setSigningIn(true)} 
        callbackLogout={() => {
          setLogin(false);
          setUser(initialUser)
          setUserPage(false);
          setAdmin(false);
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
        }} setLogin={setLogin} setSignin={setSigningIn} setAdmin={setAdmin} />
      ) : (userPage ? (
        <UserPanel admin={admin} user={user} />
      ) : (showingProduct ? (
          <Product product={products[product]} />
        ) : (
          <HeroImage product={products[product]} callback={() => {setShowingProduct(true)}} />
        )
      ))}
    </>
  )
}

export default Home;