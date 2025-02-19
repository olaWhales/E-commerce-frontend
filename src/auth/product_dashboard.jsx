import React, { useState } from "react";
import style from "../styles/product.module.css";
import { useNavigate } from "react-router-dom";
import Customizedbutton from "../customButton/customButton";
import axios from "axios";

const Product = () => {
  // Create product form state
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [sellerId, setSellerId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  // Delete product form state
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [productId, setProductId] = useState("");

  const navigate = useNavigate();

  // Toggle functions
  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
    setShowDeleteForm(false); // Ensure delete form is hidden when showing create form
  };

  const toggleDeleteForm = () => {
    setShowDeleteForm(!showDeleteForm);
    setShowCreateForm(false); // Ensure create form is hidden when showing delete form
  };

  // Create product function
  const handleNavigate = async (event) => {
    event.preventDefault();
    if (
      !sellerId.trim() ||
      !productName.trim() ||
      !productDescription.trim() ||
      !productPrice.trim() ||
      !productQuantity.trim()
    ) 
    

    try {
      const payload = {
        sellerId,
        productName,
        productDescription,
        productPrice,
        productQuantity,
      } 
        // {
      //   alert("All fields are required. Please fill in all fields.");
      //   return;
      // };

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

      if (response.status === 201 || response.status === 200) {
        setSellerId("");
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductQuantity("");
        alert("Product uploaded successfully!");
        // navigate("/");
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

  // Delete product function
  // const deleteProduct = async (event) => {

  //   const payload = {
  //     sellerId,
  //     productId,
  //   };
  //   event.preventDefault();
  //   if (!sellerId.trim() || !productId.trim()){
  //     alert("Product ID is required. Please enter a product ID.");
  //     return;
  //   } 
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.delete(
  //       `http://localhost:8000/api/product/delete/`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         data: {sellerId}, // ✅ Correct way to send body with DELETE request
  //       }
  //     );

  //     if ( response.status === 200) {
  //       setSellerId("");
  //       setProductId("");
  //       alert("Product deleted successfully!");
  //     } else {
  //       alert("Invalid Product ID. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error(
  //       "Error deleting product:",
  //       error.response?.data || error.message
  //     );
  //     alert("Delete failed due to a server error. Please try again later.");
  //   }
  // };

const deleteProduct = async (event) => {
  event.preventDefault();

  if (!sellerId.trim() || !productId.trim()) {
    alert("Product ID is required. Please enter a product ID.");
    return;
  }

  try {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token); // Debugging step

    const response = await axios.delete(
      `http://localhost:8000/api/product/delete/`, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // ✅ Ensure correct format
        },
        data: { sellerId , productId}, 
      }
    );

    if (response.status === 200) {
      setSellerId("");
      setProductId("");
      alert("Product deleted successfully!");
    } else {
      alert("Invalid Product ID. Please try again.");
    }
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    );
    alert("Delete failed due to a server error. Please try again later.");
  }
};



  return (
    <div className={style.productContainer}>
      <Customizedbutton
        className={style.uploadButton}
        type="button"
        textContent="Upload Product"
        onClick={toggleCreateForm}
      />
      <Customizedbutton
        className={style.deleteButton}
        type="button"
        textContent="Delete Product"
        onClick={toggleDeleteForm}
      />

      {/* Create Product Form */}
      <div className={`${style.formContainer} ${showCreateForm ? style.show : ""}`}>
        <form className={style.form}>
          <h3>Create Product</h3>
          <div className={style.formGroup}>
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              name="productName"
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product Name"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="productDescription">Description:</label>
            <input
              type="text"
              id="productDescription"
              name="productDescription"
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter product description"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="productPrice">Price:</label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter product price"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="productQuantity">Quantity:</label>
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
            onClick={toggleCreateForm}
          />
        </form>
      </div>

      {/* Delete Product Form */}
      <div className={`${style.deleteContainer} ${showDeleteForm ? style.show : ""}`}>
        <form className={style.form} onSubmit={deleteProduct}>
          <h3>Delete Product</h3>
          <div className={style.formGroup}>
          <label htmlFor="sellerId">Seller ID:</label>
            <input
              type="number"
              id="sellerId"
              name="sellerId"
              onChange={(e) => setSellerId(e.target.value)}
              placeholder="Enter seller ID"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="productId">Product ID:</label>
            <input
              type="number"
              id="productId"
              name="productId"
              onChange={(e) => setProductId(e.target.value)}
              placeholder="Enter product ID"
            />
          </div>
          <Customizedbutton
            className={style.button}
            type="submit"
            textContent="Delete"
            onClick={deleteProduct}
          />
          <Customizedbutton
            className={style.closeButton}
            type="button"
            textContent="Close"
            onClick={toggleDeleteForm}
          />
        </form>
      </div>
    </div>
  );
};

export default Product;
