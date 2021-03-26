import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div>
        <div className="homeTitle">
          <i className="fas fa-dice fa-3x"></i>
          <h1>Dice Roll</h1>
        </div>
        <p className="slogan">Random Products at Random Prices</p>
        <Link to="/shop">
          <button className="homeButton" type="text">
            Shop Now
          </button>
        </Link>
        <p>Free Shipping on Orders Over $50</p>
      </div>
    </div>
  );
}

export default Home;
