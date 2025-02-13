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
        <div className={style.company_name}>
          <h1 className={style.name}>
            <i>
              @whales<sub>market</sub>
            </i>
          </h1>
        </div>

        <div className={style.search_bar}>
          <div className={style.navbar_search_div}>
            <input
              className={style.nav_bar_search_input}
              type="text"
              placeholder="Search product and cartegory"
            />
          </div>
          <div className={style.search_bar_button}>
            <button className={style.search}>Search</button>
          </div>
        </div>

        <div className={style.login_logout_and_cartDiv}>
          <div className={style.cartlogo}>
            <img src={cartlogo} alt="Cart Logo" width={150} height={33} />
            <span className={style.cartCount}>{cartCount}</span>
          </div>

          {/* <div className={style.navButton}> */}
          <div>
            <Customizedbutton
              style={style.Loginbutton}
              type="submit"
              textContent="Login"
              onClick={handleNavigate}
              route="/"
              // className={style}
            />
          </div>

          <div>
            <Customizedbutton
              style={style.Logoutbutton}
              type="submit"
              textContent="Logout"
              // onClick={handleNavigateToHomePage}
              // route="/homePage"
              // className={style}
            />
          </div>
          {/* </div> */}
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

      <div>
        <button onClick={handleAddToCart}>Add Item</button>
        <button onClick={handleRemoveFromCart}>Remove Item</button>
      </div>
    </div>
  );
};

export default HomePage;
