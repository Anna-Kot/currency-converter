import './App.css';
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';
import * as s from './styles/App.styled';

function App() {
  return (
    <s.MainWrapper>
      <Header />
      <s.BodyWrapper>
        <CurrencyConverter />
      </s.BodyWrapper>
    </s.MainWrapper>
  );
}

export default App;
