import React, { Component }  from 'react';
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Routes, Route, Switch } from 'react-router-dom';
import DashBoard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/" exact element={<DashBoard></DashBoard>}></Route> {/*anasayfa geldiğinde ve exact match olduğunda component olarak Dashboard'ı aç */}
        <Route path="/product" element={<DashBoard></DashBoard>}></Route>
        <Route path="/cart" element={<CartDetail></CartDetail>}></Route>
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct></AddOrUpdateProduct>}></Route> {/*Parametre göndereceğimizde bunu iki nokta üst üste'ile gönderiyoruz */}
        <Route path="/saveproduct" element={<AddOrUpdateProduct></AddOrUpdateProduct>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </Container>
  );
}

export default App;