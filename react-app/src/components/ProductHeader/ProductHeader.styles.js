import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 35px;
  display: block;
  background: var(--background);

  @media screen and (max-width: 1250px) {
    min-width: 600px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  vertical-align:top;

  @media screen and (max-width: 1250px) {

  }
`;

export const Option = styled.button`
  width: 150px;
  height: 30px;
  margin: 0 10px;  
  margin-top: 1px;
  font-weight: 500;
  font-size: larger;

  text-decoration: none;
  border: none;
  background: none;

  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`;
