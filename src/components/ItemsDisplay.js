import React from 'react';
import { Link } from 'react-router-dom';
import { displayItemRating, convertToMoney } from './Helper';

function ItemsDisplay(props) {
  const displayDepartmentItems = () => {
    return props.items.map((item) => {
      return (
        <div key={item._id} className="item">
          <Link to={`/shop/${item._id}`}>
            <img src={item.product_image_md} alt={item.product_name} />
            <p className="displayName">{item.product_name}</p>
            <p>{convertToMoney(item.product_price)}</p>
            <div className="itemDisplayRating">{displayItemRating(item.product_ratings)}</div>
          </Link>
          <hr></hr>
        </div>
      );
    });
  };

  //console.log(props, 'ItemsDisplay');

  return <div className="ItemsDisplay">{displayDepartmentItems()}</div>;
}

export default ItemsDisplay;
