import './App.css';
import Content from './components/Content/index.js';
import Footer from './components/Footer/index.js';
import Header from "./components/Header/index.js";
import MainContent from './components/MainContent/index.js';
import NavigationMenu from './components/NavigationMenu/index.js';

function App() {
  return (
    <>
      <Header />
      <NavigationMenu/>
      <div className="main">
        <Content text="Content 1" active={true}/>
        <MainContent/>
        <Content text="Content 2" active={false}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
