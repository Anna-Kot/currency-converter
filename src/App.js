import './App.css';
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';
import * as s from './styles/App.styled';

function App() {
  return (
    <s.BodyWrapper>
      <Header />
      <CurrencyConverter />
    </s.BodyWrapper>
  );
}

export default App;
