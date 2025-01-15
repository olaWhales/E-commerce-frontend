import React from "react";
import Customizedbutton from "../customButton/customButton";
import { Link } from "react-router-dom";
import HomePage from "../auth/HomePage";
import product from "../auth/products";
import style from "../styles/buyerlogin.module.css";
import handshake from "../pictures/handshake.jpeg";
import buyerBag from "../pictures/buyerlogin.jpeg";
import { useNavigate } from "react-router-dom";
import route from "../routes/route";

const SellerLogin = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("product/"); // Navigate to the home page route
  };

  return (
    <div>
      <div className={style.mainform}>
        <form className={style.forms} action="">
          <h1 className={style.welcome}>
            <span className={style.we}>PLEASE</span>
            <span className={style.co}>LOGIN YOUR</span>DETAILS
          </h1>
          <img src={handshake} alt="Welcome Handshake" />

          <div>
            <input
              type="email"
              name="email"
              placeholder="INPUT YOUR EMAIL"
              className={style.input}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              className={style.input}
              required
            />
          </div>

          <Customizedbutton
            style={style.button} // Use className for styling
            type="button"
            textContent="Submit"
            onClick={handleNavigate} // Trigger navigation on click
            route="product/"
          />
        </form>
      </div>

      {/* <div className={style.become}>
        <div>
          <h3>
            {" "}
            Do you want to become a seller{" "}
            <Link to="/SellerSignUp" className={style.becomeSeller}>
              REGISTER
            </Link>
          </h3>
        </div>
      </div> */}
    </div>
  );
};

export default SellerLogin;
