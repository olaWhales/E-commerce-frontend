import React, { useState } from "react";
import style from "../styles/product.module.css";
import { useNavigate } from "react-router-dom";
import Customizedbutton from "../customButton/customButton";
import axios from "axios";

const Product = () => {
  const [showForm, setShowForm] = useState(false);
  const [sellerId, setSellerId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const navigate = useNavigate();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleNavigate = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        sellerId,
        productName,
        productDescription,
        productPrice,
        productQuantity,
      };

      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/product/create/",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("API Response:", response);

      if (response.status === 201 || response.status === 200) {
        setSellerId("");
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductQuantity("");
        alert("Product uploaded successfully!");
        navigate("/");
      } else {
        alert("All fields must be set correctly. Please try again.");
      }
    } catch (error) {
      console.error(
        "Error uploading product:",
        error.response?.data || error.message
      );
      alert("Uploading failed due to a server error. Please try again later.");
    }
  };

  return (
    <div>
      <Customizedbutton
        className={style.uploadButton}
        type="button"
        textContent="Upload Product"
        onClick={toggleForm}
      />

{/* i use show form here to allow the form to be appearing as wanted */}
      <div className={`${style.formContainer} ${showForm ? style.show : ""}`}>
        <form className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="name">Input your Identity:</label>
            <input
              type="number"
              id="sellerId"
              name="sellerId"
              onChange={(e) => setSellerId(e.target.value)}
              placeholder="Enter your seller ID"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="productName"
              name="productName"
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product Name"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="stock">Description:</label>
            <input
              type="text"
              id="productDescription"
              name="productDescription"
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter product description"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter product price"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="productQuantity"
              name="productQuantity"
              onChange={(e) => setProductQuantity(e.target.value)}
              placeholder="Enter product quantity"
            />
          </div>
          <Customizedbutton
            className={style.button}
            type="button"
            textContent="Submit"
            onClick={handleNavigate}
          />

          <Customizedbutton
            className={style.closeButton}
            type="button"
            textContent="Close"
            onClick={toggleForm}
          />
        </form>
      </div>
    </div>
  );
};

export default Product;

