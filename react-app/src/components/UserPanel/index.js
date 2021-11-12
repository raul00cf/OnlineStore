import React, { useState } from 'react';

import { Wrapper, Content, Header, Info } from './UserPanel.styles';

import UserInfo from '../UserInfo';

const UserPanel = ({ admin, user }) => {

  const [ option, setOption ] = useState('info');

  return (
  <Wrapper>
    <Content>
      <Header>
        Informações da Conta
      </Header>
      <Info>
        {admin ? (
          <p>
            alo
          </p>
        ) : (
          <UserInfo user={user} />
        )}
      </Info>
    </Content>
  </Wrapper>
)};

export default UserPanel;
