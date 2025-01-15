import React from "react";
import Customizedbutton from "../customButton/customButton";
import { Link } from "react-router-dom";
import HomePage from "../auth/HomePage";
import style from "../styles/buyerlogin.module.css"
import handshake from "../pictures/handshake.jpeg"
import buyerBag from  "../pictures/buyerlogin.jpeg"
import { useNavigate } from "react-router-dom";
import route from "../routes/route";


const buyerLogin = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/"); // Navigate to the home page route
  };

  return (
    <div>
      <div className={style.mainform}>
        <form className={style.forms} action="">
          <h1 className={style.welcome}>
            <span className={style.we}>WEL</span>
            <span className={style.co}>CO</span>ME
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
            route="/"
          />
        </form>
      </div>

      <div className={style.second_div}>
        <div className={style.dontHaveAccount}>
          <h2>
            Don't have an account? {">>>"}
            <Link to="/buyerSignUp" className={style.link}>
              Click me
            </Link>
          </h2>
        </div>
      </div>

    <div className={style.become}>
      <div>
        <h3> Do you want to become a seller <Link to= "/SellerSignUp" className={style.becomeSeller}>REGISTER</Link></h3>
        
      </div>
    </div>

    </div>
  );
};

export default buyerLogin;

