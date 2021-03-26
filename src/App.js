import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import ItemPage from './components/ItemPage';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getLocalStorage = () => {
    const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
    setCartItems(cartItems);
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div className="App">
      <Router basename="/">
        <Nav cart={cartItems} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route
            path="/shop/:id"
            render={(props) => <ItemPage {...props} cart={{ cartItems, setCartItems }} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => <Cart {...props} cart={{ cartItems, setCartItems }} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
