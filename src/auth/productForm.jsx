import React, { useState } from "react";
import style from "../styles/product.module.css";
import { Link, useNavigate } from "react-router-dom";
import Customizedbutton from "../customButton/customButton";
import axios from "axios"; // Fixed import



const Product = () => {
    const [sellerId, setSellerId] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    
    const navigate = useNavigate();
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
      alert("All field must be set correctly. Please try again.");
    }
  } catch (error) {
    console.error(
      "error uploading product:",
      error.response?.data || error.message
    );
    alert("Uploading failed due to a server error. Please try again later.");
  }
};




  // // Define the form fields manually
  // const [form, setForm] = useState({
  //   sellerId: "",
  //   productName: "",
  //   productDescription: "",
  //   productPrice: "",
  //   productQuantity: "",
  // });

  // // Handle input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Form data:", form);
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8000/api/product/create/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(form),
  //       }
  //     );
  //     if (response.ok) {
  //       console.log("Product created successfully!");
  //     } else {
  //       console.error("Error creating product.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit} className={style.form}>
    <form className={style.form}>
      <div className={style.formGroup}>
        <label htmlFor="name">Input your Identity:</label>
        <input
          type="number"
          id="sellerId"
          name="sellerId"
          // value={form.sellerId}
          // onChange={handleChange}
          onChange={(e) => setSellerId(e.target.value)}
          placeholder="Enter your seller ID"
        />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="name">productName:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          // value={form.productName}
          // onChange={handleChange}
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
          // value={form.productDescription}
          // onChange={handleChange}
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
          // value={form.productPrice}
          // onChange={handleChange}
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
          // value={form.productQuantity}
          // onChange={handleChange}
          onChange={(e) => setProductQuantity(e.target.value)}
          placeholder="Enter product quantity"
        />
      </div>
      <Customizedbutton
        className={style.button}
        type="button"
        textContent="Submit"
        onClick={handleNavigate}
      />{" "}
    </form>
  );
};

export default Product;
