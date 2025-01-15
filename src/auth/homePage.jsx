import React, { useState } from "react";
import style from "../styles/homePage.module.css";
import {useNavigate } from "react-router-dom";
import Customizedbutton from "../customButton/customButton";
import marketpicture from "../pictures/market_picture.jpeg";
import cartlogo from "../pictures/cart_logo.jpg";
import cloth from "../pictures/cloth_display.jpeg";
import chair from "../pictures/chair_display.jpeg";
import welcomeWoman from "../pictures/welcomeWoman.jpg"; 
import welcome from "../pictures/welcome.jpeg";

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // this is route method
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/buyerLogin"); // Navigate to the home page route
    };
    // const handleNavigateToHomePage = () =>{
    //   navigate("/homePage")
    // }


  return (
    <div>
      <div className={style.navBar_body}>
        <div>
          <h1>
            <i>
              @ALT<sub>market</sub>
            </i>
          </h1>
        </div>

        {/* Market Image */}
        {/* <div className={style.market}>
                <img src={marketpicture} alt="Market" width={20} height={15} />
            </div> */}

        {/* Search Bar */}
        <div className={style.search_bar}>
          <div className={style.navbardiv}>
            <input
              className={style.search_input_box}
              type="text"
              placeholder="Search"
            />
          </div>
          <div className={style.button}>
            <button className={style.search}>Search</button>
          </div>
        </div>

        {/* Cart Logo */}
        <div className={style.cartlogo}>
          <img src={cartlogo} alt="Cart Logo" width={150} height={33} />
          <span className={style.cartCount}>{cartCount}</span>
        </div>

        <div className={style.navButton}>
          <Customizedbutton
            style={style.Loginbutton}
            type="submit"
            textContent="Login"
            onClick={handleNavigate}
            route="/"
            // className={style}
          />

          <Customizedbutton
            style={style.Logbutton}
            type="submit"
            textContent="Logout"
            // onClick={handleNavigateToHomePage}
            // route="/homePage"
            // className={style}
          />
        </div>

        {/* <div className={style.logout_button}>
          <button className={style.logout}>Logout</button>
        </div> */}
      </div>

      <div className={style.firstDivDisplay}>
        <div>
          <img className={style.welcomeImg} src={welcome} alt="" />
        </div>
        <div>
          <img className={style.welcomeWoman} src={welcomeWoman} alt="" />
        </div>
      </div>

      <div className={style.second_navbar}>
        <div>
          <img src={cloth} height={490} alt="" width={730} />
        </div>
        <div>
          <img src={chair} height={490} width={785} alt="" />
        </div>
      </div>

      <div className={style.second_navbar_ProductFlyer}>
        <div className={style.marquee}>
          <h1 className={style.modern}>
            <i>WE HAVE MODERN DESIGN WITH HIGH QUALITY MATERIALS,</i>{" "}
          </h1>
          <h1 className={style.modern2}>
            <i>IT'S ALL IN AFFORDABLE PRICE</i>
          </h1>
        </div>
      </div>

      {/* Cart Section */}
      <div>
        <button onClick={handleAddToCart}>Add Item</button>
        <button onClick={handleRemoveFromCart}>Remove Item</button>
      </div>
    </div>
  );
};

export default HomePage;
