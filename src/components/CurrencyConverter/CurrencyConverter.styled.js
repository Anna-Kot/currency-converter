import styled from 'styled-components';
import { GREEN, NEON, BORDO, YELLOW } from '../../styles/Globals.styled';

export const MainWrapper = styled.div`
  align-items: center;
  padding: 40px 50px;
  background-color: ${GREEN};

  p {
    font-size: 30px;
    margin: 0;
    margin-bottom: 30px;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;

  select {
    font-size: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
  select:hover,
  input:hover {
    color: ${YELLOW};
  }

  input {
    font-size: 25px;
    border: none;
    border-bottom: 2px solid ${BORDO};

    width: max-content;
    background-color: transparent;
    outline: none;
  }
  input:focus,
  input:active {
    border-bottom: 2px solid ${NEON};
    /* color: ${YELLOW}; */
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
