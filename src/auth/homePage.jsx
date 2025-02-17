import React, { useState } from "react";
import style from "../styles/homePage.module.css";
import { useNavigate } from "react-router-dom";
import Customizedbutton from "../customButton/customButton";
import marketpicture from "../pictures/market_picture.jpeg";
import cartlogo from "../pictures/cart.png";
import cloth from "../pictures/cloth_display.jpeg";
import chair from "../pictures/chair_display.jpeg";
import advert from "../pictures/new_boutique_image.jpg";
import welcomeWoman from "../pictures/welcomeWoman.jpg";
import welcome from "../pictures/welcome.jpeg";
import first_div_1 from "../product_picture/first_div_1.jpeg";
import first_div_2 from "../product_picture/first_div_2.jpeg";
import first_div_3 from "../product_picture/first_div_3.jpeg";
import first_div_4 from "../product_picture/first_div_4.jpeg";
import second_div_1 from "../product_picture/second_div_1.jpeg";
import second_div_2 from "../product_picture/second_div_2.jpeg";
import second_div_3 from "../product_picture/second_div_3.jpeg";
import second_div_4 from "../product_picture/second_div_4.jpeg";
import third_div_1 from "../product_picture/third_div_1.jpeg";
import third_div_2 from "../product_picture/third_div_2.jpeg";
import third_div_3 from "../product_picture/third_div_3.jpeg";
import third_div_4 from "../product_picture/third_div_4.jpeg";
import Screenshot from "../product_picture/Screenshot.png";

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  const handleRemoveFromCart = () => {
    setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Login");
  };

  // Array of product data
  const products = [
    {
      image: first_div_1,
      price: "#5,000",
      name: "Men jean trouser",
      size: "M",
    },
    {
      image: first_div_2,
      price: "#5,000",
      name: "Men jean trouser",
      size: "L",
    },
    {
      image: first_div_3,
      price: "#5,000",
      name: "Women jean trouser",
      size: "S",
    },
    {
      image: first_div_4,
      price: "#5,000",
      name: "Women jean trouser",
      size: "M",
    },
    {
      image: second_div_1,
      price: "#15,450",
      name: "Men sneakers",
      size: "42",
    },
    {
      image: second_div_2,
      price: "#15,500",
      name: "Men sneakers",
      size: "43",
    },
    {
      image: second_div_3,
      price: "#15,000",
      name: "Men sneakers",
      size: "40",
    },
    {
      image: second_div_4,
      price: "#15,100",
      name: "Men sneakers",
      size: "44",
    },
    {
      image: third_div_1,
      price: "#3,595",
      name: "Men boxer",
      size: "M",
    },
    {
      image: third_div_2,
      price: "#3,595",
      name: "Men boxer",
      size: "M, XL L, ,XXL",
    },
    {
      image: third_div_3,
      price: "#3,595",
      name: "Men boxer",
      size: "M, XL L, ,XXL",
    },
    {
      image: third_div_4,
      price: "#3,595",
      name: "Men boxer",
      size: "M, XL L, ,XXL",
    },
  ];

  return (
    <div>
      <div className={style.navBar_body}>
        <img src={Screenshot} alt="Screenshot.png" width={100} height={35} />
        <div className={style.search_bar}>
          <div className={style.navbar_search_div}>
            <input
              className={style.nav_bar_search_input}
              type="text"
              placeholder="Search product here"
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
          <div>
            <Customizedbutton
              style={style.Loginbutton}
              type="submit"
              textContent="Login"
              onClick={handleNavigate}
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
        </div>
      </div>

      <div className={style.advert}>
        <img src={advert} height={200} alt="" width={1000} />
      </div>

      {/* Display Products Dynamically */}
      <div className={style.firstDivDisplay}>
        {products.map((product, index) => (
          <div key={index} className={style.first_advert_color}>
            <img
              src={product.image}
              width={170}
              height={250}
              alt={product.name}
            />
            <h2>{product.price}</h2>
            <h5>{product.name}</h5>
            <h6>Size: {product.size}</h6>
            <button
              className={style.add_to_cart_button}
              onClick={handleAddToCart}
            >
              <b>add to cart</b>
            </button>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className={style.view_all_button_div}>
        <button className={style.view_all_button}> View All</button>
      </div>

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

      {/* Other Divs */}
      {/* Repeat similar approach for other categories */}
    </div>
  );
};

export default HomePage;
