import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../store/bagSlice';
import { Link } from 'react-router-dom';

function ProductItem({item}) {
  const dispatch = useDispatch();

  const handleAddItem = ()=>{
    dispatch(bagActions.addToBag(item.id));

  }

  const bagItems = useSelector(store=>store.Bag);
  const elementFound = bagItems.indexOf(item.id)>=0;

  return (
    <div className="product">
        <div className="product_image">
          <img src={item.image} />
        </div>
        <div className="product_content">
          <h3 className="product_brand">{item.company}</h3>
          <h4 className="product-description">{item.item_name}</h4>
          <div className="product-price">
            <span className="product_curr_price">Rs.{item.current_price}</span>
            <span className="product_actual_price">
              Rs.{item.original_price}
            </span>
            <span className="product_discount_percentage">
              ({item.discount_percentage}%OFF)
            </span>
          </div>
          {elementFound?<Link to = "/bag">
          <button className="add_to_bag_btn" onClick={handleAddItem}>
            <div className="add_to_bag">
              <span className="material-symbols-outlined bag_icon">
                shopping_bag
              </span>
              <span className="bag">go to bag</span>
            </div>
          </button>
          </Link>:<button className="add_to_bag_btn" onClick={handleAddItem}>
            <div className="add_to_bag">
              <span className="material-symbols-outlined bag_icon">
                shopping_bag
              </span>
              <span className="bag">add to bag</span>
            </div>
          </button>}
          
          
        </div>
        <div className="rating_container">
          <span>{item.rating.stars}</span>
          <span className="material-symbols-outlined star_symbol">grade</span>
          <div className="rating_count">
            <div className="separator">|</div>
            {item.rating.count}
          </div>
        </div>
      </div>
  )
}

export default ProductItem