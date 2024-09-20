import React from 'react';
import { currencyArray, indexArray } from '../../utils';
import * as s from './CurrencyConverter.styled';

const CurrencyConverter = () => {
  return (
    <s.MainWrapper>
      <p>Конвертація Валюти:</p>
      {indexArray.map((index) => (
        <s.InputGroup key={index}>
          <select>
            {currencyArray.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input type='number' min={0} />
        </s.InputGroup>
      ))}
    </s.MainWrapper>
  );
};

export default CurrencyConverter;
