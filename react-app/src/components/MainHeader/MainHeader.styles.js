import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 11rem;
  display: block;
  background: var(--background);
  border-bottom: 1px solid;
  border-color: #bdbdbd;
`;

export const Content = styled.div`
  width: 1200px;
  max-width: 90%;
  height: 100%;
  display: block;
  margin: 0 auto;

  button {
    text-decoration: none;
    border: none;
    background: none;
  }
`;

export const LogoContainer = styled.img`
  width: 11rem; 
  height: 11rem;
  float: left;

  cursor: pointer;

  :hover {
    opacity: 0.75;
  }
`;

export const NavigationContainer = styled.ul`
  float: right;
  height: 100%;

  button {
    height: 100%;
    display: table;
    float: left;
    padding: 0px 8px;

    text-decoration: none;
    border: none;
    background: none;

    cursor: pointer;

    li {
      display: table-cell;
      vertical-align: middle;
    }
  }
`;