import React from 'react';
import {  BrowserRouter ,Route, Switch } from 'react-router-dom';

import ItemDetails  from './modules/product-finder/pages/item-details/component'
import ItemProduct from './modules/product-finder/pages/items-products/component'
import Home from './modules/product-finder/pages/home/component';

import "./global-styles/app.scss"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={Home} /> 
          <Route exact={true} path="/items" component={ItemProduct} /> 
          <Route exact={false} path="/items/:params" component={ItemDetails}  />


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
