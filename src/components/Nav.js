import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="Nav">
      <Link to="/">
        <div className="storeName">
          <i className="fas fa-dice"></i>
          <p>Dice Roll</p>
        </div>
      </Link>
      <div className="navRight">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <i className="fas fa-shopping-bag fa-lg"></i>
          <span className="cartNumber">{props.cart.length ? props.cart.length : null}</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
