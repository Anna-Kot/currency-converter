import React, { useEffect, useState } from 'react';
import * as s from './Header.styled';

const Header = () => {
  const [currencyUSD, setCurrencyUSD] = useState('');
  const [currencyEUR, setCurrencyEUR] = useState('');
  const [date, setDate] = useState('');
  const getUSD = async () => {
    const res = await fetch(
      'https://api.getgeoapi.com/v2/currency/convert?api_key=7c759c58debffe262892ec7e669e007eb28ef3a9&from=EUR&to=UAH&amount=1&format=json',
    );
    const data = await res.json();
    setCurrencyUSD(data.rates.UAH.rate);
    setDate(data.updated_date);
  };
  const getEUR = async () => {
    const res = await fetch(
      'https://api.getgeoapi.com/v2/currency/convert?api_key=7c759c58debffe262892ec7e669e007eb28ef3a9&from=USD&to=UAH&amount=1&format=json',
    );
    const data = await res.json();
    setCurrencyEUR(data.rates.UAH.rate);
  };

  useEffect(() => {
    getUSD();
    getEUR();
    // console.log(date);
    // console.log(currencyUSD);
    // console.log(currencyEUR);
  }, [date, currencyUSD, currencyEUR]);
  return (
    <s.HeaderWrapper>
      <h3>Курс обміну валют на сьогодні (Україна)</h3>
      <s.DateLine>
        <p>Оновлено:</p>
        <p>{date}</p>
      </s.DateLine>
      <s.CurrencyVal>
        <p> $ {currencyUSD}</p>
        <p>€ {currencyEUR}</p>
      </s.CurrencyVal>
    </s.HeaderWrapper>
  );
};

export default Header;
