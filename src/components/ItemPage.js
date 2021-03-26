import React, { useEffect, useState } from 'react';
import { fetchStuff, displayItemRating, convertToMoney, saveToLocalStorage } from './Helper';

function ItemPage(props) {
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const { value, max, min } = e.target;

    if (value < Number(min) || value > Number(max)) {
      setMessage('Outside of Stock Range');
      return;
    }

    setMessage('');
    setQuantity(Number(value));
  };

  const handleAddToCart = () => {
    if (props.cart.cartItems === null) return;

    let value;
    const cart = props.cart.cartItems.map((cartItem) => {
      if (cartItem.id === item._id) {
        value = true;

        if (cartItem.quantity + quantity > item.product_stock) {
          setMessage('Max Stock Already in Cart');
          return { ...cartItem, quantity: item.product_stock };
        }

        setMessage(`${quantity} Added to Cart | ${cartItem.quantity + quantity} in Cart`);
        return { ...cartItem, quantity: cartItem.quantity + quantity };
      }

      return cartItem;
    });
    props.cart.setCartItems(cart);
    saveToLocalStorage(cart);

    if (value === true) return;

    setMessage(`${quantity} Added to Cart`);
    props.cart.setCartItems([
      ...props.cart.cartItems,
      { id: item._id, quantity: quantity, data: item },
    ]);
    saveToLocalStorage([...props.cart.cartItems, { id: item._id, quantity: quantity, data: item }]);
  };

  const displayReviews = () => {
    if (item.product_reviews === undefined) return;
    return item.product_reviews.map((review, index) => {
      return (
        <div key={index} className="singleReview">
          <div className="reviewHeader">
            <i className="fas fa-user"></i>
            <p>Anonymous</p>
          </div>
          <div className="reviewRating">{displayItemRating(review.review_rating)}</div>
          <p>{review.review_details}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    fetchStuff(
      `https://dummyproducts-api.herokuapp.com/api/v1/products/${props.match.params.id}`,
      setItem
    );
  }, [props.match.params.id]);

  //console.log(item);

  return (
    <div className="ItemPage">
      <img src={item.product_image_lg} alt={'item'} />
      <div>
        <div className="itemPageRight">
          <div className="itemDetails">
            <h1>{item.product_name}</h1>
            <p>{item.product_department}</p>
            <div className="itemPageRating"> {displayItemRating(item.product_ratings)}</div>
            <p className="itemPageDes">{item.product_description}</p>
          </div>
          <div className="itemPageCart">
            <p className="itemPagePrice">CAD {convertToMoney(item.product_price)}</p>
            <p className="itemPageStock">Left in Stock: {item.product_stock}</p>
            <div className="itemPageButtons">
              <input
                className="itemPageQuantity"
                type="number"
                min="1"
                max={item.product_stock}
                value={quantity}
                onChange={handleChange}
              />
              <button className="itemPageAdd" type="button" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <p className="itemPageError">{message && message}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="reviews">
            <h2>Product Reviews</h2>
            <h3>Recent Reviews</h3>
            <div>{displayReviews()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
