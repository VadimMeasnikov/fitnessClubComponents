
import './style/App.scss';
import Navigation from './Components/Navigation/Navigation';
import HeaderBg from './Components/HeaderBg/HeaderBg';
import MainContent from './Components/MainContent/MainContent';
import MainSlogan from './Components/MainSlogan/MainSlogan';
import MainContent1 from './Components/MainContent1/MainContent1';
import MainApp from './Components/MainApp/MainApp';
import Footer from './Components/Footer/Footer';
import Rates from './Components/Rates/Rates';

const rates = [
  {
    price: 8,
    heading: 'Разовое занятие',
    interval: '/раз',
    discount: '0%',
    color: 'pink'
  },
  {
    price:75,
    heading: 'Месячный абонемент',
    interval:'/месяц',
    discount: '10%',
    color: 'grey'
  },
  {
    price:400,
    heading: 'Полугодовой абонемент',
    interval: '/полгода',
    discount: '17%',
    color: 'white'
  },
  {
    price:700,
    heading: 'Годовой абонемент',
    interval: '/год',
    discount: '25%',
    color: 'blue'
  }
]

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeaderBg />
      <MainContent />
      <MainSlogan />
      <MainContent1 />
      <div className="rates">
        <div className="rates-container">
          <Rates price = {rates[0].price} heading = {rates[0].heading} interval = {rates[0].interval} discount = {rates[0].discount} color = {rates[0].color}/>
          <Rates price = {rates[1].price} heading = {rates[1].heading} interval = {rates[1].interval} discount = {rates[1].discount} color = {rates[1].color} />
          <Rates price = {rates[2].price} heading = {rates[2].heading} interval = {rates[2].interval} discount = {rates[2].discount} color = {rates[2].color} />
          <Rates price = {rates[3].price} heading = {rates[3].heading} interval = {rates[3].interval} discount = {rates[3].discount} color = {rates[3].color} />
        </div>
      </div>
      <MainApp />
      <Footer />
    </div>
  );
}

export default App;
