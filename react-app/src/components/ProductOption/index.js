import React, { useState } from "react";

import { Wrapper, Content } from "./ProductOption.styles";

const ProductOption = ({ product }) => {

  const [ nome, setNome ] = useState(product.nome);
  const [ price, setPrice ] = useState(product.price);
  const [ storage, setStorage ] = useState(product.storage);
  const [ description, setDescription ] = useState(product.description);
  
  const [ salvo, setSalvo ] = useState(false);

  const saveChanges = () => {
    product.nome = nome;
    product.price = price;
    product.storage = storage;
    product.description = description;

    setSalvo(true);
  }

  return (
    <Wrapper>
      <Content>
        <div className='image'>
          <img src={product.imagem} alt={product.nome} />
        </div>
        <div className='info'>
          <div className='nome'>
            <p>
              Nome 
              <input
                type='text'
                value={nome}
                onChange={(event)=> {
                  setNome(event.target.value);
                  setSalvo(false);
                }}
              />
            </p>
          </div>
          <div className='price_storage'>
            <p>
              Preço 
              <input
                id='price'
                type='number'
                value={price}
                onChange={(event)=> {
                  setPrice(event.target.value);
                  setSalvo(false);
                }}
              />

              Estoque 
              <input
                id='storage'
                type='number'
                value={storage}
                onChange={(event)=> {
                  setStorage(event.target.value);
                  setSalvo(false);
                }}
              />
            </p>
          </div>
          <div className='description'>
            <p>
              Descrição
            </p>
            <textarea rows='5' onChange={(event) => {
              setDescription(event.target.value);
              setSalvo(false);
            }}>
              {description}
            </textarea>
            <p id='button_area'>
              <button onClick={saveChanges}>
                Salvar
              </button>
              {salvo && (
                <p id='salvo'>
                  Salvo!
                </p>
                )}
            </p>
          </div>
        </div>
      </Content>
    </Wrapper>
  )
};

export default ProductOption;
