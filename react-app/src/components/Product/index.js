import React from 'react';

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

const Product = ({ product }) => (
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
                <p class="price">
                  R$ { parseFloat(product['price']).toFixed(2) }
                </p>
                <p class="partion-price">
                  ou até 12x de { parseFloat(product['price'] / 12).toFixed(2) }
                </p>
              </Price>
              <Shopping>

              </Shopping>
            </ShoppingContent>
          </DescriptionContent>
        </Info>
      </Content>
  </Wrapper>
);

export default Product;