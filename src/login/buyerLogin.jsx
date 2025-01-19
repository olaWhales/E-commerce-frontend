import React, { useState } from "react";
import Customizedbutton from "../customButton/customButton";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/buyerlogin.module.css";
import handshake from "../pictures/handshake.jpeg";
import axios from "axios"; // Fixed import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BuyerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNavigate = async (event) => {
    event.preventDefault();

    try {
      const payload = { email, password };
      const response = await axios.post(
        "http://localhost:8080/e_commerce/api/buyer_login_api/",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response);

      if (response.status === 201 || response.status === 200) {
        setEmail("");
        setPassword("");
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error(
        "Login error details:",
        error.response?.data || error.message
      );
      alert("Login failed due to a server error. Please try again later.");
    }
  };

  return (
    <div>
      <div className={style.mainform}>
        <form className={style.forms}>
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
              onChange={(e) => setEmail(e.target.value)}
              className={style.input}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
              className={style.input}
              required
            />
          </div>
          <Customizedbutton
            className={style.button}
            type="button"
            textContent="Submit"
            onClick={handleNavigate}
          />
        </form>
      </div>

      <div className={style.second_div}>
        <div className={style.dontHaveAccount}>
          <h2>
            Don't have an account? {">>>"}{" "}
            <Link to="/buyerSignUp" className={style.link}>
              Click me
            </Link>
          </h2>
        </div>
      </div>

      <div className={style.become}>
        <div>
          <h3>
            <i>HI Seller, click the arrow to login</i>
            <Link
              to="/SellerLogin"
              style={{ marginLeft: "12px", textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            Do you want to become a seller{" "}
            <Link to="/SellerSignUp" className={style.becomeSeller}>
              <button className={style.apply}>
                <b>Register</b>
              </button>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BuyerLogin;
