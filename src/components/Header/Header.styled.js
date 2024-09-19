import styled from 'styled-components';
import { SILVER } from '../../styles/Globals.styled';

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: ${SILVER};
  margin: 0px auto 10px auto;
`;

export const DateLine = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const CurrencyVal = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 5px;
  }
`;
