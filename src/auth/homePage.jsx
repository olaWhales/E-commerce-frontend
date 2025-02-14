import React, { useState } from "react";
import style from "../styles/homePage.module.css";
import {useNavigate } from "react-router-dom";
import Customizedbutton from "../customButton/customButton";
import marketpicture from "../pictures/market_picture.jpeg";
import cartlogo from "../pictures/cart.png";
import cloth from "../pictures/cloth_display.jpeg";
import chair from "../pictures/chair_display.jpeg";
import advert from "../pictures/advert.jpeg"
import welcomeWoman from "../pictures/welcomeWoman.jpg"; 
import welcome from "../pictures/welcome.jpeg";
import first_div_1 from "../product_picture/first_div_1.jpeg";
import first_div_2 from "../product_picture/first_div_2.jpeg";
import first_div_3 from "../product_picture/first_div_3.jpeg"
import first_div_4 from "../product_picture/first_div_4.jpeg";
import second_div_1 from "../product_picture/second_div_1.jpeg";
import second_div_2 from "../product_picture/second_div_2.jpeg";
import second_div_3 from "../product_picture/second_div_3.jpeg";
import second_div_4 from "../product_picture/second_div_4.jpeg";



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
        {/* <div className={style.company_name}> */}
        <h1 className={style.name}>
          <i>@whales</i>
        </h1>
        {/* </div> */}

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
            <img src={cartlogo} alt="Cart.png" />
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

      {/* maquewe display */}
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

      {/* advert display */}
      <div className={style.advert}>
        <img src={advert} height={200} alt="" width={1310} />
      </div>

      <div className={style.firstDivDisplay}>
        <div className={style.first_advert_color}>
          <img
            className={style.first_div_1}
            src={first_div_1}
            width={200}
            height={250}
            alt=""
          />
          <h2>#5,000</h2>
          <h5>Men jean trouser</h5>
          <button className={style.apply}>
            <b>add to cart</b>
          </button>
        </div>
        <div className={style.first_advert_color}>
          <img
            className={style.first_div_2}
            src={first_div_2}
            width={180}
            height={250}
            alt=""
          />
          <h2>#5,000</h2>
          <h5>Men jean trouser</h5>
          <button className={style.apply}>
            <b>add to cart</b>
          </button>
        </div>
        <div className={style.first_advert_color}>
          <img
            className={style.first_div_3}
            src={first_div_3}
            width={170}
            height={250}
            alt=""
          />
          <h2>#5,000</h2>
          <h5>Women jean trouser</h5>
          <button className={style.apply}>
            <b>add to cart</b>
          </button>
        </div>
        <div className={style.first_advert_color}>
          <img
            className={style.first_div_4}
            src={first_div_4}
            width={170}
            height={250}
            alt=""
          />

          <h2>#5,000</h2>
          <h5>Women jean trouser</h5>
          <button className={style.apply}>
            <b>add to cart</b>
          </button>
        </div>
      </div>

      {/* <div className={style.second_navbar}>
        <div>
          <img src={cloth} height={490} alt="" width={730} />
        </div>
        <div>
          <img src={chair} height={490} width={785} alt="" />
        </div>
      </div> */}

      <div>
        <button onClick={handleAddToCart}>Add Item</button>
        <button onClick={handleRemoveFromCart}>Remove Item</button>
      </div>
    </div>
  );
};

export default HomePage;
