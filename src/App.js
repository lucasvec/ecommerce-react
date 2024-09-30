
import style from './index.css';
import Promo from "./components/promo/Promo.jsx"
import Header from "./components/header/header.jsx"
import Hero from "./components/hero/hero.jsx"
import Footer from "./components/footer/Footer.jsx"
import Sectors from './components/sectors/Sectors.jsx';

function App() {
  return (
    <>
      <Promo></Promo>
      <Header></Header>
      <Hero></Hero>
      <Sectors></Sectors>
      <Footer></Footer>
    </>
  );
}

export default App;
