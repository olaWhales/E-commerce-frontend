import React, { useState } from "react";
import style from "../styles/product.module.css";

const Product = () => {
  // Define the form fields manually
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
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
    try {
      const response = await fetch(
        "http://localhost:8080/e_commerce/api/products/create_product/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter product description"
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Enter product price"
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          placeholder="Enter product quantity"
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Enter product category"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Product;
