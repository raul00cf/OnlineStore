import React, { useState } from 'react';

// Styles
import { 
  Wrapper, 
  Content, 
  Image, Info, 
  Storage, 
  DescriptionContent, 
  Description,
  DescriptionBox,
  ShoppingContent,
  Price,
  Shopping
} from './Product.styles';

const Product = ({ product, addCart }) => {

  const [ quantity, setQuantity ] = useState(1);

  return (
    <Wrapper>
        <Content>
          <Image>
            <img src={ product['imagem'] } alt="Produto"/>
          </Image>
          <Info>
            <p>
              { product['nome'] }
            </p>
            <Storage>
              <p>
                Quantidade em estoque: { product['storage'] }
              </p>
              <p>
                Número de vendas desse produto: { product['sold'] }
              </p>
            </Storage>
            <DescriptionContent>
              <Description>
                <p>
                  Descrição:
                </p>
                <DescriptionBox>
                  <p>
                    { product['description'] }
                  </p>
                </DescriptionBox>
              </Description>
              <ShoppingContent>
                <Price>
                  <p className="price">
                    R$ { parseFloat(product['price']).toFixed(2) }
                  </p>
                  <p className="partion-price">
                    ou até 12x de { parseFloat(product['price'] / 12).toFixed(2) }
                  </p>
                </Price>
                <Shopping>
                  Quantidadede:
                  <select
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                  >
                    {[...Array(50).keys()].map((number) => (
                      <option key={number+1} value={number+1}>{number+1}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => {
                      addCart({
                        productId: product.id,
                        quantity: parseInt(quantity)
                      });
                    }}
                  >
                    Adicionar ao carrinho
                  </button>
                </Shopping>
              </ShoppingContent>
            </DescriptionContent>
          </Info>
        </Content>
    </Wrapper>
  )
};

export default Product;