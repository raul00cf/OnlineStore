import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 11rem;
  display: block;
  background: var(--background);
  border-bottom: 1px solid;
  border-color: #bdbdbd;

  @media screen and (max-width: 1250px) {
    height: fit-content;
    min-width: 600px;
  }
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

  @media screen and (max-width: 1250px) {
    height: fit-content;
    width: 100%;
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
  height: 11rem;
  padding-top: 75px;
  padding-bottom: 75px;

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

      p {
        display: flex;
      }

      img {
        width: 25px;
      }

      span {
        margin-top: 4px;
        margin-left: 3px;
        font-size: 17px;
      }

      .cart-number {
        display: inline-block;
        padding: .2rem .2rem;
        border-radius: 50%;
        font-size: 10px;
        text-align: center;
        background: #1779ba;
        color: #fefefe;
        position: relative;
      }
    }
  }
`;