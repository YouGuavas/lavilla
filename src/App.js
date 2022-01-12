import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FGLogo from './images/FGLogo.png';

import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Catering from './Catering';

import './App.css';

function App() {
  const test = <Home />
  return (
    <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />}/>
            <Route path="/Catering" element={<Catering />}/>
            <Route path="/Contact%20Us" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}


function Footer() {
  return(
    <div className="grid p-6 place-items-center h-1/4">
      <p>LaVilla Family Dining & Pizzeria</p>
      <p>Proud Member of</p>
      <a href="https://www.flintandgenesee.org/" target="_blank"><img alt="Flint & Genesee Chamber of Commerce logo" src={FGLogo} /></a>
    </div>
  );
}
export default App;
