// import React, { useState } from "react";
// import style from "../styles/product.module.css";

// const Product = () => {
//   // Define the form fields manually
//   const [form, setForm] = useState({
//     sellerId: "",
//     productName: "",
//     productDescription: "",
//     productPrice: "",
//     productQuantity: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form data:", form);
//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/product/create/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(form),
//         }
//       );
//       if (response.ok) {
//         console.log("Product created successfully!");
//       } else {
//         console.error("Error creating product.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={style.form}>
//       <div className={style.formGroup}>
//         <label htmlFor="name">Input your Identity:</label>
//         <input
//           type="number"
//           id="sellerId"
//           name="sellerId"
//           value={form.sellerId}
//           onChange={handleChange}
//           placeholder="Enter your seller ID"
//         />
//       </div>
//       <div className={style.formGroup}>
//         <label htmlFor="name">productName:</label>
//         <input
//           type="text"
//           id="productName"
//           name="productName"
//           value={form.productName}
//           onChange={handleChange}
//           placeholder="Enter product Name"
//         />
//       </div>

//       <div className={style.formGroup}>
//         <label htmlFor="stock">Description:</label>
//         <input
//           type="text"
//           id="productDescription"
//           name="productDescription"
//           value={form.productDescription}
//           onChange={handleChange}
//           placeholder="Enter product description"
//         />
//       </div>

//       <div className={style.formGroup}>
//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="productPrice"
//           name="productPrice"
//           value={form.productPrice}
//           onChange={handleChange}
//           placeholder="Enter product price"
//         />
//       </div>

//       <div className={style.formGroup}>
//         <label htmlFor="quantity">Quantity:</label>
//         <input
//           type="number"
//           id="productQuantity"
//           name="productQuantity"
//           value={form.productQuantity}
//           onChange={handleChange}
//           placeholder="Enter product quantity"
//         />
//       </div>

//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default Product;


import React, { useState } from "react";
import style from "../styles/product.module.css";

const Product = () => {
  // Define the form fields manually
  const [form, setForm] = useState({
    sellerId: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    productQuantity: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", form);

    // Retrieve the token from localStorage (assuming it's stored there)
    const token = localStorage.getItem("token"); // Update this if you store it elsewhere

    if (!token) {
      console.error("No token found! Please log in.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/product/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send token with request
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        console.log("Product created successfully!");
      } else {
        console.error("Error creating product.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.formGroup}>
        <label htmlFor="name">Input your Identity:</label>
        <input
          type="number"
          id="sellerId"
          name="sellerId"
          value={form.sellerId}
          onChange={handleChange}
          placeholder="Enter your seller ID"
        />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="name">productName:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={form.productName}
          onChange={handleChange}
          placeholder="Enter product Name"
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="stock">Description:</label>
        <input
          type="text"
          id="productDescription"
          name="productDescription"
          value={form.productDescription}
          onChange={handleChange}
          placeholder="Enter product description"
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="productPrice"
          name="productPrice"
          value={form.productPrice}
          onChange={handleChange}
          placeholder="Enter product price"
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="productQuantity"
          name="productQuantity"
          value={form.productQuantity}
          onChange={handleChange}
          placeholder="Enter product quantity"
        />
      </div>

      <button type="submit">Upload</button>
    </form>
  );
};

export default Product;
