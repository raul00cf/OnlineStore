import React from 'react';

import { Wrapper, Content, Header, Info } from './UserPanel.styles';

import UserInfo from '../UserInfo';
import ProductsList from '../ProductsList';

const UserPanel = ({ admin, user, products }) => {

  return (
  <Wrapper>
    <Content>
      <Header>
        <h1>
          {admin ? (
            'Produtos'
          ) : (
            'Informações da Conta'
          )}
        </h1>
      </Header>
      <Info>
        {admin ? (
          <ProductsList products={products} />
        ) : (
          <UserInfo user={user} />
        )}
      </Info>
    </Content>
  </Wrapper>
)};

export default UserPanel;
