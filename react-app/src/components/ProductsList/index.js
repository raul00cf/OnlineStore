import React from "react";

import { Content } from "./ProductList.styles";

import ProductOption from "../ProductOption";

const ProductsList = ({ products }) => {

  return (
    <Content>
      {products.map(product => (
        <ProductOption product={product} />
      ))}
    </Content>
  )
}

export default ProductsList;
