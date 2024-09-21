import styled from 'styled-components';
import { SILVER, GREEN } from '../styles/Globals.styled';

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: ${SILVER};
`;
export const BodyWrapper = styled.div`
  height: min-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 500px;
`;
