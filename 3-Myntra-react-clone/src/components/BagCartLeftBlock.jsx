import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

function BagCartLeftBlock({ item }) {

  const dispatch = useDispatch();

  const handleOnRemoveItem = ()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className="card_item">
      <span
        className="material-symbols-outlined close_btn"
        onClick={handleOnRemoveItem}
      >
        close
      </span>
      <div className="cart_image">
        <img src={item.image} alt="" />
      </div>
      <div className="cart_content">
        <p className="item_brand">{item.company}</p>
        <p className="item_name">{item.item_name}</p>
        <p className="item_seller">Sold by: ARVIND LIFESTYLE BRANDS LIMITED</p>
        <div className="qty_container">
          <span>Qty: 1</span>
        </div>
        <div className="item_price_container">
          <span className="item_curr_price">₹{item.current_price}</span>
          <span className="item_actual_price">₹{item.original_price}</span>
          <span className="item_discount">{item.discount_percentage}%OFF</span>
        </div>
        <div className="return_period_container">
          <span className="material-symbols-outlined return_symbol">
            keyboard_return
          </span>
          <span className="item_return_period">{item.return_period} days</span>
          <span className="return_available">return available</span>
        </div>
      </div>
    </div>
  );
}

export default BagCartLeftBlock;
