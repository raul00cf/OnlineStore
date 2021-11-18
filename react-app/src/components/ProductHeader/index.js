import React from 'react';

import { Wrapper, Content, Option } from './ProductHeader.styles';

const ProductHeader = ({ maskFilter, filtFilter }) => (
  <Wrapper>
    <Content>
      <Option onClick={maskFilter}>
        MÁSCARAS
      </Option>
      <Option onClick={filtFilter}>
        FILTROS
      </Option>
    </Content>
  </Wrapper>
);

export default ProductHeader;