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
import third_div_1 from "../product_picture/third_div_1.jpeg";
import third_div_2 from "../product_picture/third_div_2.jpeg";
import third_div_3 from "../product_picture/third_div_3.jpeg";
import third_div_4 from "../product_picture/third_div_4.jpeg";
// import footer_cover_div from "../pictures/footer_cover_div.jpeg";


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
      navigate("/Login"); // Navigate to the home page route
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
          <button className={style.add_to_cart_button}>
            onClick={handleAddToCart}
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
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
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
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
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
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
      </div>

      {/* view all div */}

      <div className={style.view_all_button_div}>
        <button className={style.view_all_button}> View All</button>
      </div>

      {/* first advert div */}

      <div className={style.second_navbar}>
        <div>
          <img src={second_div_1} height={250} alt="" width={170} />
          <h2>#15,450</h2>
          <h5>Men sneakers</h5>
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
        <div>
          <img src={second_div_2} height={250} width={170} alt="" />
          <h2>#15,500</h2>
          <h5>Men sneakers</h5>
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
        <div>
          <img src={second_div_3} height={250} alt="" width={170} />
          <h2>#15,000</h2>
          <h5>Men sneakers</h5>
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
        <div>
          <img src={second_div_4} height={250} width={170} alt="" />
          <h2>#15,100</h2>
          <h5>Men sneakers</h5>
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
      </div>

      {/*second view all div */}

      <div className={style.view_all_button_div}>
        <button className={style.view_all_button}> View All</button>
      </div>

      {/* third div */}

      <div className={style.third_navbar}>
        <div>
          <img src={third_div_1} height={250} alt="" width={170} />
          <h2>#3,595</h2>
          <h5>Men boxer</h5>
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
        <div>
          <img src={third_div_2} height={250} width={170} alt="" />
          <h2>#3,595</h2>
          <h5>Men boxer</h5>
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
        <div>
          <img src={third_div_3} height={250} alt="" width={170} />
          <h2>#3,595</h2>
          <h5>Men boxer</h5>
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
        <div>
          <img src={third_div_4} height={250} width={170} alt="" />
          <h2>#3,595</h2>
          <h5>Men boxer</h5>
          <button
            className={style.add_to_cart_button}
            onClick={handleAddToCart}
          >
            <b>add to cart</b>
          </button>
        </div>
      </div>

      {/*second view all div */}

      <div className={style.view_all_button_div}>
        <button className={style.view_all_button}> View All</button>
      </div>

      {/* fourt div */}

      <div className={style.fourth_navbar}>
        <div className={style.become_a_seller}>
          <div className={style.testimonials}>
            <h4>
              <b>This are some of our sellers testimony</b>
            </h4>
            <p>
              "Joining this platform was the best decision for my business!"{" "}
              <br />
              (Happy Seller)
            </p>
            <p>
              "The tools provided have made managing my sales so much easier"{" "}
              <br />
              (Satisfied Seller)
            </p>
            <p>
              "My sales have increased significantly since I started using this
              platform. <br /> (Highly recommended!")
            </p>
          </div>

          <div className={style.seller_register}>
            <h1>
              <span className={style.seller_color}>
                {" "}
                Want to become a seller
              </span>
            </h1>
            <h3>Register as a seller in the sign up page</h3>
            <button className={style.sign_up_button}>Sign Up Now</button>
            <ul className={style.seller_benefits}>
              <li>Reach a larger audience</li>
              <li>Easy management tools</li>
              <li>Support and resources</li>
            </ul>
          </div>
        </div>
      </div>

      {/* fifth div */}
      <div className={style.fifth_navbar}>
        <div className={style.footer_cover_div}>
          {/* <div className={style.first_footer_div}>
            <h1>Company</h1>
            <h3>About Us</h3>
            <h3>Our Services</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms and Conditions</h3>
          </div>
          <div className={style.second_footer_div}>
            <h1>Support</h1>
            <h3>Contact Us</h3>
            <h3>FAQ</h3>
            <h3>Shipping</h3>
            <h3>Return Policy</h3>
          </div> */}
          <div className={style.subscribe_div}>
            <h1>Subscribe to our newsletter</h1>
            <i>
              <input
                className={style.subscribe_input}
                type="email"
                placeholder="Enter your email"
              />
            </i>
            <br></br>
            <button className={style.subscribe_button}>Subscribe</button>
          </div>
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
