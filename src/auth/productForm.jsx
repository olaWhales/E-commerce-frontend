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

  // i used this to validate the empty input form
  const handleNavigate = async (event) => {
    event.preventDefault();
    if (
      !sellerId.trim() ||
      !productName.trim() ||
      !productDescription.trim() ||
      !productPrice.trim() ||
      !productQuantity.trim()
    ) {
      alert("All fields are required. Please fill in all fields.");
      return;
    }
    // 
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

// import React, { useState } from "react";
// import style from "../styles/product.module.css";
// import Customizedbutton from "../customButton/customButton";
// import axios from "axios";

// const Product = () => {
//   // State for Create Product
//   const [sellerId, setSellerId] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productDescription, setProductDescription] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [productQuantity, setProductQuantity] = useState("");

//   // State for Delete Product
//   const [productId, setProductId] = useState("");

//   // Toggle State
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [showDeleteForm, setShowDeleteForm] = useState(false);

//   // Create Product Function
//   const handleCreateProduct = async (event) => {
//     event.preventDefault();
//     try {
//       const payload = {
//         sellerId,
//         productName,
//         productDescription,
//         productPrice,
//         productQuantity,
//       };

//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:8000/api/product/create/",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("API Response:", response);

//       if (response.status === 201 || response.status === 200) {
//         setSellerId("");
//         setProductName("");
//         setProductDescription("");
//         setProductPrice("");
//         setProductQuantity("");
//         alert("Product uploaded successfully!");
//       } else {
//         alert("All fields must be set correctly. Please try again.");
//       }
//     } catch (error) {
//       console.error(
//         "Error uploading product:",
//         error.response?.data || error.message
//       );
//       alert("Uploading failed due to a server error. Please try again later.");
//     }
//   };

//   // Delete Product Function
//   const handleDeleteProduct = async (event) => {
//     event.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.delete(
//         `http://localhost:8000/api/product/delete/${productId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Delete API Response:", response);

//       if (response.status === 200) {
//         setProductId("");
//         alert("Product deleted successfully!");
//       } else {
//         alert("Invalid Product ID. Please try again.");
//       }
//     } catch (error) {
//       console.error(
//         "Error deleting product:",
//         error.response?.data || error.message
//       );
//       alert("Delete failed due to a server error. Please try again later.");
//     }
//   };

//   return (
//     <div className={style.mainContainer}>
//       <div className={style.buttonGroup}>
//         <Customizedbutton
//           className={style.button}
//           textContent="Create Product"
//           onClick={() => setShowCreateForm(!showCreateForm)}
//         />
//         <Customizedbutton
//           className={style.button}
//           textContent="Delete Product"
//           onClick={() => setShowDeleteForm(!showDeleteForm)}
//         />
//       </div>

//       <div className={style.formContainer}>
//         {showCreateForm && (
//           <form className={style.form}>
//             <h3>Create Product</h3>
//             <div className={style.formGroup}>
//               <label htmlFor="sellerId">Input your Identity:</label>
//               <input
//                 type="number"
//                 id="sellerId"
//                 name="sellerId"
//                 onChange={(e) => setSellerId(e.target.value)}
//                 placeholder="Enter your seller ID"
//               />
//             </div>
//             <div className={style.formGroup}>
//               <label htmlFor="productName">Product Name:</label>
//               <input
//                 type="text"
//                 id="productName"
//                 name="productName"
//                 onChange={(e) => setProductName(e.target.value)}
//                 placeholder="Enter product Name"
//               />
//             </div>
//             <div className={style.formGroup}>
//               <label htmlFor="productDescription">Description:</label>
//               <input
//                 type="text"
//                 id="productDescription"
//                 name="productDescription"
//                 onChange={(e) => setProductDescription(e.target.value)}
//                 placeholder="Enter product description"
//               />
//             </div>
//             <div className={style.formGroup}>
//               <label htmlFor="productPrice">Price:</label>
//               <input
//                 type="number"
//                 id="productPrice"
//                 name="productPrice"
//                 onChange={(e) => setProductPrice(e.target.value)}
//                 placeholder="Enter product price"
//               />
//             </div>
//             <div className={style.formGroup}>
//               <label htmlFor="productQuantity">Quantity:</label>
//               <input
//                 type="number"
//                 id="productQuantity"
//                 name="productQuantity"
//                 onChange={(e) => setProductQuantity(e.target.value)}
//                 placeholder="Enter product quantity"
//               />
//             </div>
//             <Customizedbutton
//               className={style.button}
//               textContent="Submit"
//               onClick={handleCreateProduct}
//             />
//           </form>
//         )}

//         {showDeleteForm && (
//           <form className={style.form}>
//             <h3>Delete Product</h3>
//             <div className={style.formGroup}>
//               <label htmlFor="productId">Product ID:</label>
//               <input
//                 type="text"
//                 id="productId"
//                 name="productId"
//                 onChange={(e) => setProductId(e.target.value)}
//                 placeholder="Enter product ID"
//               />
//             </div>
//             <Customizedbutton
//               className={style.button}
//               textContent="Delete"
//               onClick={handleDeleteProduct}
//             />
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;
