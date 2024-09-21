import React, { useEffect, useState } from 'react';
import { apiKey, currencyArray, indexArray } from '../../utils';
import * as s from './CurrencyConverter.styled';

const CurrencyConverter = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [activeType, setActiveType] = useState(1);

  const converterCurrency = async () => {
    const fromCur = activeType === 1 ? currency1 : currency2;
    const toCur = activeType === 1 ? currency2 : currency1;
    const amount = activeType === 1 ? amount1 : amount2;

    try {
      const res = await fetch(
        `https://api.getgeoapi.com/v2/currency/convert?api_key=${apiKey}&from=${fromCur}&to=${toCur}&amount=${amount}&format=json`,
      );
      const data = await res.json();
      if (data.status === 'success') {
        if (activeType === 1) {
          setAmount2(parseFloat(data.rates[toCur].rate_for_amount).toFixed(2));
        } else {
          setAmount1(parseFloat(data.rates[toCur].rate_for_amount).toFixed(2));
        }
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error('Помилка при виконанні запиту:', error);
    }
  };

  const handleCurrencyChange = (value, type) => {
    if (type === 1) {
      setCurrency1(value);
    } else {
      setCurrency2(value);
    }
    setActiveType(type);
  };

  const handleAmountChange = (value, type) => {
    if (type === 1) {
      setAmount1(value);
      if (amount1 < 0) {
        setAmount1(0.1);
      }
    } else {
      setAmount2(value);
      if (amount2 < 0) {
        setAmount2(0.1);
      }
    }
    setActiveType(type);
  };

  useEffect(() => {
    converterCurrency();
  }, [amount1, amount2, currency1, currency2, activeType]);

  return (
    <s.MainWrapper>
      <p>Конвертація Валюти:</p>
      {indexArray.map((_, index) => (
        <s.InputGroup key={index}>
          <select
            value={index === 0 ? currency1 : currency2}
            onChange={(e) => handleCurrencyChange(e.target.value, index + 1)}
          >
            {currencyArray.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            type='number'
            min={0}
            value={index === 0 ? amount1 : amount2}
            onChange={(e) => handleAmountChange(e.target.value, index + 1)}
          />
        </s.InputGroup>
      ))}
    </s.MainWrapper>
  );
};

export default CurrencyConverter;
