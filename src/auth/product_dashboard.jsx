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

  // const [SellerId, setSellerId] = useState("");

  // Update product form state
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [id, setId] = useState("");
  // const [sellerId, setSellerId] = useState("");
  // const [productName, setProductName] = useState("");
  // const [productDescription, setProductDescription] = useState("");
  // const [productPrice, setProductPrice] = useState("");
  // const [productQuantity, setProductQuantity] = useState("");
  // const [update, setError] = useState("");

  // Delete product form state
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [productId, setProductId] = useState("");

  // Find a product form state
  const [showViewAProductForm, setShowAProductForm] = useState(false);
  const [showViewAllProductForm, setShowAllProductForm]= useState(false);
  const [productDetails, setProductDetails] = useState(null); // ✅ Already declared

  const navigate = useNavigate();

  // Toggle functions
  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
    setShowDeleteForm(false);
    setShowUpdateForm(false);
    setShowAProductForm(false);
  };

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
    setShowCreateForm(false);
    setShowDeleteForm(false);
    setShowAProductForm(false);
  };

  const toggleDeleteForm = () => {
    setShowDeleteForm(!showDeleteForm);
    setShowCreateForm(false);
    setShowUpdateForm(false);
    setShowAProductForm(false);
  };
  const toggleViewAproductForm = () => {
    setShowAProductForm(!showViewAProductForm);
    setShowCreateForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(false);
    setProductDetails(null);
  };
    const toggleViewAllproductForm = () => {
      setShowAllProductForm(!showViewAllProductForm);
      setShowCreateForm(false);
      setShowUpdateForm(false);
      setShowDeleteForm(false);
      setShowAProductForm(false);
      setProductDetails(null);
    };

  //i Create product function
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
        };
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
        alert(
          "Uploading failed due to a server error. Please try again later."
        );
      }
  };


  // Update product function
  const updateProduct = async (event) => {
    event.preventDefault();

    if (
      !id.trim() ||
      !sellerId.trim() ||
      !productName.trim() ||
      !productDescription.trim() ||
      !productPrice.trim() ||
      !productQuantity.trim()

      // {
      //   alert(
      //     "All fields are required. Please fill in all fields."
      //   );
      //   // return;
      // }
    )
      console.log("id", id);
    try {
      const payload = {
        id,
        sellerId,
        productName,
        productDescription,
        productPrice,
        productQuantity,
      };

      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to update a product.");
        return;
      }
      const response = await axios.put(
        "http://localhost:8000/api/product/update/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Product updated successfully!");

        await fetchProducts();

        setId("");
        setSellerId("");
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductQuantity("");
      } else {
        alert("Failed to update product. Please try again.");
      }
    } catch (error) {
      console.error(
        "Error updating product:",
        error.response?.data || error.message
      );
      alert("Updating failed due to a server error. Please try again later.");
    }
  };
  // Function to refetch the product list
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/update/"
      );
      fetchProducts(response.data); // Update your state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };




  //  this function is to view a product
  const ViewAProduct = async (event) => {
    event.preventDefault();

    console.log(
      "Before validation -> productId:",
      productId,
      "sellerId:",
      sellerId
    );

    if (!productId || !sellerId) {
      alert("Product and seller ID are required.");
      return;
    }

    console.log("Sending request with:", { productId, sellerId });

    try {
      const payload = { productId, sellerId };
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to view a product.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/api/product/findSingle/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response);

      if (response.status === 200) {
        console.log("Product found:", response.data);
        setProductDetails(response.data); // ✅ Store entire response object
        alert("Product found!");
      } else {
        alert("Failed to view product. Please try again.");
      }
    } catch (error) {
      console.error(
        "Error fetching product:",
        error.response?.data || error.message
      );
      console.log("Full error:", error);
      alert("Failed to fetch product. Please try again later.");
    }
  };



  // view all product 
   const ViewAllProduct = async (event) => {
     event.preventDefault();

    //  console.log(
    //    "Before validation -> productId:",
    //    productId,
    //    "sellerId:",
    //    sellerId
    //  );

     if (!sellerId) {
       alert("Hi! Seller. Your identity number are required.");
       return;
     }

     console.log("Sending request with:", {sellerId });

     try {
       const payload = { sellerId };
       const token = localStorage.getItem("token");

       if (!token) {
         alert("You must be logged in to view a product.");
         return;
       }

       const response = await axios.post(
         "http://localhost:8000/api/product/findAll_product/",
         payload,
         {
           headers: {
             Authorization: `Bearer ${token}`,
             "Content-Type": "application/json",
           },
         }
       );
       console.log("Response:", response);

       if (response.status === 200) {
         console.log("Product found:", response.data);
         setProductDetails(response.data); // ✅ Store entire response object
         alert("Product found!");
       } else {
         alert("Failed to view product. Please try again.");
       }
     } catch (error) {
       console.error(
         "Error fetching product:",
         error.response?.data || error.message
       );
       console.log("Full error:", error);
       alert("Failed to fetch product. Please try again later.");
     }
   };

  // Delete product function
  const deleteProduct = async (event) => {
    event.preventDefault();

    if (!sellerId.trim() || !productId.trim()) {
      // if(!productId.trim()) {
      alert("Product ID is required. Please enter a product ID.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      console.log("Token from localStorage:", token); // i tried debug here

      const response = await axios.delete(
        `http://localhost:8000/api/product/delete/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // ✅ Ensure correct format
          },
          data: { sellerId, productId },
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
        className={style.updateButton}
        type="button"
        textContent="Update Product"
        onClick={toggleUpdateForm}
      />
      <Customizedbutton
        className={style.deleteButton}
        type="button"
        textContent="Delete Product"
        onClick={toggleDeleteForm}
      />
      <Customizedbutton
        className={style.viewAProductButton}
        type="button"
        textContent="View a Product"
        onClick={toggleViewAproductForm}
      />

      {/* Create Product Form */}
      <div
        className={`${style.formContainer} ${showCreateForm ? style.show : ""}`}
      >
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

      {/* Update Product Form */}
      <div
        className={`${style.updateContainer} ${
          showUpdateForm ? style.show : ""
        }`}
      >
        <form className={style.form}>
          <h3>Update Product</h3>
          <div className={style.formGroup}>
            <label htmlFor="id">Product id:</label>
            <input
              type="number"
              id="productId"
              name="productId"
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter product id"
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="sellerId">sellerId:</label>
            <input
              type="number"
              id="sellerId"
              name="sellerId"
              onChange={(e) => setSellerId(e.target.value)}
              placeholder="Enter seller id"
            />
          </div>

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
            onClick={updateProduct}
          />
          <Customizedbutton
            className={style.closeButton}
            type="button"
            textContent="Close"
            onClick={toggleUpdateForm}
          />
        </form>
      </div>

      {/* View a Product Form */}
      <div
        className={`${style.viewAProductContainer} ${
          showViewAProductForm ? style.show : ""
        }`}
      >
        <form className={style.form}>
          <h3>View a Product</h3>
          <div className={style.formGroup}>
            <label htmlFor="sellerId">sellerId:</label>
            <input
              type="number"
              id="sellerId"
              name="sellerId"
              onChange={(e) => setSellerId(e.target.value)}
              placeholder="Enter seller id"
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="id">Product id:</label>
            <input
              type="number"
              id="productId"
              name="productId"
              onChange={(e) => setProductId(e.target.value)}
              placeholder="Enter product id"
            />
          </div>
          <Customizedbutton
            className={style.button}
            type="button"
            textContent="Submit"
            onClick={ViewAProduct}
          />
          <Customizedbutton
            className={style.closeButton}
            type="button"
            textContent="Close"
            onClick={toggleViewAproductForm}
          />
        </form>

        {/* ✅ Product Details Section - Only Shows if a Product is Found */}
        {productDetails && (
          <div className={style.productDetails}>
            <h3>Product Details</h3>
            <p>
              <strong>Name:</strong> {productDetails.productName}
            </p>
            <p>
              <strong>Description:</strong> {productDetails.productDescription}
            </p>
            <p>
              <strong>Price:</strong> ${productDetails.productPrice}
            </p>
            <p>
              <strong>Quantity:</strong> {productDetails.productQuantity}
            </p>
          </div>
        )}
      </div>




      {/* View a Product Form */}
      <div
        className={`${style.viewAProductContainer} ${
          showViewAProductForm ? style.show : ""
        }`}
      >
        <form className={style.form}>
          <h3>View a Product</h3>
          <div className={style.formGroup}>
            <label htmlFor="sellerId">sellerId:</label>
            <input
              type="number"
              id="sellerId"
              name="sellerId"
              onChange={(e) => setSellerId(e.target.value)}
              placeholder="Enter seller id"
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="id">Product id:</label>
            <input
              type="number"
              id="productId"
              name="productId"
              onChange={(e) => setProductId(e.target.value)}
              placeholder="Enter product id"
            />
          </div>
          <Customizedbutton
            className={style.button}
            type="button"
            textContent="Submit"
            onClick={ViewAProduct}
          />
          <Customizedbutton
            className={style.closeButton}
            type="button"
            textContent="Close"
            onClick={toggleViewAproductForm}
          />
        </form>

        {/* ✅ Product Details Section - Only Shows if a Product is Found */}
        {productDetails && (
          <div className={style.productDetails}>
            <h3>Product Details</h3>
            <p>
              <strong>Name:</strong> {productDetails.productName}
            </p>
            <p>
              <strong>Description:</strong> {productDetails.productDescription}
            </p>
            <p>
              <strong>Price:</strong> ${productDetails.productPrice}
            </p>
            <p>
              <strong>Quantity:</strong> {productDetails.productQuantity}
            </p>
          </div>
        )}
      </div>

      {/* Delete Product Form */}
      <div
        className={`${style.deleteContainer} ${
          showDeleteForm ? style.show : ""
        }`}
      >
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
