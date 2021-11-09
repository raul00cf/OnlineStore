import React from 'react';

// Styles
import { Wrapper, Content, Image, Text } from './HeroImage.styles';

const HeroImage = ({ product, callback }) => (
  <Wrapper>
      <Content onClick={callback}>
        <Text>
          { product['nome'] }
        </Text>
        <Image>
          <img src={ product['imagem'] } alt="Produto"/>
        </Image>
      </Content>
  </Wrapper>
);

export default HeroImage;