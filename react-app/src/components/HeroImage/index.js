import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// Styles
import { Wrapper, Content, Image, Text } from './HeroImage.styles';

const HeroImage = ({ product, callback, prevProduct, nextProduct }) => (
  <Wrapper>
    <FaArrowAltCircleLeft className="left-arrow" onClick={prevProduct} />
      <Content onClick={callback}>
        <Text>
          { product['nome'] }
        </Text>
        <Image>
          <img src={ product['imagem'] } alt="Produto"/>
        </Image>
      </Content>
    <FaArrowAltCircleRight className="right-arrow" onClick={nextProduct} />
  </Wrapper>
);

export default HeroImage;