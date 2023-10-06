
import './style/App.scss';
import Navigation from './Components/Navigation/Navigation';
import HeaderBg from './Components/HeaderBg/HeaderBg';
import MainContent from './Components/MainContent/MainContent';
import MainSlogan from './Components/MainSlogan/MainSlogan';
import MainContent1 from './Components/MainContent1/MainContent1';
import MainApp from './Components/MainApp/MainApp';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <HeaderBg/>
        <MainContent/>
        <MainSlogan/>
        <MainContent1/>
        <MainApp/>
        <Footer/>
    </div>
  );
}

export default App;
