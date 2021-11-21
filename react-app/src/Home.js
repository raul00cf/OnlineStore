import React, { useState } from "react";

import Divider from "./components/Divider";
import HeroImage from "./components/HeroImage";
import MainHeader from './components/MainHeader';
import ProductHeader from './components/ProductHeader';
import SiginPanel from "./components/SigninPanel";
import Product from "./components/Product";
import UserPanel from "./components/UserPanel";
import BuyProcess from "./components/BuyProcess";

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
  'description': 'Máscara preta de tecido contra o Covid-19',
  'id': 0
},
{
  'tipo': 'mascara',
  'nome': 'Máscada preta pano',
  'imagem': Masc2,
  'price': 15.75,
  'storage': 8,
  'sold': 1,
  'description': 'Máscara confortável de pano contra o Covid-19',
  'id': 1
},
{
  'tipo': 'mascara',
  'nome': 'Máscada preta tecido quadriculada',
  'imagem': Masc3,
  'price': 29.99,
  'storage': 25,
  'sold': 3,
  'description': 'Máscara importada de pano quadriculado preta',
  'id': 2
},
{
  'tipo': 'mascara',
  'nome': 'Máscada cirúrgica branca',
  'imagem': Masc4,
  'price': 15.75,
  'storage': 83,
  'sold': 17,
  'description': 'Máscara nacional cirurgica branca',
  'id': 3
},
{
  'tipo': 'mascara',
  'nome': 'Máscada cirúrgica azul',
  'imagem': Masc5,
  'price': 15.75,
  'storage': 76,
  'sold': 24,
  'description': 'Máscara nacional cirurgica azul',
  'id': 4
},
{
  'tipo': 'mascara',
  'nome': 'Máscada 3M branca',
  'imagem': Masc6,
  'price': 59.99,
  'storage': 14,
  'sold': 1,
  'description': 'Máscara importada 3M branca contra Covid-19',
  'id': 5
},{
  'tipo': 'filtro',
  'nome': 'Máscara filtro Darth Vader',
  'imagem': Filtro1,
  'price': 79.99,
  'storage': 10,
  'sold': 0,
  'description': 'Máscara filtro inspirada Darth Vader para Covid-19',
  'id': 6
},
{
  'tipo': 'filtro',
  'nome': 'Máscada filtro branca',
  'imagem': Filtro2,
  'price': 65.50,
  'storage': 15,
  'sold': 5,
  'description': 'Máscara filtro simples branca',
  'id': 7
},
{
  'tipo': 'filtro',
  'nome': 'Máscara filtro alumínio',
  'imagem': Filtro3,
  'price': 59.99,
  'storage': 8,
  'sold': 2,
  'description': 'Máscara filtro importada de alumínio',
  'id': 8
},
{
  'tipo': 'filtro',
  'nome': 'Máscada filtro pano cinza',
  'imagem': Filtro4,
  'price': 64.99,
  'storage': 40,
  'sold': 10,
  'description': 'Máscara filtro nacional de pano cinza contra o Covid-19',
  'id': 9
},
{
  'tipo': 'filtro',
  'nome': 'Máscada filtro transparente',
  'imagem': Filtro5,
  'price': 29.99,
  'storage': 66,
  'sold': 14,
  'description': 'Máscara filtro de plástico transparente',
  'id': 10
},
{
  'tipo': 'filtro',
  'nome': 'Máscada filtro RGB Razer',
  'imagem': Filtro6,
  'price': 99.99,
  'storage': 29,
  'sold': 6,
  'description': 'Máscara filtro importada com luzes RBG Razer',
  'id': 11
}];

const initialProduct = 0;

var users = [adminUser];

const Home = () => {
  const [ signingIn, setSigningIn ] = useState(false);
  const [ login, setLogin ] = useState(false);
  const [ user, setUser ] = useState(initialUser);
  const [ products, ] = useState(initialProducts)
  const [ product, setProduct ] = useState(initialProduct);
  const [ filter, setFilter ] = useState('mascara');
  const [ showingProduct, setShowingProduct ] = useState(null);
  const [ admin, setAdmin ] = useState(false);
  const [ userPage, setUserPage ] = useState(false);
  const [ cart, setCart ] = useState([]);
  const [ buying, setBuying ] = useState(false);


 function decide() {
  
  if (signingIn) {
    return (
      <SiginPanel users={users} setUser={(us) => {
        if (!users.includes(us)) {
          users.push(us);
        }
        setUser(us);
        console.log(users);
      }} setLogin={setLogin} setSignin={setSigningIn} setAdmin={setAdmin} />
    )
  }

  else if (userPage) {
    return (
      <UserPanel admin={admin} user={user} products={products} />
    )
  }

  else if (showingProduct) {
    return (
      <Product
       product={products[product]} 
       addCart={(newItem) => {
        var finded = -1;

        for (var i=0; i < cart.length; i++) {
          if (cart[i].productId === newItem.productId) {
            finded = i;
            break;
          }
        }

        if (finded !== -1) {
          var copy = cart;
          copy[i].quantity += newItem.quantity;
          setCart(copy);
        }
        else {
          setCart([...cart, newItem])
        }
       }}
      />
    )
  }

  else if (buying) {
    return (
      <>
      <BuyProcess boughtItemsNumber={cart.length} />
      </>
    )
  }

  else { 
    return (
      <HeroImage 
       product={products[product]} 
       callback={() => {setShowingProduct(true)}} 
       prevProduct={() => {
        var minimun;
        var maximun;

        if (filter === 'mascara') {
          minimun = 0;
          maximun = 5;
        }
        else {
          minimun = 6;
          maximun = 11;
        }

        if (product === minimun) {
          setProduct(maximun);
        }
        else {
          setProduct(product - 1);
        }
      }}
      nextProduct={() => {
        var minimun;
        var maximun;

        if (filter === 'mascara') {
          minimun = 0;
          maximun = 5;
        }
        else {
          minimun = 6;
          maximun = 11;
        }

        if (product === maximun) {
          setProduct(minimun);
        }
        else {
          setProduct(product + 1);
        }
      }}
    /> 
  )
  }
}
  
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
          setShowingProduct(false);
          setBuying(false);
        }}
        callbackSign={() => setSigningIn(true)} 
        callbackLogout={() => {
          setLogin(false);
          setUser(initialUser)
          setUserPage(false);
          setAdmin(false);
        }}
        callbackCart={() => {
          console.log(cart) ; 
          setBuying(true);
          setShowingProduct(false);
          setUserPage(false);
          setSigningIn(false);
        }}
        cartNumber={cart.length}
      />
      <ProductHeader
        maskFilter={() => {
          if (filter !== 'mascara') {
            setFilter('mascara');
            setProduct(0);
          }
          setShowingProduct(false);
        }}
        filtFilter={() => {
          if (filter !== 'filtro') {
            setFilter('filtro');
            setProduct(6);
          }
          setShowingProduct(false);
        }}  
      />
      <Divider />

      {decide()}
       
    </>  
  )
}

export default Home;