import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Section from './components/Section';
// import ContainerExample from './components/Section2';
import GridExample from './components/Section3';
import AutoLayoutExample from './components/Section4';
import AutoLayoutExample2 from './components/Section5';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import About from './components/About';
import Booktable from './components/Booktable';
import Wish from './components/Wishlist';
import Menu from './components/Menu';
import ProductDetail from './components/Products';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wish />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route element={<GridExample />} />
          <Route element={<AutoLayoutExample />} />
          <Route path='/about' element={<About />} />
          <Route element={<AutoLayoutExample2 />} />
          <Route path='/booktable' element={<Booktable />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
