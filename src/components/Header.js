import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function Header() {
  return (
    <div className="App">
      <h1> App </h1>
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">Another-Azon</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon fontSize="large" className="header__searchImage" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">
            <ShoppingBasketIcon fontSize="large" />
          </span>
          <span className="nav__itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
