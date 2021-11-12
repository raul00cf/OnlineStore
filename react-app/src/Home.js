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

import Filtro1 from './images/filtro1.jpg';
import Filtro2 from './images/filtro2.jpg';
import Filtro3 from './images/filtro3.jpg';
import Filtro4 from './images/filtro4.jpg';
import Filtro5 from './images/filtro5.jpg';
import Filtro6 from './images/filtro6.png';

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
  'tipo': 'mascara',
  'nome': 'Máscada preta tecido',
  'imagem': Masc1,
  'price': 23.50,
  'storage': 15,
  'sold': 0,
  'description': 'Máscara preta de tecido contra o Covid-19'
},
{
  'tipo': 'mascara',
  'nome': 'Máscada preta pano',
  'imagem': Masc2,
  'price': 15.75,
  'storage': 8,
  'sold': 1,
  'description': 'Máscara confortável de pano contra o Covid-19'
},
{
  'tipo': 'mascara',
  'nome': 'Máscada preta tecido quadriculada',
  'imagem': Masc3,
  'price': 29.99,
  'storage': 25,
  'sold': 3,
  'description': 'Máscara importada de pano quadriculado preta'
},
{
  'tipo': 'mascara',
  'nome': 'Máscada cirúrgica branca',
  'imagem': Masc4,
  'price': 15.75,
  'storage': 83,
  'sold': 17,
  'description': 'Máscara nacional cirurgica branca'
},
{
  'tipo': 'mascara',
  'nome': 'Máscada cirúrgica azul',
  'imagem': Masc5,
  'price': 15.75,
  'storage': 76,
  'sold': 24,
  'description': 'Máscara nacional cirurgica azul'
},
{
  'tipo': 'mascara',
  'nome': 'Máscada 3M branca',
  'imagem': Masc6,
  'price': 59.99,
  'storage': 14,
  'sold': 1,
  'description': 'Máscara importada 3M branca contra Covid-19'
},{
  'tipo': 'filtro',
  'nome': 'Máscara filtro Darth Vader',
  'imagem': Filtro1,
  'price': 79.99,
  'storage': 10,
  'sold': 0,
  'description': 'Máscara filtro inspirada Darth Vader para Covid-19'
},
{
  'tipo': 'filtro',
  'nome': 'Máscada filtro branca',
  'imagem': Filtro2,
  'price': 65.50,
  'storage': 15,
  'sold': 5,
  'description': 'Máscara filtro simples branca'
},
{
  'tipo': 'filtro',
  'nome': 'Máscara filtro alumínio',
  'imagem': Filtro3,
  'price': 59.99,
  'storage': 8,
  'sold': 2,
  'description': 'Máscara filtro importada de alumínio'
},
{
  'tipo': 'filtro',
  'nome': 'Máscada filtro pano cinza',
  'imagem': Filtro4,
  'price': 64.99,
  'storage': 40,
  'sold': 10,
  'description': 'Máscara filtro nacional de pano cinza contra o Covid-19'
},
{
  'tipo': 'filtro',
  'nome': 'Máscada filtro transparente',
  'imagem': Filtro5,
  'price': 29.99,
  'storage': 66,
  'sold': 14,
  'description': 'Máscara filtro de plástico transparente'
},
{
  'tipo': 'filtro',
  'nome': 'Máscada filtro RGB Razer',
  'imagem': Filtro6,
  'price': 99.99,
  'storage': 29,
  'sold': 6,
  'description': 'Máscara filtro importada com luzes RBG Razer'
}];

const initialProduct = 0;

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