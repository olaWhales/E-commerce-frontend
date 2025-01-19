import React, { useState } from "react";
import Customizedbutton from "../customButton/customButton";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/buyerlogin.module.css";
import handshake from "../pictures/handshake.jpeg";
import axios from "axios";

const SellerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNavigate = async (event) => {
    event.preventDefault();

    try {
      const payload = { email, password };
      const response = await axios.post(
        "http://localhost:8080/e_commerce/api/seller_login_api/",
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
        navigate("/product"); // Navigate to the product page
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
            <span className={style.we}>PLEASE</span>
            <span className={style.co}>LOGIN YOUR</span>DETAILS
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
            className={style.button} // Use className for styling
            type="button"
            textContent="Submit"
            onClick={handleNavigate}
          />
        </form>
      </div>
    </div>
  );
};

export default SellerLogin;
