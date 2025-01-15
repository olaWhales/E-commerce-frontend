import React, { useEffect , useState } from "react";


const ProductForm = () => {
    <div key={attribute.name}>
      <label htmlFor={attribute.name}>{attribute.name}:</label>
      <input
        id={attributes.name}
        type={attributes.type}
        name={attributes.name}
        value={form[attribute.name] || ""}
        onChange={handleChange}
      />
    </div>;

  const [form, setForm] = useState({});
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/product/attributes"
        ); // Backend endpoint
        const data = await response.json();
        setAttributes(data); // Example: [{ name: "name", type: "text" }, { name: "price", type: "number" }]
      } catch (error) {
        console.error("Error fetching attributes:", error);
      }
    };

    fetchAttributes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await fetch("http://localhost:8080/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
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
    <form onSubmit={handleSubmit}>
      {attributes.map((attribute) => (
        <div key={attribute.name}>
          {/* <label>{attribute.name}:</label> */}
          <input
            type={attribute.type}
            name={attribute.name}
            value={form[attribute.name] || ""}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
