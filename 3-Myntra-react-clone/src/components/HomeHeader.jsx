import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { useSelector } from 'react-redux';

function HomeHeader() {

  const bag = useSelector(store=>store.Bag);

  return (
    <header>
          <div className="nav_bar">
            <Link to="/">
              <img
                src="images/myntra_logo.webp"
                alt="Homo logo"
                className="nav_logo"
              />
            </Link>
            <nav className="min_nav_bar">
              <a href="#">men</a>
              <a href="#">women</a>
              <a href="#">kids</a>
              <a href="#">home &amp; Living</a>
              <a href="#">beauty</a>
              <a href="#">
                studio <sup>new</sup>
              </a>
            </nav>
            <div className="search-bar">
              <a>
                <span className="material-symbols-outlined search-icon">
                  search
                </span>
              </a>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="search-input"
              />
            </div>
            <div className="action-container">
              <div className="action-button">
                <span className="material-symbols-outlined action-icon">
                  person
                </span>
                <a href="#" className="action-text">
                  Profile
                </a>
              </div>
              <div className="action-button">
                <span className="material-symbols-outlined action-icon">
                  favorite
                </span>
                <a href="#" className="action-text">
                  Wishlist
                </a>
              </div>
              <div className="action-button-cart" id="bag_01">
              
                <span className="material-symbols-outlined action-icon">
                  shopping_bag
                </span>
                <Link to="/bag" className="action-text">
                  Bag
                </Link>

                {bag.length>0?<span className="bag_item_count">
              <span className="visually-hidden">unread messages</span>
              {bag.length}
          </span>:<span/>}
                
                
              
              </div>
              
            </div>
          </div>
        </header>
  )
}

export default HomeHeader