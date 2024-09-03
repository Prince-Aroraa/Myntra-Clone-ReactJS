import React from 'react'
import { useSelector } from 'react-redux';

function BagCartRightBlock() {

  const bagItems = useSelector(store=>store.Bag);
  const items = useSelector(store=>store.items);
  const finalItems = items.filter(item=>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex>=0;
  });

  let Curr_Price = 0;
  let Total_MRP = 0;
  let discount = 0;
  
  finalItems.map(item=>{
    Curr_Price += item.current_price;
    Total_MRP += item.original_price;
    discount = Total_MRP-Curr_Price;

  })


  return (
    <div className="right_block">
            <div className="order_container">
              <div className="order_detail">PRICE DETAILS ({bagItems.length} item)</div>
              <div className="order_summary">
                <div className="price_detail">
                  <span className="price_span">Total MRP</span>
                  <span className="price_detail_value">₹{Total_MRP}</span>
                </div>
                <div className="price_detail">
                  <span className="price_span">Discount on MRP</span>
                  <span className="price_detail_value">
                    <span className="price_detail_free">₹{discount}</span>
                  </span>
                </div>
                <div className="price_detail">
                  <span className="price_span">Coupon discount</span>
                  <span className="price_detail_value">
                    <span className="apply_coupon">Apply Coupon</span>
                  </span>
                </div>
                <div className="price_detail">
                  <span className="price_span">
                    Platform fee
                    <span className="know_more">Know More</span>
                  </span>
                  <span className="price_detail_value">
                    <span className="price_detail_free">FREE</span>
                  </span>
                </div>
                <div className="price_detail shipping_text">
                  <span className="price_span">
                    Shipping fee
                    <span className="know_more">Know More</span>
                  </span>
                  <span className="price_detail_value">
                    <span className="shipping_fee">₹79</span>
                    <span className="price_detail_free">FREE</span>
                  </span>
                </div>
                <div className="free_shipping_text">Free shipping for you</div>
                <div className="order_total">
                  <span className="total_amount">Total Amount</span>
                  <span className="total_amount_value">₹{Curr_Price}</span>
                </div>
              </div>
              <div>
                <button className="place_order_btn">
                  <div className="place_order">place order</div>
                </button>
              </div>
            </div>
          </div>
  )
}

export default BagCartRightBlock