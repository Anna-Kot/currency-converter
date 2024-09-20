import React, { useEffect, useState } from 'react';
import { apiKey } from '../../utils';
import * as s from './Header.styled';

const Header = () => {
  const [currencyRates, setCurrencyRates] = useState({ USD: '', EUR: '' });
  const [date, setDate] = useState('');
  const getCurrency = async (fromCurrency) => {
    try {
      const res = await fetch(
        `https://api.getgeoapi.com/v2/currency/convert?api_key=${apiKey}&from=${fromCurrency}&to=UAH&amount=1&format=json`,
      );
      const data = await res.json();
      if (data.status === 'success') {
        setCurrencyRates((state) => ({
          ...state,
          [fromCurrency]: data.rates.UAH.rate,
        }));
        setDate(data.updated_date);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    getCurrency('USD');
    getCurrency('EUR');
  }, []);
  return (
    <s.HeaderWrapper>
      <h3>Курс обміну валют на сьогодні (Україна)</h3>
      <s.DateLine>
        <p>Оновлено:</p>
        <p>{date}</p>
      </s.DateLine>
      <s.CurrencyVal>
        <p> $ {currencyRates.USD}</p>
        <p>€ {currencyRates.EUR}</p>
      </s.CurrencyVal>
    </s.HeaderWrapper>
  );
};

export default Header;
