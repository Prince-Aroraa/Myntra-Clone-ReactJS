import React from 'react'
import { Link } from 'react-router-dom'

function BagHeader() {
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
          <ol className="checkout_steps">
            <li className="step active">Bag</li>
            <li className="divider" />
            <li className="step">adress</li>
            <li className="divider" />
            <li className="step">payment</li>
          </ol>
          <div className="secure_container">
            <img
              src="images/secure-image.png"
              alt="100%"
              className="secure_icon"
            />
            <div className="secure">100% Secure</div>
          </div>
        </div>
      </header>
  )
}

export default BagHeader