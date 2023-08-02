import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Headlinecard from './component/Headlinecard';
import Food from './component/Food';
import Categoey from './component/Categoey';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Headlinecard/>
      <Food/>
      <Categoey/>
    </>
  );
}

export default App;
