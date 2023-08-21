import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<ProductList />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route element={<Default />} />
    </Routes>
  );
}

export default Routing;
