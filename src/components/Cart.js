import React, { useState } from 'react';
import { displayItemRating, convertToMoney, saveToLocalStorage } from './Helper';

function Cart({ cart }) {
  const { cartItems, setCartItems } = cart;
  const [message, setMessage] = useState();

  const handleRemoveItem = (id) => {
    if (cartItems === null) return;

    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    setMessage('');
    saveToLocalStorage(updatedCartItems);
  };

  const handleQuantityChange = (id, e) => {
    if (cartItems === null) return;

    let { value, max, min } = e.target;
    [value, max, min] = [Number(value), Number(max), Number(min)];

    setMessage('');

    const updatedCartItems = cartItems.map((item) => {
      if (item.id !== id) return item;

      if (value > max || value < min) return item;

      return { ...item, quantity: value };
    });

    setCartItems(updatedCartItems);
    saveToLocalStorage(updatedCartItems);
  };

  const displayCartItems = () => {
    if (cartItems === null) return;

    return cartItems.map((item) => {
      return (
        <div key={item.id} className="checkoutItem">
          <img src={item.data.product_image_sm} alt={item} />
          <p>{item.data.product_name}</p>
          <input
            className="checkoutQuantity"
            type="number"
            min="1"
            max={item.data.product_stock}
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e)}
          />

          <p>
            <b>Single:</b> {convertToMoney(item.data.product_price)}
          </p>
          <p>
            <b>Total:</b> {convertToMoney(item.data.product_price * item.quantity)}
          </p>
          <div className="checkoutRating">{displayItemRating(item.data.product_ratings)}</div>
          <button type="button" onClick={() => handleRemoveItem(item.id)}>
            Remove from Cart
          </button>
          <hr></hr>
        </div>
      );
    });
  };

  const handleCheckOut = () => {
    setMessage('Thanks for Shopping!');
  };

  const calculateTotals = (type) => {
    if (cartItems === null) return;

    const subTotal = cartItems.reduce((acc, cur) => {
      return acc + cur.quantity * cur.data.product_price;
    }, 0);
    const tax = subTotal * 0.13;
    const ship = subTotal / 100 >= 50 || subTotal === 0 ? 0 : 1500;

    if (type === 'sub') {
      return convertToMoney(subTotal);
    } else if (type === 'tax') {
      return convertToMoney(tax);
    } else if (type === 'ship') {
      return ship === 1500 ? convertToMoney(ship) : 'Free';
    }

    return convertToMoney(subTotal + tax + ship);
  };

  //console.log(cartItems);

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <div className="cartOverview">
        <div className="cartItems">{displayCartItems()}</div>
        <div className="total">
          <div>
            <b>Subtotal:</b> {calculateTotals('sub')}
          </div>
          <div>
            <b>Tax (13%):</b> {calculateTotals('tax')}
          </div>
          <div>
            <b>Shipping:</b> {calculateTotals('ship')}
          </div>
          <hr></hr>
          <div>
            <b>Total:</b> {calculateTotals()}
          </div>
          <button className="checkOut" type="button" onClick={handleCheckOut}>
            Check Out
          </button>
          <div className="checkOutMessage">{message && message}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
